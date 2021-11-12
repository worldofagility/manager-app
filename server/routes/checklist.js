import express from 'express';
import {
  addChecklist,
  deleteChecklist,
  getAllChecklist,
  getChecklist,
  updateChecklist,
} from '../controllers/checklist.js';

const router = express.Router();

router.get('/', getAllChecklist);

router.get('/:id', getChecklist);

router.post('/', addChecklist);

router.patch('/', updateChecklist);

router.delete('/:id', deleteChecklist);

export default router;
