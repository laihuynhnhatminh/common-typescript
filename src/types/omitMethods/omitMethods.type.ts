/* eslint-disable @typescript-eslint/ban-types */

/**
 * The OmitMethods type is a utility that removes all method properties from a given type T.
 * This means that any property of the type T that is a function will be omitted, resulting in a new type that only includes the non-function properties.
 * @see https://dev.to/antonzo/11-20-sustom-utility-types-for-typescript-projects-2bg5#OmitMethods
 */
export type OmitMethods<T> = Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>;
