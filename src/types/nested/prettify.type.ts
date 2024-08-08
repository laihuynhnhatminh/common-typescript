/* NestedType that help you defined the complex nested type */

export type Prettify<T> = {
  [K in keyof T]: T[K];
};
