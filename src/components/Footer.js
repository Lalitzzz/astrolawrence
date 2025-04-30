import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              AstroLawrence
            </h3>
            <p className="text-purple-100">Unlocking celestial wisdom for your life&rsquo;s journey.</p>

           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300 border-b border-amber-400 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Home</Link></li>
              <li><Link href="/about" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">About</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Services</Link></li>
              <li><Link href="/contact" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300 border-b border-amber-400 pb-2">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Birth Chart Reading</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Relationship Analysis</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Career Guidance</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-300 transition hover:pl-2 block">Yearly Forecasts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-300 border-b border-amber-400 pb-2">Contact Us</h4>
            <address className="text-purple-100 not-italic space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Astrology Lane, Cosmic City</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>phalodipraveengarg@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 8302650986</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-800 pt-8 text-center">
          <p className="text-purple-300">
            &copy; {new Date().getFullYear()} AstroLawrence. All rights reserved. 
            <span className="block mt-2 text-sm">Made with <span className="text-amber-300">♥</span> in the cosmos</span>

          </p>
        </div>
      </div>
    </footer>
  )
}