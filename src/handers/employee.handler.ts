import { EmployeeServiceHandlers } from "../protos/employee/EmployeeService";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  listEmployees,
} from "../services/employee.service";
import { ServerErrorResponse } from "@grpc/grpc-js";

export const employeeController: EmployeeServiceHandlers = {
  CreateEmployee: async (call, callback) => {
    try {
      const employee = await createEmployee(call.request);
      callback(null, { employee });
    } catch (err) {
      callback(err as ServerErrorResponse, null);
    }
  },
  GetEmployee: async (call, callback) => {
    try {
      const employee = await getEmployee(call.request.id);
      if (employee) {
        callback(null, { employee });
      } else {
        callback(new Error("Employee not found"), null);
      }
    } catch (err) {
      callback(err as ServerErrorResponse, null);
    }
  },
  UpdateEmployee: async (call, callback) => {
    try {
      const employee = await updateEmployee(call.request.id, call.request);
      if (employee) {
        callback(null, { employee });
      } else {
        callback(new Error("Employee not found"), null);
      }
    } catch (err) {
      callback(err as ServerErrorResponse, null);
    }
  },
  DeleteEmployee: async (call, callback) => {
    try {
      const employee = await deleteEmployee(call.request.id);
      if (employee) {
        callback(null, { id: call.request.id });
      } else {
        callback(new Error("Employee not found"), null);
      }
    } catch (err) {
      callback(err as ServerErrorResponse, null);
    }
  },
  ListEmployees: async (call, callback) => {
    try {
      const employees = await listEmployees();
      callback(null, { employees });
    } catch (err) {
      callback(err as ServerErrorResponse, null);
    }
  },
};
