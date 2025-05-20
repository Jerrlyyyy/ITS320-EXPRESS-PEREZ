import { createQuote, getAllQuotes } from "../controller/quoteController.js";
import e from 'express';

export const router = e.Router();

router.post('/create', createQuote);
router.get('/', getAllQuotes);
