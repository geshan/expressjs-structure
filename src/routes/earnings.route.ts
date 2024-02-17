import { Router } from 'express';
const router = Router();
import { getEarnings } from '../controllers/earnings.controller';

/* GET programming languages. */
router.get('/', getEarnings);

export default router;
