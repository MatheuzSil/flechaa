import { useQuery } from '@apollo/client';
import { GET_CHILD_MODAL } from '../queries/getchildmodal.graphql';

export function useChildModal(childId: string) {
  return useQuery(GET_CHILD_MODAL, {
    variables: { childId },
    skip: !childId, // Skip if ID is not provided
  });
}
