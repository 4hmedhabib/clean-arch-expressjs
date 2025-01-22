import dotenv from "dotenv";
dotenv.config();

export default {
  port: 3055,
  db: {
    url: process.env.DATABASE_URL || "",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "postgres",
    pass: process.env.DB_PASS || "postgres",
    database: process.env.DB_DATABASE || "postgres",
    schema: process.env.DB_SCHEMA || "public",
    pool: {
      min: parseInt(process.env.DB_MIN_POOL || "1"),
      max: parseInt(process.env.DB_MAX_POOL || "10")
    }
  },
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE || "",
    user: process.env.SMTP_MAIL || "",
    pass: process.env.SMTP_APP_PASS || ""
  }
};
