// const express = require("express");
// const router = express.Router();

// const Product = require("../models/Product");
// const analyze = require("../utils/analysis");

// // ✅ GET ALL PRODUCTS
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // ✅ GET PRODUCT BY ID
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: "Not found" });
//     }

//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // ✅ CREATE + ANALYZE
// router.post("/add", async (req, res) => {
//   try {
//     const product = new Product(req.body);

//     // save in DB
//     await product.save();

//     // analyze after saving
//     const result = analyze(product);

//     res.json({
//       message: "Product saved ✅",
//       analysis: result
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  analyzeProduct
} = require("../controllers/productController");

// ✅ correct place for routes
router.post("/add", addProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/analyze/:id", analyzeProduct);

module.exports = router;