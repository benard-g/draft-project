import 'source-map-support/register';

import { logger } from '@api/lib-common/Logger';

async function main(): Promise<void> {
  logger.info('Hello from ms-api-gateway !');
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
  });
}
