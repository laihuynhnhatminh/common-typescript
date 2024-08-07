/* Readonly make the type to be readonly, cannot be mutated */

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;

const immutableUser: ReadonlyUser = {
  id: '1',
  firstName: 'Minh',
  lastName: 'Lai',
  age: 28,
};

const mutableUser: User = {
  id: '2',
  firstName: 'Minh',
  lastName: 'Nhat',
  age: 28
}

immutableUser.age = 100; // Can't be done
mutableUser.age = 90;
