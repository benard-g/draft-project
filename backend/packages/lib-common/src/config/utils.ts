/**
 * Error thrown when an environment variable is miss-configured.
 */
export class EnvironmentVariableError extends Error {
  constructor(message: string) {
    super(`EnvironmentVariableError: ${message}`);
  }
}

/**
 * @returns The value found in the environment or `null` if it is not defined.
 *
 * @param key The name of the variable to retrieve.
 * @param defaultValue When specifying `null`, the function will not throw if the value is undefined.
 */
export function getFromEnv(key: string, defaultValue: null): string | null;

/**
 * @returns The value found in the environment or `defaultValue` if it is not defined.
 *
 * @param key The name of the variable to retrieve.
 * @param defaultValue The value to use if the key is not defined in the environment.
 *
 * @throws `EnvironmentVariableError` if the key is not defined and no `defaultValue` is specified.
 */
export function getFromEnv(key: string, defaultValue?: string): string;

/**
 * @internal
 */
export function getFromEnv(
  key: string,
  defaultValue?: string | null,
): string | null {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue === undefined) {
      throw new EnvironmentVariableError(
        `Missing environment variable "${key}"`,
      );
    }
    return defaultValue;
  }

  return value;
}

/**
 * @returns The number found in the environment or `null` if it is not defined.
 *
 * @param key The name of the variable to retrieve.
 * @param defaultValue When specifying `null`, the function will not throw if the value is undefined.
 *
 * @throws `EnvironmentVariableError` if the value is not a number.
 */
export function getNumberFromEnv(
  key: string,
  defaultValue: null,
): number | null;

/**
 * @returns The number found in the environment or `defaultValue` if it is not defined.
 *
 * @param key The name of the variable to retrieve.
 * @param defaultValue The value to use if the key is not defined in the environment.
 *
 * @throws `EnvironmentVariableError` if the key is not defined and no `defaultValue` is specified.
 * @throws `EnvironmentVariableError` if the key is defined but is not a number.
 */
export function getNumberFromEnv(key: string, defaultValue?: number): number;

/**
 * @internal
 */
export function getNumberFromEnv(
  key: string,
  defaultValue?: number | null,
): number | null {
  const envValue =
    defaultValue === null
      ? getFromEnv(key, null)
      : getFromEnv(
          key,
          defaultValue !== undefined ? defaultValue.toString() : undefined,
        );
  if (envValue === null) {
    return null;
  }

  const value = Number(envValue);
  if (isNaN(value)) {
    throw new EnvironmentVariableError(
      `Expected "${key}" to be of type number, got "${envValue}"`,
    );
  }

  return value;
}
