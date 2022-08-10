const path = require("path");

//Node Json DB configuration
const JsonDB = require("node-json-db").JsonDB;
const Config = require("node-json-db/dist/lib/JsonDBConfig").Config;

// JSON DB file path setting
const db = new JsonDB(
  new Config(
    path.join(__dirname, "..", "public", "db", "nodeMockDB"),
    true,
    true,
    "/"
  )
);

// Get All users from db
async function getAllUsers() {
  try {
    const userData = await db.getData("/users");
    return userData;
  } catch (error) {
    console.error(error);
  }
}

// Get specific user by id
async function getUserById(id) {
  try {
    const userData = await getAllUsers();
    if (userData.length) {
      const indexOfUser = userData.findIndex((user) => user.id == id);
      return userData[indexOfUser];
    }
    return userData;
  } catch (error) {
    console.error(error);
  }
}

// Add new user to db
async function addNewUser(userInfo) {
  try {
    if (userInfo) {
      return await db.push("/users[]", {
        id: Math.floor(Math.random() * 1000),
        name: userInfo.name,
        userName: userInfo.userName,
        email: userInfo.email,
        phone: userInfo.phone,
        website: userInfo.website,
        company: {
          name: userInfo.companyName,
          location: userInfo.companyLocation,
        },
      });
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

// Delete user by Id
async function deleteUserById(id) {
  try {
    const userData = await getAllUsers();
    const deleteUserDetails = await getUserById(id);
    console.log("check my data 1", userData);
    if (userData.length) {
      const indexOfUser = userData.findIndex((user) => user.id == id);

      await db.delete(`/users[${indexOfUser}]`);

      return deleteUserDetails;
    }
  } catch (error) {
    console.error(error);
  }
}

// export all functions to outside for access inside their own modules
module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  deleteUserById,
};
