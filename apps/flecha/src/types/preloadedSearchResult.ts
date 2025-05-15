interface preloadedSearchResult {
  id: string;
  name: string;
  age: number;
  class: string;
  birthDate: string;
  medicalConditions: string[];
  parent: {
    id: string;
    name: string;
    phone: string;
    emergencyContact: string;
  }
}
