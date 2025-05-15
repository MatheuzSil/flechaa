import { gql } from '@apollo/client';

export const GET_PRELOAD_MODAL = gql`
  query GetChildModal($childId: String!) {
    getPreloadedModal(childId: $childId) {
      id
      name
      age
      class
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