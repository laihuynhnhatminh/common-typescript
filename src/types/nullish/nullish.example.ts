import { NonNullableKeys, NonNullableDeep } from './nullish.type.js';

// EXAMPLE NonNullableKeys
interface UserProfile {
  id: string;
  name: string | null;
  email?: string | null;
  bio?: string;
  lastLogin: Date | null;
}

function prepareProfileUpdate<T extends object>(
  profile: T,
): Pick<T, NonNullableKeys<T>> {
  const updatePayload: Partial<T> = {};
  (Object.keys(profile) as Array<keyof T>).forEach((key) => {
    const isValuePresent = profile[key] !== null && profile[key] !== undefined;

    if (isValuePresent) {
      updatePayload[key] = profile[key];
    }
  });

  return updatePayload as Pick<T, NonNullableKeys<T>>;
}

const userProfileUpdate: UserProfile = {
  id: '123',
  name: 'John Doe',
  email: null,
  bio: 'Software Developer',
  lastLogin: null,
};

const validProfileUpdate = prepareProfileUpdate(userProfileUpdate);

// Output:
// { id: "123", name: "John Doe", bio: "Software Developer" }
console.log(validProfileUpdate);

// Example NonNullableDeep
const profile: NonNullableDeep<UserProfile> = {
  id: '123',
  name: 'John Doe',
  email: 'john@mail.com',
  bio: 'Software Developer',
  lastLogin: new Date(),
};

// Should not be able to assign nullish value to any value of property
profile.name = null;

console.log(profile);
