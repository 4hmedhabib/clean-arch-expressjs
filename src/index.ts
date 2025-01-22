import { config, logger, server } from "./infrastructure";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

async function main() {
  const port = config.port || 3000;
  server.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
  });
}

main();
