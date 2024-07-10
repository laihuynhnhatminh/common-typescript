/*
 * Filter Key of T with the given condition
 */
export type FilterKeys<T, Condition> = {
  [K in keyof T]: K extends Condition ? K : never;
}[keyof T];

/**
 * Extended Pick with condition to remove certain keys
 */
export type PickByCondition<T, Condition> = Pick<T, FilterKeys<T, Condition>>;

/**
 * Extended Omit with condition to remove certain keys
 */
export type OmitByCondition<T, Condition> = Omit<T, FilterKeys<T, Condition>>;
