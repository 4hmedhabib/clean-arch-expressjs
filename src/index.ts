import { config, logger, server } from "./infrastructure";

async function main() {
  const port = config.port || 3000;
  server.listen(port, async () => {
    logger.info(`App is running at http://localhost:${port}`);
  });
}

main();
