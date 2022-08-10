// Express Validator
const { validationResult } = require("express-validator");

const userModel = require("../models/users.model");

async function getAllUsers(req, res) {
  const allUserInfo = await userModel.getAllUsers();

  if (allUserInfo.length) {
    res.status(200).json(allUserInfo);
  }
}

async function getUserById(req, res) {
  const userId = req.params.userId;

  if (userId) {
    const user = await userModel.getUserById(userId);

    if (user) {
      return res.status(200).json(user);
    }

    return res.status(404).json({
      failed: "User Not found",
    });
  }
}

async function addNewUser(req, res) {
  // Find the validation errors in this request and wraps them in object with handy function
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  await userModel.addNewUser(req.body);
  res.status(201).json({
    succss: "New User addess successfully",
  });
}

async function deleteUser(req, res) {
  const userId = req.params.userId;

  if (userId) {
    const deleteUser = await userModel.deleteUserById(userId);

    console.log("check my delete user", deleteUser);

    if (deleteUser) {
      return res.status(200).json({
        success: `${deleteUser.name} user deleted successfully`,
      });
    }

    return res.status(404).json({
      failed: "User Not Found",
    });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  deleteUser,
};
