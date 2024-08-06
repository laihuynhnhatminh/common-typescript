/* Opposite of Required, make all of the properties of the type to be optional */

type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

type UncertainUser = {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
}

type PartialUser = Partial<User>;

function checkUserData(user: PartialUser): boolean {
  return !!user;
}

declare const a: UncertainUser;
declare const b: PartialUser;
declare const c: User;

// Both work well
// Partial turn all of the property of the type into optional type or undefined
checkUserData(a);
checkUserData(b);
checkUserData(c);
