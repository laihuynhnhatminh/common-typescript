import { Merge, MergeAll } from "./merge.type.js";

// Merge Type EXAMPLE
type DefaultSettings = {
  theme: string;
  notifications: boolean;
  autoSave: boolean;
};

type UserSettings = {
  theme: string;
  notifications: string[];
  debugMode?: boolean;
};

const defaultSettings: DefaultSettings = {
  theme: "light",
  notifications: true,
  autoSave: true,
};

const userSettings: UserSettings = {
  theme: "dark",
  notifications: ["Warning 1", "Error 1", "Warning 2"],
  debugMode: true,
};

type FinalSettings = Merge<DefaultSettings, UserSettings>;

const finalSettings: FinalSettings = {
  ...defaultSettings,
  ...userSettings
};

console.log(finalSettings);

// MergeAll Type EXAMPLE

type A = {
  a: number;
  b: string;
};

type B = {
  b: number; // 'b' from B should override 'b' from A
  c: boolean;
};

type C = {
  c: string; // 'c' from C should override 'c' from B
  d: Date;
};

type D = {
  a: string; // 'a' from D should override 'a' from A
  d: number; // 'd' from D should override 'd' from C
  e: null;
};

// Merge A, B, C, and D
type MergedType = MergeAll<[A, B, C, D]>;
// Merge DefaultSettings and UserSettings with MergeAll
type MergedTypeV2 = MergeAll<[DefaultSettings, UserSettings]>

const test: MergedType = {
  a: 'test',
  b: 42,
  c: 'test',
  d: 123,
  e: null,
};

const anotherSettings: MergedTypeV2 = {
  ...defaultSettings,
  ...userSettings
};

console.log(test, anotherSettings)
