import { getRandomFloat } from "../number/randomNumber.function.js";

/**
 * Regenrate a random string
 */
export function generateRandomString(length: number): string {
  return getRandomFloat()
    .toString(36)
    .replace(/[^\dA-Za-z]+/g, '')
    .slice(0, Math.max(0, length));
}
