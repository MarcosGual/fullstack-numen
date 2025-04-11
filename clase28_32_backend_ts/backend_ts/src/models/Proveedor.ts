import mongoose, { Schema } from "mongoose";

export interface IProveedor {
    nombre: string;
    domicilio: string;
    telefono: number;
    ciudad: string;
    provincia: string;
    pais: string;
    codigoPostal: string;
}

const PrendaSchema = new Schema<IProveedor>(
    {
    },
    {timestamps: true}
)

export const Prenda = mongoose.model("Prenda", PrendaSchema);