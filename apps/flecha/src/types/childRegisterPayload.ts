export type ChildRegisterPayload = {
  childName: string;
  childAge: number;
  birthDate?: string;
  medicalConditions?: string[];
  selectedClass?: string;
  selectedParent?: CustomInputSearchResult;
  isPcd: boolean;
};