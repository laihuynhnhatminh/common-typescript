/**
 * The Brand type is a TypeScript utility that employs nominal typing for otherwise structurally identical types.
 * TypeScript’s type system is structural, meaning that two objects are considered the same type if they have the same shape, regardless of the names or locations of their declarations.
 * However, there are scenarios where treating two identically shaped objects as distinct types is beneficial, such as differentiating between types that are essentially
 * the same but serve different purposes (e.g., user IDs and order IDs both being strings but representing different concepts).
 * The Brand type works by intersecting a type T with a unique branding object, effectively differentiating otherwise identical types without changing the runtime behavior.
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type Brand<T, B> = T & { __brand: B };
