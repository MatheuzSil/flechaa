interface SendMessageProps {
  message: string;
  number: string | undefined;
}

export async function sendWhatsappMessage({ message, number }: SendMessageProps) {
  const instance = process.env.WHATSAPP_API_INSTANCE!;
  const token = process.env.WHATSAPP_API_TOKEN!;
  const url = `https://v5.chatpro.com.br/${instance}/api/v1/send_message`;

  const payload = {
    message,
    number: '5511981728063'
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Erro ao enviar mensagem. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
