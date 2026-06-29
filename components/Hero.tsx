'use client'
import Image from 'next/image'
import avatar from '@/public/avatar.png'

export default function Hero () {
  return (
    <>
      <section className='hero'>
        <div className='hero-grid'>
          <div className='hero-text'>
            <div className='badge'> 👋 Welcome! I&apos;m Taha Chaghtai</div>

            <h1>
              I Build Powerful <br />
              Web Solutions That <span>Drive Results</span>
            </h1>

            <p>
              Full-Stack Developer specializing in Next.js, React, Web Api, #
              Net Core, Node.js and modern web technologies. I turn ideas into
              scalable digital products.
            </p>

            <div className='cta-buttons'>
              <a href='#contact' className='btn btn-primary'>
                Get In Touch
              </a>
              <a href='#projects' className='btn btn-secondary'>
                View My Work
              </a>
            </div>

            <div className='trust'>⭐ Trusted by businesses worldwide</div>
          </div>

          <div className='hero-avatar'>
            <div className='avatar-wrapper'>
              <div className='blob blob1'></div>
              <div className='blob blob2'></div>
              <div className='bubble'>
                <strong>Hi there! 👋</strong>
                <p>
                  I&nbsp;m here to bring your ideas to life with clean, scalable &
                  modern code.
                </p>
              </div>
              <Image
                src={avatar}
                alt='Avatar'
                className='img-fluid avatar position-relative z-2'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
