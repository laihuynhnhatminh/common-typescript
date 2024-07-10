/**
 * Not super useful but not entirely useless. Incase you want to handle case where null and undefined exist.
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type Nullish = null | undefined;

/**
 * The NonNullableKeys type construction is used to filter out the keys of an object type that are associated with nullable (i.e., null or undefined) values.
 * This utility type is particularly useful in scenarios where it's necessary to ensure the access of only those properties of an object that are guaranteed to be non-null and non-undefined.
 * It can be applied, for example, in functions that require strict type safety and cannot operate on nullable properties without explicit checks.
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type NonNullableKeys<T> = {
  [K in keyof T]: T[K] extends Nullish ? never : K;
}[keyof T];

/**
 * The NonNullableDeep type is a utility that removes null and undefined from all properties of a given type T, deeply.
 * This means that not only are the top-level properties of the object made non-nullable, but all nested properties are also recursively marked as non-nullable.
 * This type is particularly useful in scenarios where ensuring that no properties of an object, including those deeply nested, are null or undefined is essential,
 * such as when dealing with data that must be fully populated.
 * @require strictNullCheck to be enabled otherwise will not work
 * @see https://dev.to/antonzo/11-20-sustom-utility-types-for-typescript-projects-2bg5#NonNullableDeep
 */
export type NonNullableDeep<T> = {
  [K in keyof T]: NonNullable<T[K]> extends object
    ? NonNullableDeep<NonNullable<T[K]>>
    : NonNullable<T[K]>;
};
