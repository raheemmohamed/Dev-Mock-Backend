const express = require("express");

// Express-Validator
const { body } = require("express-validator");
// user specific controllers
const {
  getAllUsers,
  getUserById,
  addNewUser,
  deleteUser,
} = require("../controllers/users.controller");

// user router middleware
const userRouter = express.Router();

/**
 * All user related routes for GET, POST, DELETE
 */
userRouter.get("/", getAllUsers);
userRouter.get("/getUser/:userId", getUserById);
// routes with validation
userRouter.post(
  "/addNewUser",
  body("name").isLength({ min: 1 }),
  body("userName").isLength({ min: 1 }),
  body("email").isLength({ min: 1 }),
  body("phone").isLength({ min: 1 }),
  body("website").isLength({ min: 1 }),
  body("companyName").isLength({ min: 1 }),
  body("companyLocation")
    .isLength({ min: 1 })
    .withMessage("must be atleast 1 char long"),
  addNewUser
);
userRouter.delete("/deleteUserById/:userId", deleteUser);

// export to outside accessible
module.exports = userRouter;
