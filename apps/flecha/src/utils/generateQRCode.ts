import QRCode from 'qrcode'

export async function generateQRCodeBase64(link: string): Promise<string> {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(link, {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      margin: 1,
      scale: 3,
    });
    return qrCodeDataUrl;
  } catch (err) {
    console.error('Erro ao gerar QR Code:', err);
    throw err;
  }
}
