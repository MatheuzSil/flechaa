import { gql } from '@apollo/client';

export const GET_CHILD_MODAL = gql`
  query GetChildModal($childId: String!) {
    getChildModal(childId: $childId) {
      id
      name
      age
      birthDate
      medicalConditions
      class
      pcd
      parent {
        id
        name
        phone
        emergencyContact
      }
    }
  }
`;
