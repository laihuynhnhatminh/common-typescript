/**
 * Similar to Partial which make everything optional with the exception of certain property.
 * Could be useful for certain case that interact with DB for patching, updating
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type OptionalExceptFor<T, TRequiredKeys extends keyof T> = Partial<T> &
  Pick<T, TRequiredKeys>;
