import { toast } from 'react-toastify';

export const useErrorToast = () => {
  const showError = (message: string | null | undefined) => {
    if (message && message.trim() !== '') {
      toast.error(message);
    }
  };

  return { showError };
};
