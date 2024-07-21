import { config } from "dotenv";
import pg from "pg";
const { Pool } = pg;

config();

const dbConfig = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_DOCKER_PORT,
  database: process.env.POSTGRES_DB,
};
console.log("dbConfig", dbConfig);

const pool = new Pool(dbConfig);

export { pool };
