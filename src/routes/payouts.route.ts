import { Router } from "express";
const router = Router();
import {
  requestPayout,
  connectInitiate,
  connectCallback,
} from "../controllers/payouts.controller";

router.post("/", requestPayout);

router.get("/stripe/connect/initiate", connectInitiate);

router.get("/stripe/connect/callback", connectCallback);

export default router;
