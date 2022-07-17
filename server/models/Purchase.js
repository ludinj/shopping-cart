import mongoose from "mongoose";
import { CarItemSchema } from "./CarItem.js";

const PurchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    carItems: {
      type: [CarItemSchema],
    },
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", PurchaseSchema);
