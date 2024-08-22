import { Sequelize } from 'sequelize';
import 'dotenv/config';

const dbName = process.env.POSTGRES_DB;
const dbUser = process.env.POSTGRES_USER;
const dbPassword = process.env.POSTGRES_PASSWORD;

if (!dbName || !dbUser || !dbPassword) {
  throw new Error('Missing required environment variables');
}

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
