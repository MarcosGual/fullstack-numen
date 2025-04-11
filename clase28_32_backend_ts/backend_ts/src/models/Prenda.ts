import mongoose, {  Schema } from "mongoose";

export interface IPrenda {
    codigo: number;
    nombre: string;
    precio: number;
    precioUSD: number;
    stock: number;
    alta:boolean;
    proveedor?: string;
}

const PrendaSchema = new Schema<IPrenda>(
    {
        codigo: {type: Number, required: true, unique: true},
        nombre: {type: String, required: true},
        precio: {type: Number, required: true},
        precioUSD: Number,
        stock: {type: Number, required: true},
        alta: {type: Boolean, default: true}
    },
    {timestamps: true}
)

export const Prenda = mongoose.model("Prenda", PrendaSchema);