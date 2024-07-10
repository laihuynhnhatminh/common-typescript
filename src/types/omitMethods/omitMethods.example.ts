import { OmitMethods } from "./omitMethods.type.js";

interface User {
  id: number;
  name: string;
  age: number;
  greet(): void;
  updateAge(newAge: number): void;
}

export const user: OmitMethods<User> = {
  id: 1,
  name: "Alice",
  age: 30,
  // greet and updateAge methods are omitted from this type
};

export function sendUserData(userData: OmitMethods<User>): void {
  // API call to send user data
  console.log("Sending user data:", JSON.stringify(userData));
}

