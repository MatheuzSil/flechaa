import { sendWhatsappMessage } from "apps/flecha/src/utils/sendWhatsappMessage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, number, image } = body;

    if (!message || !number) {
      return NextResponse.json(
        { error: 'Message and number are required' },
        { status: 400 }
      );
    }

    const result = await sendWhatsappMessage({ message, number, image });

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}