import { gql } from '@apollo/client';

export const GET_CHILD_MODAL = gql`
  query GetChildModal($childId: String!) {
    getChildModal(childId: $childId) {
      birthDate
      medicalConditions
      parent {
        id
        name
        phone
        emergencyContact
      }
    }
  }
`;
