import express from "express";
import passport from "passport";
import { myProfile } from "../controllers/user.js";
// import {
//   getAdminStats,
//   getAdminUsers,
//   logout,
//   myProfile,
// } from "../controllers/user.js";
// import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google"), 
  (req,res)=>{
    res.send("Logged In");
},

);
router.get('/me',myProfile)
export default router;