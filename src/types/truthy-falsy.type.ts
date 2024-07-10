/**
 * @type Consist of every type/value that is consider Falsy by JS
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type Falsy = false | "" | 0 | 0n | null | undefined;

/**
 * @type T will be consider type Truthy and will be changed to type never if these type are of Falsy
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type Truthy<T> = T extends Falsy ? never : T;
