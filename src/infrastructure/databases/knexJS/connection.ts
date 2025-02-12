import knex, { Knex } from "knex";
import config from "../../config";
import { logger } from "../../logger";

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    connectionString: `postgres://${config.db.user}:${config.db.pass}@${config.db.host}/${config.db.database}`,
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    user: config.db.user,
    password: config.db.pass,
    pool: config.db.pool,
    ssl: false
  }
};

const connection = knex(knexConfig);

export async function checkKnexConnDB() {
  try {
    await connection.raw("SELECT 1 + 1 AS result");
    logger.info("Database connection successful");
  } catch (error) {
    logger.error("Database connection failed:", error);

    // Exist process
    process.exit(1);
  }
}

export default connection;
