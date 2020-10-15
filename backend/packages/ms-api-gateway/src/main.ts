import 'source-map-support/register';

import { Logger } from '@packages/lib-common/Logger';

import { Config } from './config/Config';

const config = new Config();
const logger = new Logger(config);

/**
 * Program entry-point.
 */
async function main(): Promise<void> {
  logger.info('Hello from ms-api-gateway !');
  throw new Error('Bruh');
}

if (require.main === module) {
  main().catch((err) => {
    logger.error(err);
  });
}
