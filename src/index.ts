//import * as dotenv from 'dotenv';
import { config } from './config.js';

//dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(str: string): string {
  const s = String(str);
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}

export interface User {
  id: number;
  name: string;
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      const group = String(item[key]);
      acc[group] = acc[group] ?? [];
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );
}

export type LogLevel = 'silent' | 'info' | 'debug';
export class Logger {
  constructor(private level: LogLevel) {}

  info(msg: string): void {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }

  debug(msg: string): void {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
}
