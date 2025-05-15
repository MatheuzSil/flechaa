interface sendWhatsappMessageToApiProps {
  message: string,
  number: string | undefined,
  image?: string | undefined
}

export const sendWhatsappMessageToApi = async ({ number, message, image }: sendWhatsappMessageToApiProps) => {
  const response = await fetch('/api/send-whatsapp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ number, message, image }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro desconhecido na API.');
  }

  return response.json();
};
