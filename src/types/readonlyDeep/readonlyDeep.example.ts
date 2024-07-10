// EXAMPLE, uncommon the below comment to see the error

import { ReadonlyDeep } from './readonlyDeep.type.js';

interface Address {
  street: string;
  city: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

const person: ReadonlyDeep<Person> = {
  name: 'Anton Zamay',
  age: 25,
  address: {
    street: 'Secret Street 123',
    city: 'Berlin',
  },
};

// person.name = "Antonio Zamay";
// person.address.city = "San Francisco";

console.log(person);
