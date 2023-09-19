const express = require("express");
const { register,login,updateUser, } = require("../controllers/userControllers");
const usersRouter = express.Router();

// /users/register -- POST/user  ==> To register a new user.
usersRouter.post("/register", register);

// /users/login -- POST/user  ==> To login/generate a new token.
usersRouter.post("/login", login);



module.exports = { usersRouter};