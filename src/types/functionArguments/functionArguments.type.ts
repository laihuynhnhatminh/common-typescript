/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The FunctionArguments type is a utility that extracts the types of the arguments of a given function type T.
 * This means that for any function type passed to it, the type will return a tuple representing the types of the function's parameters.
 * This type is particularly useful in scenarios where you need to capture or manipulate the argument types of a function,
 * such as in higher-order functions or when creating type-safe event handlers.
 * @see https://dev.to/antonzo/11-20-sustom-utility-types-for-typescript-projects-2bg5#FunctionArguments
 */
export type FunctionArguments<T> = T extends (...args: infer A) => any
  ? A
  : never;
