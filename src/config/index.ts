import dotenv from 'dotenv';

dotenv.config();

const config = {
  grpc_port: process.env.GRPC_PORT,
  db_uri: process.env.MONGO_URI,
};

export default config;