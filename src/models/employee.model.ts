import mongoose, { Document, Schema } from 'mongoose';

export interface EmployeeDocument extends Document {
  name: string;
  position: string;
  salary: number;
}

const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
});

export const Employee = mongoose.model<EmployeeDocument>('Employee', employeeSchema);
