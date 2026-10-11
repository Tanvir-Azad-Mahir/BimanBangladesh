import { useState } from 'react';
import { Menu, X, ArrowRight, Plane, ChevronRight, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import bimanLogo from './assets/image.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif] antialiased text-gray-900 selection:bg-[#202A36] selection:text-white">
      {/* Hero Section Container */}
      <section id="start" className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-105 transition-transform duration-1000"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for subtle readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20 pointer-events-none z-0" />

        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          
          {/* Navigation Bar */}
          <header className="w-full">
            <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
              {/* Brand Logo */}
              <a 
                href="#" 
                className="flex items-center gap-2 group transition-transform duration-200 active:scale-95"
              >
                <img
                  src={bimanLogo}
                  alt=""
                  className="h-10 w-10 rounded-full object-contain"
                />
                <span className="flex flex-col text-gray-900 tracking-tight">
                  <span className="text-xl font-semibold leading-tight">Biman</span>
                  <span className="text-xs font-medium leading-tight">Bangladesh Airlines</span>
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 font-medium hover:text-gray-700 transition-colors text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#202A36] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-gray-900 hover:bg-black/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#202A36]/20"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden px-6 pt-2 pb-4">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/40 flex flex-col space-y-4 animate-slide-in-from-top">
                  {['Start', 'Story', 'Rates', 'Benefits', 'FAQ'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-900 font-medium hover:text-gray-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-100/50 flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                  <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setBookingModalOpen(true);
                      }}
                      className="w-full py-3 rounded-full text-white bg-[#202A36] hover:bg-[#1a2229] font-medium text-center transition-colors shadow-md text-sm"
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Hero Content Area */}
          <main className="flex-1 flex items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
            <div className="max-w-4xl mx-auto flex flex-col items-center pointer-events-auto">
              
              {/* Small Uppercase Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 backdrop-blur-sm border border-black/5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  PRIVATE JETS
                </span>
              </div>

              {/* Overlapping Two-Line Heading */}
              <div className="flex flex-col items-center justify-center my-1 select-none">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-none tracking-tighter transition-all duration-300">
                  <span className="block text-gray-500">Premium.</span>
                  <span className="block -mt-3 sm:-mt-4 md:-mt-5 text-[#202A36]">Accessible.</span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl font-normal tracking-tight px-2 leading-relaxed">
                Your dedication deserves recognition.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
                <button
                  onClick={() => {
                    const target = document.getElementById('benefits');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors shadow-sm hover:shadow active:scale-95 duration-200 text-sm sm:text-base cursor-pointer"
                >
                  Discover
                </button>
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="px-6 py-2.5 rounded-full text-white font-medium bg-[#202A36] hover:bg-[#1a2229] transition-colors shadow-md hover:shadow-lg active:scale-95 duration-200 text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </main>

          {/* Footer Highlights */}
          <footer id="benefits" className="w-full pb-8 pt-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs sm:text-sm text-gray-600 bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-sm">
              <div className="flex items-center gap-2 px-2">
                <Globe className="w-4 h-4 text-[#202A36]" />
                <span className="font-medium text-gray-800">5,000+ Global Destinations</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-2 border-l border-gray-300/60">
                <ShieldCheck className="w-4 h-4 text-[#202A36]" />
                <span className="font-medium text-gray-800">ARG/US Platinum Safety Rating</span>
              </div>
              <div className="flex items-center gap-2 px-2 border-l border-gray-300/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-gray-800">Instant Airport Fleet Dispatch</span>
              </div>
            </div>
          </footer>

        </div>
      </section>

      <section id="story" className="scroll-mt-8 bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Biman Bangladesh Airlines</p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A more considered way to travel.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Plan your private flight around the journey you have in mind. Share your route and travel details to begin a quote request.
          </p>
        </div>
      </section>

      <section id="rates" className="scroll-mt-8 bg-gray-50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Rates</p>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Get a quote for your itinerary.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
            Pricing depends on the details of your trip. Send a quote request with your route, date, and passenger count.
          </p>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#202A36] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2229]"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section id="faq" className="scroll-mt-8 bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <details className="group border-b border-gray-200 py-5">
            <summary className="cursor-pointer list-none font-medium text-gray-900 marker:hidden">
              What details should I include in a quote request?
              <span className="float-right text-gray-500 group-open:rotate-90">›</span>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-600">
              Include your departure and destination, preferred date, passenger count, and a contact email so the request has the trip details needed.
            </p>
          </details>
          <details className="group border-b border-gray-200 py-5">
            <summary className="cursor-pointer list-none font-medium text-gray-900 marker:hidden">
              Where do I submit a flight request?
              <span className="float-right text-gray-500 group-open:rotate-90">›</span>
            </summary>
            <p className="mt-3 leading-relaxed text-gray-600">
              Select “Book Now” or “Request a quote” to open the flight request form.
            </p>
          </details>
        </div>
      </section>

      {/* Flight Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#202A36] text-white flex items-center justify-center">
                <Plane className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Request Flight Quote</h3>
                <p className="text-xs text-gray-500">Fast 15-minute response time guaranteed</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setBookingModalOpen(false); alert("Thank you! Your flight specialist will contact you shortly."); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Departure & Destination</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="From (e.g. TEB)" required className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#202A36]/30" />
                  <input type="text" placeholder="To (e.g. VNY)" required className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#202A36]/30" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Date</label>
                  <input type="date" required className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#202A36]/30" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Passengers</label>
                  <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#202A36]/30">
                    <option>1 - 4 Guests</option>
                    <option>5 - 8 Guests</option>
                    <option>9 - 14 Guests</option>
                    <option>15+ VIP Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Contact Details</label>
                <input type="email" placeholder="Your Email Address" required className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#202A36]/30" />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-xl text-white font-medium text-sm transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: '#202A36' }}
              >
                <span>Submit Flight Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}