import mongoose, { Schema, SchemaType, Types } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: "user", required: true },
  deadline: { type: Date, required: true },
  status: { type: String, required: true, default: "Pending" },
  tags: [{ type: String }],
  createdBy: { type: SchemaType.ObjectId, ref: "user", required: true },
});

const Task = mongoose.models.Task || model("task", taskSchema);
export default Task;
