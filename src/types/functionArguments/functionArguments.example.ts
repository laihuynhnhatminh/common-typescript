/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionArguments } from "./functionArguments.type.js";

export function wrap<T extends (...args: any[]) => any>(fn: T, ...args: FunctionArguments<T>): ReturnType<T> {
  return fn(...args);
}

export function add(a: number, b: number): number {
  return a + b;
}

export type AddArgs = FunctionArguments<typeof add>;
// AddArgs will be of type [number, number]

const result = wrap(add, 5, 10); // result is 15, and types are checked
