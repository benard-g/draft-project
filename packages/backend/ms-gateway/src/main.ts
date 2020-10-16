import 'source-map-support/register';

import { hello } from '@packages/lib-backend-commons/build/src/hello';

async function main(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log('Hello from ms-gateway !');
  hello();
}

if (require.main === module) {
  main().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
