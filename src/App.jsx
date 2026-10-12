import React, { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, CalendarDays, CheckCircle2,
  ChevronDown, ChevronLeft, ChevronRight, Clock3, CreditCard,
  Globe2, Headphones, Luggage, Mail, MapPin, Menu, Plane,
  PlaneLanding, PlaneTakeoff, Search, ShieldCheck, Smartphone, Sparkles,
  Ticket, Users, X, ArrowLeftRight, Bell, HeartHandshake,
  BriefcaseBusiness, ExternalLink, Phone, Info
} from 'lucide-react';
import bimanLogo from './assets/image.png';

const OFFICIAL = 'https://www.biman-airlines.com/';
const VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4';
const cities = ['Dhaka (DAC)', 'Chattogram (CGP)', 'Sylhet (ZYL)', 'Cox’s Bazar (CXB)', 'Saidpur (SPD)', 'Jashore (JSR)', 'Rajshahi (RJH)', 'Barishal (BZL)', 'Kolkata (CCU)', 'Delhi (DEL)', 'Bangkok (BKK)', 'Kathmandu (KTM)', 'Kuala Lumpur (KUL)', 'Singapore (SIN)', 'Dubai (DXB)', 'Doha (DOH)', 'Jeddah (JED)', 'London (LHR)', 'Rome (FCO)', 'Toronto (YYZ)', 'Tokyo Narita (NRT)'];
const destinations = [
  { city: 'Bangkok', country: 'Thailand', image: 'https://images.unsplash.com/photo-1508004680771-708b02aabdc0?w=900&q=85', tag: 'City escapes' },
  { city: 'Kathmandu', country: 'Nepal', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85', tag: 'Mountains & culture' },
  { city: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=85', tag: 'Iconic landmarks' },
  { city: 'Dubai', country: 'United Arab Emirates', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85', tag: 'Urban adventures' },
];
const services = [
  { icon: Luggage, title: 'Baggage information', desc: 'Review baggage rules and prepare your bags before you fly.' },
  { icon: HeartHandshake, title: 'Special assistance', desc: 'Find guidance for passengers who need extra travel support.' },
  { icon: Ticket, title: 'Changes & refunds', desc: 'Explore ticket changes, refund requests, and related policies.' },
  { icon: ShieldCheck, title: 'Travel advisories', desc: 'Check important guidance and entry requirements before departure.' },
];
const faq = [
  { q: 'Can I book a real flight on this website?', a: 'No. This is an independent demonstration website. Flight search is illustrative only. For live fares, reservations, payments, or changes, use the official Biman Bangladesh Airlines website.' },
  { q: 'How do I check in for a flight?', a: 'Visit the official Biman Bangladesh Airlines website for web check-in eligibility, opening times, and instructions. This demo cannot check you in.' },
  { q: 'Can I manage or change my booking?', a: 'Visit the official Manage My Trip service. Changes and refunds depend on the fare and ticket conditions.' },
  { q: 'Where can I check my baggage allowance?', a: 'Consult Biman’s official baggage information, because allowances and restrictions can differ by itinerary and ticket.' },
];

function Brand({ light = false }) {
  return <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Biman Bangladesh Airlines home">
    <img src={bimanLogo} alt="Biman Bangladesh Airlines logo" className="h-11 w-11 rounded-full object-contain bg-white" />
    <span className={`leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      <strong className="block text-xl font-extrabold tracking-tight">Biman</strong>
      <span className={`block text-[11px] tracking-wide ${light ? 'text-white/70' : 'text-slate-500'}`}>BANGLADESH AIRLINES</span>
    </span>
  </a>;
}
function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    <div className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-emerald-700">{eyebrow}</div>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 leading-7 text-slate-600">{subtitle}</p>}
  </div>;
}
function Go({ children, className = '', href = OFFICIAL, ...props }) {
  return <a {...props} href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 ${className}`}>{children}</a>;
}
export default function App() {
  useEffect(() => { document.title = 'Biman Bangladesh Airlines | Unofficial UI/UX Demo'; }, []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tab, setTab] = useState('book');
  const [trip, setTrip] = useState('round');
  const [from, setFrom] = useState('Dhaka (DAC)');
  const [to, setTo] = useState('London (LHR)');
  const [depart, setDepart] = useState('');
  const [ret, setRet] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [cabin, setCabin] = useState('Economy');
  const [notice, setNotice] = useState('');
  const [expanded, setExpanded] = useState(0);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscriptionNote, setSubscriptionNote] = useState('');
  const [selectedDest, setSelectedDest] = useState(0);
  const [reference, setReference] = useState('');
  const [surname, setSurname] = useState('');
  const [flightNo, setFlightNo] = useState('');
  const [statusDate, setStatusDate] = useState('');
  const today = new Date().toLocaleDateString('en-CA');
  const nav = [['Destinations', '#destinations'], ['Our services', '#services'], ['About Biman', '#about'], ['Travel info', '#travel-info'], ['FAQs', '#faq']];
  const flipAirports = () => { setFrom(to); setTo(from); };
  const goOfficial = () => window.open(OFFICIAL, '_blank', 'noopener,noreferrer');
  const submitBooking = (e) => {
    e.preventDefault();
    if (from === to) return setNotice('Departure and destination must be different.');
    if (trip === 'round' && depart && ret && ret < depart) return setNotice('Return date cannot be before departure date.');
    setNotice('Demo only: No search was sent and no seats were reserved. For real flights, fares and secure booking, use the official airline website.');
  };
  return <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-200">
    {/* Always-visible identification: this is not an airline-operated website. */}
    <div role="note" aria-label="Unofficial demo website disclaimer" className="bg-[#006a4e] text-white">
      <div className="mx-auto max-w-7xl px-5 py-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs sm:text-sm leading-5">
        <span className="rounded bg-white/20 px-2 py-0.5 font-extrabold tracking-wide">DEMO WEBSITE</span>
        <span>Independent educational UI/UX concept. Not affiliated with or endorsed by Biman Bangladesh Airlines.</span>
        <a href={OFFICIAL} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 hover:text-emerald-100">Visit official website ↗</a>
      </div>
    </div>
    <div className="bg-[#073d35] text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-5 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0"><Bell size={14} className="shrink-0 text-amber-300" /><span className="truncate">Travel updates and passenger information</span><Go className="hidden sm:inline-flex text-white font-semibold underline underline-offset-4" >View updates <ArrowUpRight size={13}/></Go></div>
        <div className="hidden md:flex items-center gap-5"><span className="flex items-center gap-1.5"><Phone size={13}/> 13636 (Bangladesh)</span><span className="flex items-center gap-1.5"><Globe2 size={13}/> EN</span></div>
      </div>
    </div>
    <div className="relative" id="home">
      <div className="absolute inset-0 h-[810px] lg:h-[810px] overflow-hidden bg-[#c8d7db] pointer-events-none">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster=""><source src={VIDEO} type="video/mp4" /></video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#051f24]/80 via-[#092b32]/50 to-[#123b44]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05272b]/70 via-transparent to-black/15" />
      </div>
      <header className="relative z-30 border-b border-white/20 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-5 flex min-h-20 items-center justify-between gap-6">
          <Brand />
          <nav className="hidden lg:flex items-center gap-7">{nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition">{label}</a>)}</nav>
          <div className="hidden md:flex items-center gap-3"><Go className="rounded-full border border-emerald-800 px-5 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">Manage booking</Go><a href="#booking" className="rounded-full bg-[#08745a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#075b48]">Demo flight search <ArrowRight size={16} className="inline ml-1"/></a></div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <nav className="lg:hidden border-t bg-white px-5 py-4 space-y-2">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block rounded-lg p-3 text-sm font-semibold hover:bg-emerald-50">{label}</a>)}<a href="#booking" onClick={() => setMobileOpen(false)} className="block rounded-lg bg-emerald-700 p-3 text-white font-semibold">Demo flight search</a></nav>}
      </header>
      <section className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-16 sm:pt-32 lg:pt-36 lg:pb-20">
        <div className="max-w-2xl text-white">
          <span className="mb-5 inline-flex gap-2 items-center rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[.16em] uppercase backdrop-blur-sm"><Sparkles size={15} className="text-amber-300"/> Your journey begins here</span>
          <h1 className="text-5xl sm:text-6xl lg:text-[78px] font-bold tracking-tight leading-[1.03]">Connecting<br/>Bangladesh to <span className="text-[#bde7ce]">the world.</span></h1>
          <p className="mt-6 max-w-lg text-base sm:text-lg text-white/90 leading-8">Discover new places, reconnect with loved ones, and travel confidently with Biman Bangladesh Airlines.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#booking" className="flex items-center gap-2 bg-white text-emerald-950 rounded-full px-6 py-3.5 font-bold hover:bg-emerald-50">Explore flights <ArrowRight size={18}/></a><a href="#destinations" className="rounded-full border border-white/70 px-6 py-3.5 font-semibold text-white hover:bg-white/15">Discover destinations</a></div>
        </div>
      </section>
    </div>
    <section id="booking" className="relative z-20 px-5 -mt-4 pb-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-white shadow-[0_25px_75px_rgba(15,39,41,.17)] border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-slate-100">
          {[['book',PlaneTakeoff,'Demo flight search'],['manage',Ticket,'Manage trip'],['checkin',BadgeCheck,'Web check-in'],['status',Clock3,'Flight status']].map(([value, Icon, label]) => <button key={value} onClick={() => {setTab(value); setNotice('');}} className={`flex items-center justify-center gap-2 px-3 py-5 text-xs sm:text-sm font-bold transition border-b-[3px] ${tab === value ? 'border-emerald-700 text-emerald-800 bg-emerald-50/60' : 'border-transparent text-slate-500 hover:bg-slate-50'}`}><Icon size={19}/><span>{label}</span></button>)}
        </div>
        <div className="p-5 sm:p-8">
          {tab === 'book' && <form onSubmit={submitBooking}>
            <div className="flex flex-wrap justify-between gap-4 items-center mb-6"><div className="flex gap-5 text-sm font-semibold">{[['round','Round trip'],['one','One way']].map(([value,label]) => <label key={value} className="inline-flex items-center gap-2 cursor-pointer"><input type="radio" checked={trip === value} onChange={() => setTrip(value)} className="accent-emerald-700"/>{label}</label>)}</div><span className="text-xs text-slate-500">Flight availability and prices are confirmed on the official website.</span></div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.15fr_1.15fr_1fr_1fr_.8fr] items-end">
              <div className="relative"><label className="block text-xs font-bold text-slate-600 mb-2">From</label><div className="relative"><PlaneTakeoff size={18} className="absolute top-3.5 left-3 text-emerald-700"/><select aria-label="Departure airport" value={from} onChange={e=>setFrom(e.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-8 text-sm font-semibold focus:border-emerald-600 focus:outline-none">{cities.map(c=><option key={c}>{c}</option>)}</select></div><button type="button" onClick={flipAirports} title="Swap airports" aria-label="Swap airports" className="absolute -right-5 bottom-2.5 z-10 p-2 rounded-full shadow bg-emerald-700 text-white hover:bg-emerald-800"><ArrowLeftRight size={15}/></button></div>
              <div><label className="block text-xs font-bold text-slate-600 mb-2">To</label><div className="relative"><PlaneLanding size={18} className="absolute top-3.5 left-3 text-emerald-700"/><select aria-label="Destination airport" value={to} onChange={e=>setTo(e.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-8 text-sm font-semibold focus:border-emerald-600 focus:outline-none">{cities.map(c=><option key={c}>{c}</option>)}</select></div></div>
              <div><label className="block text-xs font-bold text-slate-600 mb-2">Departure</label><input aria-label="Departure date" type="date" required min={today} value={depart} onChange={e=>setDepart(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm focus:border-emerald-600 focus:outline-none"/></div>
              <div><label className="block text-xs font-bold text-slate-600 mb-2">Return</label><input aria-label="Return date" type="date" required={trip==='round'} disabled={trip==='one'} min={depart || today} value={ret} onChange={e=>setRet(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm disabled:bg-slate-100 disabled:text-slate-400 focus:border-emerald-600 focus:outline-none"/></div>
              <div><label className="block text-xs font-bold text-slate-600 mb-2">Travelers</label><select aria-label="Number of travelers" value={passengers} onChange={e=>setPassengers(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm focus:border-emerald-600 focus:outline-none">{Array.from({length:9},(_,i)=><option key={i} value={i+1}>{i+1} {i===0?'Adult':'Travelers'}</option>)}</select></div>
            </div>
            <div className="mt-5 flex flex-wrap justify-between items-center gap-4"><div className="flex items-center gap-3"><span className="text-xs font-bold text-slate-600">Cabin class</span><select value={cabin} onChange={e=>setCabin(e.target.value)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option>Economy</option><option>Business</option></select></div><button type="submit" className="inline-flex items-center gap-3 rounded-xl bg-[#08745a] px-7 py-3.5 font-bold text-white hover:bg-[#075a47]">Preview flight search <Search size={18}/></button></div>
          </form>}
          {tab === 'manage' && <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] items-end"><div><label className="block text-xs font-bold text-slate-600 mb-2">Booking reference (PNR)</label><input value={reference} onChange={e=>setReference(e.target.value)} placeholder="Enter booking reference" className="w-full border rounded-xl px-4 py-3"/></div><div><label className="block text-xs font-bold text-slate-600 mb-2">Last name</label><input value={surname} onChange={e=>setSurname(e.target.value)} placeholder="As shown on booking" className="w-full border rounded-xl px-4 py-3"/></div><button onClick={() => setNotice('Use the official Manage My Trip portal to retrieve your booking securely; these demo fields are not transmitted.')} className="rounded-xl bg-emerald-700 text-white font-bold px-6 py-3">Continue <ArrowRight size={16} className="inline"/></button></div>}
          {tab === 'checkin' && <div className="flex flex-wrap items-center justify-between gap-5"><div><h3 className="font-bold text-xl">Check in before you arrive</h3><p className="text-sm text-slate-600 mt-2 max-w-xl">Online check-in generally opens 24 hours before departure. Verify eligibility and deadlines on Biman’s official website.</p></div><Go className="rounded-xl bg-emerald-700 px-6 py-3 text-white font-bold">Open web check-in <ArrowUpRight size={16}/></Go></div>}
          {tab === 'status' && <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] items-end"><div><label className="block text-xs font-bold text-slate-600 mb-2">Flight number</label><input value={flightNo} onChange={e=>setFlightNo(e.target.value)} placeholder="e.g. BG305" className="w-full border rounded-xl px-4 py-3"/></div><div><label className="block text-xs font-bold text-slate-600 mb-2">Flight date</label><input type="date" value={statusDate} onChange={e=>setStatusDate(e.target.value)} className="w-full border rounded-xl px-4 py-3"/></div><button onClick={() => setNotice('Please check live flight status on Biman’s official website; this demo cannot retrieve live operational data.')} className="rounded-xl bg-emerald-700 text-white font-bold px-6 py-3">Check status <ArrowRight size={16} className="inline"/></button></div>}
          {notice && <div role="status" className="mt-5 flex flex-wrap items-center justify-between gap-3 bg-emerald-50 text-emerald-900 rounded-xl p-4 text-sm"><span className="max-w-3xl">{notice}</span><Go className="font-bold underline underline-offset-4">Open official Biman website <ArrowUpRight size={15}/></Go></div>}
        </div>
      </div>
    </section>
    <section id="destinations" className="py-20 bg-[#f6f9f7] scroll-mt-20"><div className="mx-auto max-w-7xl px-5"><div className="flex flex-wrap justify-between items-end gap-6 mb-10"><SectionTitle eyebrow="Explore the world" title="Where will you go next?" subtitle="From vibrant cities to unforgettable cultural experiences, find inspiration for your next journey."/><Go className="font-bold text-emerald-800 hover:underline">Explore all destinations <ArrowUpRight size={17}/></Go></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{destinations.map((d,i)=><button key={d.city} onClick={() => {setSelectedDest(i); setTo(d.city === 'Bangkok'?'Bangkok (BKK)':d.city === 'Kathmandu'?'Kathmandu (KTM)':d.city === 'London'?'London (LHR)':'Dubai (DXB)'); document.getElementById('booking')?.scrollIntoView({behavior:'smooth'}); setTab('book');}} className="group relative h-[360px] overflow-hidden rounded-[24px] text-left bg-slate-300"><img src={d.image} alt={`${d.city}, ${d.country}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"/><span className="absolute top-5 left-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-900">{d.tag}</span><span className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white"><span><span className="block text-xs text-white/80">{d.country}</span><strong className="block mt-1 text-3xl">{d.city}</strong></span><span className="rounded-full bg-white/20 p-3 backdrop-blur"><ArrowUpRight size={20}/></span></span></button>)}</div><p className="mt-5 text-xs text-slate-500">Destination cards are travel inspiration, not live schedules or fare quotations.</p></div></section>
    <section id="services" className="py-24 scroll-mt-20"><div className="mx-auto max-w-7xl px-5"><SectionTitle eyebrow="Travel made simple" title="Everything you need for the journey" subtitle="Plan ahead with essential passenger services and travel guidance."/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({icon:Icon,title,desc})=><Go key={title} className="group flex-col !items-start !justify-between text-left rounded-2xl border border-slate-200 p-7 min-h-[235px] hover:shadow-xl hover:border-emerald-200 transition"><span className="rounded-2xl bg-emerald-50 p-4 text-emerald-800"><Icon size={26}/></span><span><strong className="mt-5 block text-lg text-slate-900">{title}</strong><span className="mt-2 block text-sm leading-6 text-slate-500">{desc}</span></span><ArrowUpRight size={18} className="text-emerald-800 mt-3"/></Go>)}</div></div></section>
    <section className="bg-[#063e35] text-white py-20"><div className="mx-auto max-w-7xl px-5 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center"><div><span className="text-xs font-bold tracking-[.2em] uppercase text-emerald-200">Why fly Biman</span><h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">A familiar welcome, wherever you're headed.</h2><p className="mt-5 max-w-lg leading-8 text-emerald-50/80">Whether you're traveling for family, business, or discovery, enjoy a journey grounded in Bangladeshi hospitality.</p><Go className="mt-8 bg-white rounded-full px-6 py-3 font-bold text-emerald-900">Explore Biman <ArrowRight size={17}/></Go></div><div className="grid gap-4 sm:grid-cols-2">{[[Globe2,'International reach','Explore destinations across Asia, Europe, the Middle East, and beyond.'],[HeartHandshake,'Bangladeshi hospitality','Experience the warmth of Bangladesh throughout your journey.'],[Smartphone,'Digital convenience','Access bookings, online check-in, and flight updates.'],[Headphones,'Passenger support','Find travel information and support when you need it.']].map(([Icon,title,copy])=><div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><Icon className="text-emerald-200" size={25}/><h3 className="mt-5 font-bold text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-emerald-50/75">{copy}</p></div>)}</div></div></section>
    <section id="about" className="py-24 scroll-mt-20"><div className="mx-auto max-w-7xl px-5 grid gap-12 lg:grid-cols-2 items-center"><div className="overflow-hidden rounded-[30px] bg-slate-100 min-h-[380px]"><img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85" alt="Airplane wing above the clouds" loading="lazy" className="w-full h-full min-h-[380px] object-cover"/></div><div><SectionTitle eyebrow="Our story" title="Proudly connecting people and places" subtitle="As Bangladesh's national flag carrier, Biman Bangladesh Airlines has a special connection to journeys that bring people together."/><p className="mt-5 text-slate-600 leading-8">From visits home to new opportunities abroad, every flight can be part of a bigger story. Explore our network, fleet information, and airline updates through Biman's official channels.</p><Go className="mt-7 rounded-full bg-emerald-700 px-6 py-3 font-bold text-white">Learn about Biman <ArrowUpRight size={17}/></Go></div></div></section>
    <section id="travel-info" className="bg-[#f6f9f7] py-20 scroll-mt-20"><div className="mx-auto max-w-7xl px-5"><div className="flex items-end justify-between gap-5 flex-wrap"><SectionTitle eyebrow="Before you fly" title="Travel well prepared" subtitle="Useful reminders for a smoother airport experience."/><Go className="font-bold text-emerald-800">All travel information <ArrowUpRight size={17}/></Go></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[[CalendarDays,'Before departure','Confirm flight timings, travel documents, visa requirements, and entry rules.'],[Luggage,'Pack confidently','Review baggage allowance and restricted items for your itinerary.'],[BadgeCheck,'Check in online','Use the official web check-in service if your reservation is eligible.']].map(([Icon,title,copy],i)=><div key={title} className="rounded-2xl bg-white p-7 border border-slate-100"><span className="text-sm font-extrabold text-emerald-700">0{i+1}</span><Icon size={29} className="mt-5 text-emerald-800"/><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></div>)}</div></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center rounded-[30px] bg-[#e9f5ef] p-8 sm:p-14"><div><div className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">Biman on your phone</div><h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">Your journey, closer at hand.</h2><p className="mt-4 text-slate-600 leading-7">Explore Biman's mobile app for trip management, online check-in, and flight updates. Check the official website for download links.</p><Go className="mt-6 inline-flex rounded-full bg-emerald-700 text-white px-6 py-3 font-bold">Explore mobile app <Smartphone size={17}/></Go></div><div className="flex justify-center"><div className="w-52 h-80 border-[10px] border-slate-900 rounded-[36px] bg-white shadow-2xl p-5 flex flex-col items-center justify-center text-center"><img src={bimanLogo} alt="Biman logo" className="h-20 w-20 object-contain"/><div className="mt-5 font-extrabold text-xl text-emerald-950">Biman</div><div className="mt-2 text-xs text-slate-500">Plan. Fly. Explore.</div><div className="mt-7 h-2 rounded bg-emerald-700 w-full"/><div className="mt-2 h-2 rounded bg-slate-100 w-3/4"/></div></div></div></section>
    <section id="faq" className="py-20 bg-[#f8faf9] scroll-mt-20"><div className="mx-auto max-w-3xl px-5"><SectionTitle eyebrow="Need help?" title="Frequently asked questions" center/><div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{faq.map((f,i)=><div key={f.q}><button aria-expanded={expanded===i} onClick={()=>setExpanded(expanded===i?-1:i)} className="w-full py-5 flex items-center justify-between gap-5 text-left font-bold text-slate-900"><span>{f.q}</span><ChevronDown size={19} className={`text-emerald-800 transition ${expanded===i?'rotate-180':''}`}/></button>{expanded===i && <p className="pb-6 text-slate-600 leading-7 text-sm">{f.a}</p>}</div>)}</div><div className="mt-7 text-center text-sm text-slate-600">Still have a question? <Go className="font-bold text-emerald-800 underline underline-offset-4" href="https://www.biman-airlines.com/faq">Visit Biman FAQs <ArrowUpRight size={14}/></Go></div></div></section>
    <section className="bg-[#0c5548] py-14"><div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-white"><div><h2 className="text-2xl sm:text-3xl font-bold">Ready to take off?</h2><p className="mt-2 text-white/80">Explore the world with Biman Bangladesh Airlines.</p></div><Go className="rounded-full bg-white text-emerald-950 px-7 py-3.5 font-bold">Go to official booking <ArrowRight size={18}/></Go></div></section>
    <footer className="bg-[#062b27] text-white"><div className="mx-auto max-w-7xl px-5 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]"><div><Brand light/><p className="mt-5 max-w-xs text-sm text-white/65 leading-7">Bangladesh's national flag carrier. Connecting journeys, people, and places.</p><p className="mt-5 flex gap-2 text-sm text-white/75"><MapPin size={18} className="shrink-0"/> Balaka, Kurmitola, Dhaka-1229, Bangladesh</p><p className="mt-3 flex gap-2 text-sm text-white/75"><Phone size={16}/> 13636</p><Go className="mt-6 text-sm font-semibold text-emerald-200 underline underline-offset-4">Visit official website <ArrowUpRight size={16}/></Go></div><div><h3 className="font-bold mb-5">Plan your trip</h3><div className="grid gap-3 text-sm text-white/70">{['Book a flight','Manage my trip','Web check-in','Flight status','Flight schedule'].map(s=><Go key={s} className="!justify-start hover:text-white">{s}</Go>)}</div></div><div><h3 className="font-bold mb-5">Passenger services</h3><div className="grid gap-3 text-sm text-white/70">{['Baggage information','Refund requests','Travel advisories','Special assistance','Passenger rights'].map(s=><Go key={s} className="!justify-start hover:text-white">{s}</Go>)}</div></div><div><h3 className="font-bold mb-5">About & support</h3><div className="grid gap-3 text-sm text-white/70">{['About Biman','News & updates','Careers','Contact & feedback','Privacy policy'].map(s=><Go key={s} className="!justify-start hover:text-white">{s}</Go>)}</div></div></div><div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50"><span>© {new Date().getFullYear()} Independent UI/UX concept — Not an official Biman Bangladesh Airlines website.</span><span>This demo does not process flight bookings, payments, check-ins, or live flight data.</span></div></div><div className="border-t border-white/10"><p className="mx-auto max-w-7xl px-5 py-5 text-xs leading-6 text-white/65"><strong className="text-white">Disclaimer:</strong> This independent website is a design demonstration for educational and portfolio purposes. It is not operated by, affiliated with, sponsored by, or endorsed by Biman Bangladesh Airlines. The airline name and trademarks belong to their respective owners. No bookings, payments, online check-ins or live flight-status requests are processed on this site. Visit <a className="text-emerald-200 underline underline-offset-2" href={OFFICIAL} target="_blank" rel="noopener noreferrer">the official Biman Bangladesh Airlines website</a> for actual airline services.</p></div></footer>
  </div>;
}
