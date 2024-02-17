import { Router } from "express";
const router = Router();
import {
  signup,
  login,
  logout,
  passwordReset,
} from "../controllers/auth.controller";

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/password-reset", passwordReset);

export default router;
