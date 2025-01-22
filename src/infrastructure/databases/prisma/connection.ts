import { PrismaClient } from "@prisma/client";
import { logger } from "../../logger";

const prismaConn = new PrismaClient({
  log: [
    { level: "warn", emit: "event" },
    { level: "info", emit: "event" },
    { level: "error", emit: "event" }
  ]
});

prismaConn.$on("info", (e) => {
  logger.info(
    JSON.stringify({
      target: e.target,
      message: e.message,
      timestamp: e.timestamp
    })
  );
});

prismaConn.$on("warn", (e) => {
  logger.warn(
    JSON.stringify({
      target: e.target,
      message: e.message,
      timestamp: e.timestamp
    })
  );
});

prismaConn.$on("error", (e) => {
  logger.error(
    JSON.stringify({
      target: e.target,
      message: e.message,
      timestamp: e.timestamp
    })
  );
});

process.on("beforeExit", async () => {
  await prismaConn.$disconnect();
});

export default prismaConn;
