import { BaseConfig } from '../../src/config/BaseConfig';

class TestConfig extends BaseConfig {
  constructor() {
    super();
  }
}

describe('config/BaseConfig', () => {
  let envSave: NodeJS.ProcessEnv;

  beforeEach(() => {
    envSave = process.env;
    process.env = {};
  });

  afterEach(() => {
    process.env = envSave;
  });

  describe('NODE_ENV', () => {
    it('should be `production` if the value is defined as `production`', () => {
      process.env.NODE_ENV = 'production';

      const config = new TestConfig();

      expect(config.NODE_ENV).toEqual('production');
    });

    it('should be `test` if the value is defined as `test`', () => {
      process.env.NODE_ENV = 'test';

      const config = new TestConfig();

      expect(config.NODE_ENV).toEqual('test');
    });

    it('should be `development` if the value is defined as `development`', () => {
      process.env.NODE_ENV = 'development';

      const config = new TestConfig();

      expect(config.NODE_ENV).toEqual('development');
    });

    it('should be `development` if the value is defined as any other value', () => {
      process.env.NODE_ENV = 'any_other_value';

      const config = new TestConfig();

      expect(config.NODE_ENV).toEqual('development');
    });

    it('should be `development` if the value is not defined', () => {
      const config = new TestConfig();

      expect(config.NODE_ENV).toEqual('development');
    });
  });
});
