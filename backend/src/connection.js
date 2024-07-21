import { Sequelize } from "sequelize";

const dbConfig = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRESQL_HOST,
  port: process.env.POSTGRESQL_DOCKER_PORT,
  database: process.env.POSTGRES_DB,
};

console.log("dbConfig", dbConfig);

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "postgres",
  }
);

// const sequelize = new Sequelize(
//   `postgres://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`,
//   {
//     password: dbConfig.password,
//     username: dbConfig.username,
//   }
// );

export { sequelize };
