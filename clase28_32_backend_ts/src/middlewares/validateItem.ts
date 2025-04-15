import { body } from "express-validator";

export const validateItem = [
    body("codigo")
        .notEmpty().withMessage("El código es obligatorio...")
        .isNumeric().withMessage("El código debe ser en formato numérico..."),
    body("nombre")
        .notEmpty().withMessage("El nombre del item es obligatorio...")
        .isString().withMessage("El nombre tiene que ser en formato cadena de texto..."),
    body("precio")
        .notEmpty().withMessage("El precio del item es obligatorio...")
        .isFloat({ min: 100 }).withMessage("Por favor ingrese un precio válido (mayor a 100)..."),
    body("stock")
        .notEmpty().withMessage("El stock del item es obligatorio...")
        .isInt().withMessage("Por favor ingrese un stock válido..."),
]