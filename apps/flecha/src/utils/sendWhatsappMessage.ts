interface SendMessageProps {
  message: string;
  number: string | undefined;
  image?: string | undefined;
}

export async function sendWhatsappMessage({ message, number, image }: SendMessageProps) {
  const instance = "chatpro-nhlp2p997e";
  const token = "e361c2cba3bb4ac4d857f6fd2498534a";
  const url = `https://v5.chatpro.com.br/${instance}/api/v1/send_message`;

  if (!number) throw new Error('Número de telefone não fornecido');

  // ✅ Remove prefixo do Base64 se existir
  const cleanBase64 = image?.replace(/^data:image\/\w+;base64,/, '');

  const payload = {
    message,
    number : "5519998504253",
    ...(cleanBase64 && { image: cleanBase64 }) // Envia apenas se existir
  };

  console.log('Payload enviado ao ChatPro:', { 
    ...payload, 
    image: cleanBase64?.substring(0, 30) + '...' 
  });

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Erro na API ChatPro:', errorData);
    throw new Error(errorData.message || `Erro HTTP: ${response.status}`);
  }

  return await response.json();
}