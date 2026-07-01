import { NextResponse } from 'next/server'
import emailjs from '@emailjs/nodejs'

export async function POST (req: Request) {
  try {
    const data = await req.json()

    const payload = {
      customer_name: data.customer_name,
      customer_email: data.customer_email,
      customer_phone: data.customer_phone,
      company: data.company,
      service: data.service,
      other_service: data.service === 'Other' ? data.other_service || '' : '',
      budget: data.budget,
      features: data.features,
      message: data.message,
      source: data.source,
      date: new Date().toLocaleString()
    }
    // 1️⃣ Send email to YOU (admin)
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      'admin_template',
      {
        ...payload,
        to_email: 'taha.chaghtai.dev@gmail.com'
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!
      }
    )

    // 2️⃣ Auto-reply to client
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      'client_template',
      {
        ...payload,
        to_email: payload.customer_email
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!
      }
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, error: 'Email failed' },
      { status: 500 }
    )
  }
}
