import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const usuarioExistente = await User.findOne({ email });

        if (usuarioExistente) {
            res.status(400).json({ statusCode: 400, msj: "Error. Ya existe un usuario con ese email." })
        }

        const usuarioNuevo = new User({ username, email, password });
        await usuarioNuevo.save(); //--> operación de guardado en la base de datos

        res.status(201).json({ statusCode: 201, msj: "Usuario registrado exitosamente." })
    } catch (error) {
        res.status(500).json({ statusCode: 500, msj: "Error al registrar el usuario" })
        console.log(error);
    }
}

export const login = async (req: any, res: Response) => {
    try {
        const { username, password } = req.body;
        const usuario = await User.findOne({ username });

        if (!usuario) {
            res.status(404).json({ statusCode: 404, msj: "Usuario no encontrado" });
            return;
        }

        const passwordValido = await bcrypt.compare(password, usuario.password);
        if (!passwordValido) {
            res.status(401).json({ statusCode: 401, msj: "Password incorrecto" });
            return;
        }

        const token = jwt.sign(
            { id: usuario._id, email: usuario.email, role: usuario.role || "user" },
            process.env.JWT_SECRET || "secreto",
            { expiresIn: "30d" }
        )

        //req.session.userId = usuario._id;
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 60000 * 60 * 24 * 30
        })

        res.json({msj: 'Usuario logueado exitosamente', token})
    } catch (error) {
        res.status(500).json({ statusCode: 500, msj: "Error al iniciar la sesión" })
    }
}