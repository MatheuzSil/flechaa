import { useQuery } from '@apollo/client';
import { GET_PRELOAD_MODAL } from '../queries/getpreloadedmodal.graphl';

export function usePreloadModal(childId: string) {
  return useQuery(GET_PRELOAD_MODAL, {
    variables: { childId },
    skip: !childId, // Skip if ID is not provided
  });
}