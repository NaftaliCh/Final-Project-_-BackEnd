import express from 'express';
import { createField, getFields, getField, updateField, deleteField } from '../controllers/fieldController.js';

const router = express.Router();

router.post('/', createField);
router.get('/', getFields);
router.get('/:id', getField);
router.put('/:id', updateField);
router.delete('/:id', deleteField);

export default router;

//