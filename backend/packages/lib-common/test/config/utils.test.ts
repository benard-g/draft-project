import { getFromEnv, getNumberFromEnv } from '../../src/config/utils';

describe('config/utils', () => {
  let envSave: NodeJS.ProcessEnv;

  beforeEach(() => {
    envSave = process.env;
    process.env = {};
  });

  afterEach(() => {
    process.env = envSave;
  });

  describe('#getFromEnv', () => {
    it('should return the value from the environment', () => {
      process.env.KEY = 'value';

      const result = getFromEnv('KEY');

      expect(result).toBe('value');
    });

    it('should return `null` if the key is not defined and `null` is given as an argument', () => {
      const result = getFromEnv('KEY', null);

      expect(result).toBe(null);
    });

    it('should return `defaultValue` is the key is not defined and `defaultValue` is given as an argument', () => {
      const result = getFromEnv('KEY', 'default');

      expect(result).toBe('default');
    });

    it('should throw if the key is not defined and no `defaultValue` is given', () => {
      expect(() => getFromEnv('KEY')).toThrowErrorMatchingInlineSnapshot(
        `"EnvironmentVariableError: Missing environment variable \\"KEY\\""`,
      );
    });
  });

  describe('#getNumberFromEnv', () => {
    it('should return the number from the environment', () => {
      process.env.KEY = '42';

      const result = getNumberFromEnv('KEY');

      expect(result).toBe(42);
    });

    it('should return `null` if the key is not defined and `null` is given as an argument', () => {
      const result = getNumberFromEnv('KEY', null);

      expect(result).toBe(null);
    });

    it('should return `defaultValue` if the key is not defined and `defaultValue` is given as an argument', () => {
      const result = getNumberFromEnv('KEY', 80);

      expect(result).toBe(80);
    });

    it('should throw if the key is not defined in the environment', () => {
      expect(() => getNumberFromEnv('KEY')).toThrowErrorMatchingInlineSnapshot(
        `"EnvironmentVariableError: Missing environment variable \\"KEY\\""`,
      );
    });

    it('should throw if the value is no a number', () => {
      process.env.KEY = 'not_a_number';

      expect(() => getNumberFromEnv('KEY')).toThrowErrorMatchingInlineSnapshot(
        `"EnvironmentVariableError: Expected \\"KEY\\" to be of type number, got \\"not_a_number\\""`,
      );
    });
  });
});
