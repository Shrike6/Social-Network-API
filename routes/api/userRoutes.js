const router = require("express").Router();

const { 
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/userController.js");

router.route("/").get(getUsers).post(createUser);

module.exports = router;