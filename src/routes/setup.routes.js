//import express route
const { Router } = require("express");
// here we use the validators and authenticators
// const authenticate = require("../middlewares/auth.middleware");
const { hasRoles } = require("../middlewares/role.middleware");
// const loginUserValidation = require("../validators/user.validators");
const {
  login,
  validateEmail,
  createRol,
  getAllRoles,
  updateProduct,
  getAllProducts,
  getAllCars,
  createUser,
  createProduct,
} = require("../controllers/setup.controllers");

// create a router instance

const router = Router();

router.post("/users", createUser);
router.post("/product", createProduct);
router.post("/rol", createRol);
router.get("/products", getAllProducts);
router.put("/product/:id", hasRoles(2), updateProduct);
router.get("/cars", getAllCars);
router.get("/rol", getAllRoles);
router.post("/email-validate", validateEmail);
router.post("/login", login);

module.exports = router;

// create category
// router.post("/posts", authenticate, createPost);

// // create category
// router.get("/posts/category/:categoryId", getPostByCategories);

// router.get("/posts/:id/answers", getPostWithAnswer);
// // create todo

// router.post("/todos", createTodos);
