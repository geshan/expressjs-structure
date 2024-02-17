import { Router } from "express";
const router = Router();
import {
  getOffers,
  getOffer,
  updateOffer,
} from "../controllers/offers.controller";

/* GET programming languages. */
router.get("/", getOffers);

router.get("/:id", getOffer);

router.patch("/:id", updateOffer);

export default router;
