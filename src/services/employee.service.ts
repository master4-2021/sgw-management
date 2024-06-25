import { Employee, EmployeeDocument } from "../models/employee.model";

export const createEmployee = async (
  data: Partial<EmployeeDocument>
): Promise<EmployeeDocument> => {
  const employee = new Employee(data);
  await employee.save();
  return employee;
};

export const getEmployee = async (
  id: string
): Promise<EmployeeDocument | null> => {
  return Employee.findById(id);
};

export const updateEmployee = async (
  id: string,
  data: Partial<EmployeeDocument>
): Promise<EmployeeDocument | null> => {
  return Employee.findByIdAndUpdate(id, data, { new: true });
};

export const deleteEmployee = async (
  id: string
): Promise<EmployeeDocument | null> => {
  return Employee.findByIdAndDelete(id);
};

export const listEmployees = async (): Promise<EmployeeDocument[]> => {
  return Employee.find();
};
