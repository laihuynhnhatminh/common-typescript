/**
 * Utility type that makes all properties of a given type T readonly with depth.
 * Make the T (Object) to be deeply immutable (readonly)
 */
export type ReadonlyDeep<T> = {
  readonly [K in keyof T]: T[K] extends object ? ReadonlyDeep<T[K]> : T[K];
};

/**
 * The PartialDeep type recursively makes all properties of an object type T optional, deeply.
 * Not entirely useful but good to have to be of use.
 * @see https://dev.to/antonzo/10-sustom-utility-types-for-typescript-projects-48pe
 */
export type PartialDeep<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep<T[K]> : T[K];
};
