import bcrypt from 'bcryptjs';
import { jwtVerify, SignJWT } from 'jose';

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = async (userId: any): Promise<any> => {
  const payload = { userId };
  const secret = process.env.AUTH_SECRET;
  const expiresIn = '1d';

  const token = await signJWT(payload, secret, expiresIn);
  return token;
};

export const signJWT = async (
  payload: any,
  secret: any,
  expiresIn: string
): Promise<string> => {
  const encoder = new TextEncoder();
  const secretKey = encoder.encode(secret);
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiresIn)
    .sign(secretKey);

  return token;
};

export const verifyToken = async (token: string): Promise<any> => {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error('AUTH_SECRET is not defined');
  }

  const encoder = new TextEncoder();
  const secretKey = encoder.encode(secret);

  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};

// Regexp

function createValidationResult(
  value: string,
  error: boolean,
  errorMessagePt: string | null
) {
  return {
    value: value,
    error: error,
    errorMessage: error ? errorMessagePt : null,
  };
}

export const validateEmail = (email: string) => {
  const value = email;

  if (!email) {
    return createValidationResult(
      value,
      true,
      'O e-mail não pode estar vazio.'
    );
  }

  const atSymbolCount = (email.match(/@/g) || []).length;
  if (atSymbolCount === 0) {
    return createValidationResult(
      value,
      true,
      "O e-mail precisa conter um símbolo '@'."
    );
  }
  if (atSymbolCount > 1) {
    return createValidationResult(
      value,
      true,
      "O e-mail deve conter apenas um símbolo '@'."
    );
  }

  if (!/^[a-zA-Z0-9]/.test(email)) {
    return createValidationResult(
      value,
      true,
      "O e-mail não pode começar com '.', '_', '%', '+', '-' ou outros caracteres especiais."
    );
  }

  const parts = email.split('@');
  const domainPart = parts[1];
  if (
    !domainPart ||
    !domainPart.includes('.') ||
    domainPart.startsWith('.') ||
    domainPart.endsWith('.')
  ) {
    return createValidationResult(
      value,
      true,
      'O e-mail precisa ter um nome de domínio válido (ex: example.com).'
    );
  }
  const domainParts = domainPart.split('.');
  const tld = domainParts[domainParts.length - 1];
  if (tld.length < 2) {
    return createValidationResult(
      value,
      true,
      'O e-mail precisa ter um Domínio de Topo (TLD) válido com pelo menos 2 letras (ex: .com, .org).'
    );
  }

  const emailRegex =
    /^[a-zA-Z0-9]+(?:[._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return createValidationResult(value, true, 'Formato de e-mail inválido.');
  }

  return createValidationResult(value, false, null);
};

export const validatePassword = (password: string) => {
  const value = password;

  if (!password || password.length < 8) {
    return createValidationResult(
      value,
      true,
      'A senha deve ter pelo menos 8 caracteres.'
    );
  }

  if (!/\d/.test(password)) {
    return createValidationResult(
      value,
      true,
      'A senha deve conter pelo menos um número.'
    );
  }

  const specialCharRegex = /[!@#$%^&*()_+={}\[\]:;'"|\\<>,.?/~`\-]/;
  if (!specialCharRegex.test(password)) {
    return createValidationResult(
      value,
      true,
      'A senha deve conter pelo menos um caractere especial (ex: !@#$%).'
    );
  }

  return createValidationResult(value, false, null);
};
