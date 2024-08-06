type User = {
  readonly id: string;
  readonly name: string;
  readonly age: number;
}

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

const user: Mutable<User> = {
  id: '1',
  name: 'Minh',
  age: 28
}

user.age = 1000;
