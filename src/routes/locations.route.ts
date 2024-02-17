import { Router } from "express";
const router = Router();
import {
  getLocationComments,
  createLocationComment,
  updateLocationComment,
  upvoteLocationComment,
} from "../controllers/locations.controller";

router.get("/", getLocationComments);

router.post("/", createLocationComment);

router.patch("/:id", updateLocationComment);

router.patch("/:id", upvoteLocationComment);

export default router;
