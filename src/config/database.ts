import 'dotenv/config';
import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";

const connection = new Sequelize({
  dialect: MySqlDialect,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST ?? '127.0.0.1',
  port: 3306,
  logging: false,
});

export default connection;