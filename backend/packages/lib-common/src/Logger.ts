export class Logger {
  public info(message: string): void {
    console.log(`[INFO] ${message}`);
  }
}

export const logger = new Logger();
