import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "you are not allowed to create the same category"],
    },
    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("categorie", categorySchema);
