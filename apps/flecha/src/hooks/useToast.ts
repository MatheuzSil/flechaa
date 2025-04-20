import { toast } from 'react-toastify';

export const useToast = () => {
  const showError = (message: string | null | undefined) => {
    if (message && message.trim() !== '') {
      toast.error(message);
    }
  };

  const showSuccess = (message: string | null | undefined) => {
    if (message && message.trim() !== '') {
      toast.success(message);
    }
  };

  return { showError, showSuccess };
};
