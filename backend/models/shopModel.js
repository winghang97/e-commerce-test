import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  isVacant: {
    type: Boolean,
    required: true,
    default: true,
  },
  name: {
    type: String,
  },
  video: {
    type: String,
  },
  audio: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
