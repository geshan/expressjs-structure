import { Router } from "express";
const router = Router();
import {
  getDeliveries,
  getDelivery,
  getDeliveryItems,
  updateDeliveryStatus,
  contactCustomer,
  updateCourierNotes,
  reportIssue,
} from "../controllers/deliveries.controller";

router.get("/", getDeliveries);

router.get("/:id", getDelivery);

router.get(":id/items", getDeliveryItems);

router.patch(":id/status", updateDeliveryStatus);

router.post("/:id/contact-customer", contactCustomer);

// Should this not be patch?
router.post("/:id", updateCourierNotes);

router.post("/:id/report-issue", reportIssue);

export default router;
