const router = require("express").Router();

const {
  handleGetCurrentUser,
  handleUserRegistration,
  handleUserLogin,
} = require("../controllers/users");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin);
router.get("/getcurrentuser", authMiddleware, handleGetCurrentUser);

module.exports = router;
