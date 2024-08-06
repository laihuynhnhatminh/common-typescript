/* eslint-disable @typescript-eslint/no-unused-vars */
type ApiStatus = "Success" | "Error" | "Unknown";

// Similar to Omit, remove what we don't need
// Exclude to remove certain type from the Union type;
// type DefaultApiStatus = "Success" | "Error"
type DefaultApiStatus = Exclude<ApiStatus, "Unknown">;

// Similar to Pick - get what we need
// type UnknownApiStatus = "Unknown"
type UnknownApiStatus = Extract<ApiStatus, "Unknown">
