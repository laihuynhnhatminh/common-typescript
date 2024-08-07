/* eslint-disable @typescript-eslint/no-unused-vars */
type Func = (a: string, b: number) => string;

// The type: string;
type FuncReturnType = ReturnType<Func>;

// type = [a: string, b: number]
type FuncParamsType = Parameters<Func>;

const a: FuncParamsType = ['1', 2];
