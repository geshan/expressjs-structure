import { Router } from "express";
const router = Router();
import {
  getCourier,
  getCourierFullSettings,
  updateCourierFullSettings,
  updateCourierAvailability,
  updateCourierOrderSetting,
  updateCourierNode,
  getCourierNodes,
  updateCourierNodes,
  getCourierQuickAccessSettings,
} from "../controllers/couriers.controller";

router.get("/", getCourier);

router.get("/full-settings", getCourierFullSettings);

router.patch("/full-settings", updateCourierFullSettings);

router.patch("/availability", updateCourierAvailability);

router.patch("/order-setting", updateCourierOrderSetting);

// Clarify what the desired functionality of these endpoints are
router.patch("/node", updateCourierNode);
router.get("/nodes", getCourierNodes);
router.post("/nodes", updateCourierNodes);
router.get("/quick-access-settings", getCourierQuickAccessSettings);

export default router;
