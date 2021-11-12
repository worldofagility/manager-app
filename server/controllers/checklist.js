import { ChecklistModel } from '../models/ChecklistModel.js';

export const getAllChecklist = async (req, res) => {
  try {
    const checklists = await ChecklistModel.find().limit();
    res.status(200).json(checklists);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getChecklist = async (req, res) => {
  try {
    const checklist = await ChecklistModel.findById(req.params.id);
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addChecklist = async (req, res) => {
  try {
    const data = req.body;
    const checklist = new Checklist(data);
    await checklist.save();
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateChecklist = async (req, res) => {
  try {
    const data = req.body;
    const checklist = ChecklistModel.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteChecklist = async (req, res) => {
  try {
    const checklist = await ChecklistModel.findOneAndRemove({ _id: req.params.id });
    res.status(200).json(checklist);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
