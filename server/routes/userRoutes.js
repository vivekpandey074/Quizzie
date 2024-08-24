const router = require("express").Router();

router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin);

module.exports = router;
