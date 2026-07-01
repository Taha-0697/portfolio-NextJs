'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Contact () {
  const [openup, setOpenup] = useState(false)
  const [loading, setLoading] = useState(false)

  const whatsappNumbers = [
    { code: '968', number: '94122731' },
    { code: '92', number: '3012463203' }
  ]

  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (loading) return

    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const payload = {
      customer_name: formData.get('name'),
      customer_email: formData.get('email'),
      customer_phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      budget: formData.get('budget'),
      features: formData.get('features'), // optional (you don't have this field yet)
      message: formData.get('message'),
      source: 'portfolio-website'
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Request failed')

      alert('Message sent successfully 🚀')
      form.reset()
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='section' id='contact'>
      <h2>Get In Touch</h2>

      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Connect with me</h3>

          {/* EMAIL */}
          <div className='contact-item'>
            <div className='contact-icon'>
              <FaEnvelope />
            </div>
            <div className='contact-text'>
              <h4>Email</h4>
              <a href='mailto:taha.chaghtai.dev@gmail.com'>
                taha.chaghtai.dev@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className='contact-item'>
            <div className='contact-icon'>
              <FaPhone />
            </div>
            <div className='contact-text'>
              <h4>Phone</h4>
              <a href='tel:+96894122731'>+968 9412 2731</a>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className='contact-item'>
            <div className='contact-icon'>
              <FaWhatsapp />
            </div>

            <div className='contact-text'>
              <h4>WhatsApp</h4>

              <button
                type='button'
                onClick={() => setOpenup(prev => !prev)}
                className='wa-btn'
                disabled={loading}
              >
                Chat on WhatsApp
              </button>

              {openup && (
                <div className='wa-dropdown'>
                  {whatsappNumbers.map((item, index) => (
                    <a
                      key={index}
                      href={`https://api.whatsapp.com/send?phone=${item.code}${item.number}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={() => setOpenup(false)}
                    >
                      +{item.code} {item.number}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* LINKEDIN */}
          <div className='contact-item'>
            <div className='contact-icon'>
              <FaLinkedin />
            </div>
            <div className='contact-text'>
              <h4>LinkedIn</h4>
              <a
                href='https://www.linkedin.com/in/taha-chaghtai'
                target='_blank'
                rel='noopener noreferrer'
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='name'>Full Name *</label>
              <input
                id='name'
                name='name'
                required
                placeholder='John Doe'
                disabled={loading}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email *</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                placeholder='john@example.com'
                disabled={loading}
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                id='phone'
                name='phone'
                placeholder='+968 9412 2731'
                disabled={loading}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='company'>Company</label>
              <input
                id='company'
                name='company'
                placeholder='Your Company Name'
                disabled={loading}
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='service'>Service Required *</label>
            <select id='service' name='service' required disabled={loading}>
              <option value=''>Select a service</option>
              <option>E-Commerce Website</option>
              <option>Business Website</option>
              <option>Web Application</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='budget'>Budget Range *</label>
            <select id='budget' name='budget' required disabled={loading}>
              <option value=''>Select budget range</option>
              <option>$100 - $500</option>
              <option>$500 - $1500</option>
              <option>$1500+</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='features'>Key Features (optional)</label>
            <input
              id='features'
              name='features'
              placeholder='e.g. login, dashboard, payments'
              disabled={loading}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='message'>Project Details *</label>
            <textarea
              id='message'
              name='message'
              rows={5}
              required
              placeholder='Tell me about your project, goals, and timeline...'
              disabled={loading}
            />
          </div>

          <button type='submit' className='btn btn-primary' disabled={loading}>
            {loading ? 'Sending...' : 'Send Inquiry 🚀'}
          </button>
        </form>
      </div>
    </section>
  )
}
