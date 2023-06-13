const { Router } = require("express");
const {
  addProductsToOrder,
  addProductsToCart,
  createCart,
} = require("../controllers/purchase.controllers");
const router = Router();

router.post("/orders/:id/products", addProductsToOrder);

router.post("/cart/:id/products", addProductsToCart);

router.post("/cart/", createCart);

module.exports = router;
