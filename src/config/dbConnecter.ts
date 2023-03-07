import { Client } from "pg";
import env from "dotenv";

// ตัวที่ connect กับ database
env.config();
export const db = new Client({
  user: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_DATABASE,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
});
