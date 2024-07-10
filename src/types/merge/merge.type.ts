/**
 * The Merge<O1, O2> type is useful for creating a new type by combining the properties of two object types, O1 and O2.
 * When properties overlap, the properties from O2 will override those in O1.
 * This is particularly useful when you need to extend or customize existing types, ensuring that specific properties take precedence.
 * @see https://dev.to/antonzo/11-20-sustom-utility-types-for-typescript-projects-2bg5#Merge
 */
export type Merge<T1, T2> = T2 & Omit<T1, keyof T2>;

/**
 * Similar to Merge but can merge even more type. Not fully tested
 */
export type MergeAll<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? Rest extends unknown[]
    ? Merge<First, MergeAll<Rest>>
    : First
  : object;
