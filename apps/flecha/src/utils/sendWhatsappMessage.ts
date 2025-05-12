interface SendMessageProps {
  message: string;
  number: string | undefined;
}

export async function sendWhatsappMessage({ message, number }: SendMessageProps) {
  const instance = "chatpro-nhlp2p997e";
  const token = "e361c2cba3bb4ac4d857f6fd2498534a";
  const url = `https://v5.chatpro.com.br/${instance}/api/v1/send_message`;

  const payload = {
    message,
    number
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
