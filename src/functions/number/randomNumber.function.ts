import crypto from 'crypto';

const MAX_UINT32 = 0xFFFFFFFF;

/**
 * Random number from min to max using native crypto, not Math method
 */
export function getRandomNumber(min: number, max: number): number {
  if (min >= max) {
      throw new Error('Invalid range: min must be less than max');
  }

  const range = max - min;
  let randomValue: number;
  let scaledRandomValue: number;

  do {
      const buffer = crypto.randomBytes(4);
      randomValue = buffer.readUInt32BE(0);
      scaledRandomValue = randomValue / MAX_UINT32;
  } while (randomValue - (randomValue % range) > MAX_UINT32 - range);

  return min + Math.floor(scaledRandomValue * range);
}

/**
 * Random float between 0 and 1 using native crypto, not Math method
 */
export function getRandomFloat(): number {
  const buffer = crypto.randomBytes(4);
  return buffer.readUInt32BE() / MAX_UINT32;
}
