import { Prettify } from "./prettify.type.js";

type User = {
  id: string;
  name: string;
  age: number;
};

type UserEmploymentPosition = {
  id: string;
  department: 'IT' | 'Sales' | 'Logistic' | 'Accounting';
  rank: 'Junior' | 'Middle' | 'Senior';
};

type UserEmploymentInfo = {
  startDate: Date;
  endDate: Date | null;
  payment: 'salaried' | 'shareholder' | 'owner';
};

export type NestedUserInformation = User & {
  employeeUid: string;
  position: UserEmploymentPosition;
  employmentInfo: UserEmploymentInfo;
};

export type PrettifiedUserInformation = Prettify<
  User & {
    employeeUid: string;
    position: UserEmploymentPosition;
    employmentInfo: UserEmploymentInfo;
  }
>;
