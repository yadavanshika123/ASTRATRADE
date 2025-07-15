const { Signup, Login } = require('../Controllers/AuthController');
const { userVerification } = require('../middlewares/AuthMiddleware'); // ← missing line

const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification); 

router.post("/login", (req, res) => {
  console.log("Login API hit ✅");
  console.log("Request Body:", req.body);
  res.send("OK");
});
router.get("/logout", (req, res) => {
  res.clearCookie("token"); 
  return res.json({ success: true, message: "Logged out successfully" });
});


module.exports = router;
