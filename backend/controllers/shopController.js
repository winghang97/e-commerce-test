import AsyncHandler from "express-async-handler";
import Shop from "../models/shopModel.js";

// @desc    Fetch all shops
// @route   GET /api/shops
// @access  Public
const getShops = AsyncHandler(async (req, res) => {
  const shops = await Shop.find({});
  res.json(shops);
});

const getAllProducts = AsyncHandler(async (req, res) => {
  const foundShop = await Shop.find({ name: req.params.username }).populate(
    "products"
  );
  res.json(foundShop);
});

export { getShops, getAllProducts };
