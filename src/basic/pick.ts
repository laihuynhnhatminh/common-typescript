/**
 * Omit and Pick
 * While both are not necessary at all time, knowing them could help you to learn more on how to work with types
 */

type User = {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  hashedPassword: string;
  createdAt: string;
};

type Prospect = {
  id: number;
  firstName: string;
  lastName: string;
  referrer: string;
};

/* 1 - defining the types eported from your API */

// Pick create a new type that pick designated properties from the chosen Type
export type RenderedUser = Pick<User, 'email' | 'firstName'>;

/* 2 - Typing field transformations - function that transform type base a type, Omit and Pick can help with that*/

export declare function hydrateUser(u: User): RenderedUser;

/* 3 - Flexible function signatures/args with a clear primary intentions */

declare const u: User;
declare const p: Prospect;

function sendEmailToUser(recipient: User): void {
  console.log(recipient.firstName, recipient.lastName);
}

sendEmailToUser(u); // work as similar type
sendEmailToUser(p); // does not work as the recipient Type is completely different

function sendEmailToAll(recipient: Pick<User, 'firstName' | 'lastName'>): void {
  console.log(recipient.firstName, recipient.lastName);
}

sendEmailToAll(u);
sendEmailToAll(p);
