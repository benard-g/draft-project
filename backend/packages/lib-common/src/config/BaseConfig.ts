import { getFromEnv } from './utils';

/**
 * @returns The value of the environment variable 'NODE_ENV'.
 */
function getNodeEnv(): 'production' | 'development' | 'test' {
  switch (getFromEnv('NODE_ENV', null)) {
    case 'production':
      return 'production';
    case 'test':
      return 'test';
    default:
      return 'development';
  }
}

/**
 * Base class for configuration objects.
 */
export abstract class BaseConfig {
  public readonly NODE_ENV: 'production' | 'development' | 'test';

  constructor() {
    this.NODE_ENV = getNodeEnv();
  }
}
