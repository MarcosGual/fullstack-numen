import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";

export const handleValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req); //array de errores

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array(), statusCode: 400, msj: 'Error de validación' });
            return;
        }

        next();
    } catch (error) {
        console.log('Error en el servidor - ', error)
    }
}