import { ChildRegisterPayload } from "../types/childRegisterPayload";

export const childRegister = async (url: any, { arg }: {arg: ChildRegisterPayload}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });

  let data;
  try {
    data = await response.json();
  } catch (error) {
    console.warn('Failed to parse JSON:', error);
    data = null;
  }

  if (!response.ok) {
    const error = new Error(data?.error || 'Erro ao cadastrar criança') as any;
    error.response = response;
    error.data = data;
    throw error;
  }

  return data;
};