import mongoose from "mongoose";

export const CarItemSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },

    category: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CarItem", CarItemSchema);
