import { Request, Response } from 'express';
import { Prenda } from '../models/Prenda';
import axios from 'axios';

export const getAllItems = async (req: Request, res: Response) => {
    try {
        const items = await Prenda.find();
        res.status(200).json({ items, statusCode: 200, msj: 'Ok' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al obtener items - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al obtener items' })
        }
    }
}

export const getItemById = async (req: Request, res: Response) => {
    try {
        const item = await Prenda.findById(req.params.id);

        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: "No se encontró el item solicitado con el id: " + req.params.id });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al obtener items - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al obtener items' })
        }
    }
}

export const createItem = async (req: Request, res: Response) => {
    try {
        const { codigo, nombre, precio, stock } = req.body;
        const { data } = await axios.get("https://dolarapi.com/v1/dolares/bolsa");
        const precioUSD = precio / data.venta;
        const nuevaPrenda = await Prenda.create({ codigo, nombre, precio, precioUSD, stock });
        res.status(201).json({ nuevaPrenda, statusCode: 201, msj: 'Ok' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al crear nuevo item - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al crear nuevo item' })
        }
    }
}

export const updateItemById = async (req: Request, res: Response) => {
    try {
        const { codigo, nombre, precio, stock } = req.body;
        const prendaActualizada = await Prenda.findByIdAndUpdate(req.params.id, { codigo, nombre, precio, stock });
        res.status(200).json({ prendaActualizada, statusCode: 200, msj: 'Ok' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al actualizar item - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al actualizar item' })
        }
    }
}

export const unsuscribeItemById = async (req: Request, res: Response) => {
    try {
        const prendaActualizada = await Prenda.findByIdAndUpdate(req.params.id, { alta: false });
        res.status(200).json({ prendaActualizada, statusCode: 200, msj: 'Ok' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al actualizar item - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al actualizar item' })
        }
    }
}

export const deleteItemById = async (req: Request, res: Response) => {
    try {
        await Prenda.findByIdAndDelete(req.params.id);
        res.status(200).json({ statusCode: 200, msj: 'Ok' })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, msj: 'Error al eliminar item - ' + error.message })
        } else {
            res.status(400).json({ statusCode: 400, msj: 'Error al eliminar item' })
        }
    }
}