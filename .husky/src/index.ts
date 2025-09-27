import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(str: string): string {
  const s = String(str);
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}
