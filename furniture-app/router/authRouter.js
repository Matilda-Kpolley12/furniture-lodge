const express = require ("express");
const router = express.Router();
const {register, login, getUsers} = require ("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers )

export default router;