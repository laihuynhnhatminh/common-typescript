import { getRandomNumber } from "../number/randomNumber.function.js";

const CODE_CHARACTERS = '0123456789';
const CODE_LENGTH = 6;

/**
 * Generate Random for account activation or password reset, etc...
 */
export function generateCode(): string {
  let code = '';

  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_CHARACTERS.charAt(
      Math.floor(getRandomNumber(0, CODE_CHARACTERS.length)),
    );
  }

  return code;
}
