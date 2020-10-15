import Pino from 'pino';

import { BaseConfig } from './config/BaseConfig';

type TContextData = Record<string, any>;

export class Logger {
  private readonly logger: Pino.Logger;

  constructor(config: BaseConfig) {
    this.logger = Pino({
      enabled: config.NODE_ENV !== 'test',
      prettyPrint: config.NODE_ENV === 'development',
      timestamp: true,
      base: {},
    });
  }

  public info(message: string, context?: TContextData): void {
    this.log('info', message, context);
  }

  public warn(message: string, context?: TContextData): void {
    this.log('warn', message, context);
  }

  public error(message: string, context?: TContextData): void {
    this.log('error', message, context);
  }

  private log(
    level: 'info' | 'warn' | 'error',
    message: string,
    context?: TContextData,
  ): void {
    if (context) {
      this.logger[level](context, message);
    } else {
      this.logger[level](message);
    }
  }
}
