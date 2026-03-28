const Product = require("../models/Product");
const analyze = require("../utils/analysis");

// ✅ CREATE + ANALYZE
exports.addProduct = async (req, res) => {
  try {
    // ✅ validation INSIDE function
    if (!req.body.name || !req.body.currentPrice) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = new Product(req.body);
    await product.save();

    const result = analyze(product);

    res.json({
      message: "Product saved ✅",
      analysis: result
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET ALL
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({ message: "Deleted successfully ❌" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.analyzeProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Not found" });
    }

    const result = analyze(product);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

