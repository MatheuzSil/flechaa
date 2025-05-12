export const sendWhatsappMessageToApi = async (number: string | undefined, message: string) => {
  const response = await fetch('/api/send-whatsapp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ number, message }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro desconhecido na API.');
  }

  return response.json();
};
