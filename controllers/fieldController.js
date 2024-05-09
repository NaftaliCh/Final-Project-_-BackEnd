import { FieldService } from '../services/fieldService.js';
const fieldService = new FieldService();

export async function createField(req, res) {
  try {
    const field = await fieldService.addField(req.body);
    res.status(201).json(field);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getFields(req, res) {
  try {
    const fields = await fieldService.listFields();
    res.json(fields);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getField(req, res) {
  try {
    const field = await fieldService.getFieldDetails(req.params.id);
    res.json(field);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateField(req, res) {
  try {
    const updatedField = await fieldService.modifyField(req.params.id, req.body);
    res.json(updatedField);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteField(req, res) {
  try {
    const result = await fieldService.removeField(req.params.id);
    res.json({ message: "Field deleted", result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
