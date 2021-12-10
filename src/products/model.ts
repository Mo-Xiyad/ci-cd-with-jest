import { ProductSchema } from "./schema";
import mongoose from "mongoose";
import { IProduct } from "../types/IProduct";

const { model } = mongoose;

export const ProductModel = model<IProduct>("products", ProductSchema);

// export const ProductModel = new mongoose.model<IProduct>(
//   "products",
//   ProductSchema
// );
