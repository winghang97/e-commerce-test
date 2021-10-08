import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import shops from "./data/shops.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Shop from "./models/shopModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Shop.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleShops = shops.map((shop) => {
      return { ...shop, user: adminUser };
    });

    const shopSeeder = await Shop.insertMany(sampleShops);

    const testShop = shopSeeder[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, shopId: testShop, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    await Shop.findByIdAndUpdate(
      { products: mongoose.Types.ObjectId(testShop) },
      {
        $push: { products: sampleProducts._id },
      }
    );

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await Shop.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
