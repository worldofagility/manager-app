import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    descripttion: {
      type: String,
      required: true,
    },
    hashtag: {
      type: String,
      required: true,
    },
    createdBy: String,
    updatedBy: String,
  },
  { timestamps: true }
);

export const ChecklistModel = mongoose.model('Checklist', schema);
