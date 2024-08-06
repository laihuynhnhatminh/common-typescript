/* Opposite of Partial, make all of the properties of the type to be required */

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

type RequiredUser = Required<UncertainUser>;

function checkUserData(user: RequiredUser): boolean {
  return !!user;
}

declare const a: User;
declare const b: RequiredUser;
declare const c: UncertainUser;

// Both work well
// Required turn all of the property of the type into required types
checkUserData(a);
checkUserData(b);
checkUserData(c);
