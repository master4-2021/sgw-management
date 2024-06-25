import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "./protos/employee";
import { employeeController } from "./handers/employee.handler";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config();

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, "./protos/employee.proto")
);
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const server = new grpc.Server();
server.addService(proto.employee.EmployeeService.service, employeeController);
const PORT = process.env.GRPC_PORT || 50051;

connectDB().then(() => {
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log(`gRPC server running at http://0.0.0.0:${PORT}`);
    }
  );
});
