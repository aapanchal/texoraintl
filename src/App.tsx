import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from 'lucide-react';

const products = [
  { title: 'Fiber', icon: Layers3, description: 'Reliable raw materials for consistent production.', items: ['Cotton', 'Polyester', 'Viscose'] },
  { title: 'Yarn', icon: Sparkles, description: 'Versatile yarns for every textile application.', items: ['Cotton', 'Blended', 'Synthetic'] },
  { title: 'Fabric', icon: PackageCheck, description: 'Quality fabrics with the finish your market needs.', items: ['Woven', 'Knitted', 'Denim'] },
  { title: 'Garments', icon: ShieldCheck, description: 'Production-ready apparel for global brands.', items: ['Menswear', 'Womenswear', 'Kidswear'] },
];

const reasons = [
  { title: 'Quality Assured', description: 'Trusted mills and careful quality checks.', icon: CircleCheck },
  { title: 'Competitive Pricing', description: 'Strong sourcing for value at every volume.', icon: Sparkles },
  { title: 'Timely Delivery', description: 'Clear coordination from order to arrival.', icon: Truck },
  { title: 'Global Export Support', description: 'Documentation and logistics handled with care.', icon: Globe2 },
];

const steps = [
  { number: '01', title: 'Enquiry', description: 'Share your requirement and target.' },
  { number: '02', title: 'Sampling', description: 'Review quality, color and specifications.' },
  { number: '03', title: 'Production', description: 'We coordinate your approved order.' },
  { number: '04', title: 'Shipment', description: 'Your goods move on time, worldwide.' },
];

function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Texora International home">
      {!failed && (
        <img
          src={compact ? '/logos/LOGO_ICON.png' : '/logos/LOGO_WEB_.png'}
          alt=""
          className={compact ? 'h-10 w-10 object-contain' : 'h-10 w-auto max-w-[178px] object-contain'}
          onError={() => setFailed(true)}
        />
      )}
      {failed && <span className={`font-display text-xl font-bold tracking-[-0.05em] ${light ? 'text-white' : 'text-[#0B2A5B]'}`}>TEXORA <span className="text-[#1E4FA3]">INTL</span></span>}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Home', '#home'], ['About', '#about'], ['Products', '#products'], ['Why Us', '#why-us'], ['Contact', '#contact']];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <a href="#contact" className="button-primary hidden md:inline-flex">Get a Quote <ArrowRight size={16} /></a>
        <button type="button" className="rounded-lg p-2 text-[#0B2A5B] md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 text-sm font-semibold text-[#0B2A5B] last:border-0">{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="button-primary mt-4 w-full">Get a Quote <ArrowRight size={16} /></a>
      </nav>}
    </header>
  );
}

function Hero() {
  return <section id="home" className="hero-pattern relative overflow-hidden pt-32">
    <div className="section-shell grid min-h-[650px] items-center gap-12 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-20">
      <div className="relative z-10 max-w-2xl">
        <div className="eyebrow mb-6"><span className="h-2 w-2 rounded-full bg-[#7FBFEF]" /> Textile trade, made dependable</div>
        <h1 className="font-display text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">Your trusted partner in <span className="text-[#7FBFEF]">global textile trading.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100">From fiber and yarn to fabric and garments, we connect quality textile products with the markets that need them.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="button-light">Get a Quote <ArrowRight size={17} /></a><a href="#products" className="button-outline">Explore Products <ChevronDown size={17} /></a></div>
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-100"><span className="flex items-center gap-2"><Check size={16} className="text-[#7FBFEF]" /> Quality-led sourcing</span><span className="flex items-center gap-2"><Check size={16} className="text-[#7FBFEF]" /> Export-ready support</span></div>
      </div>
      <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
        <div className="absolute -right-4 top-6 h-64 w-64 rounded-full bg-[#7FBFEF]/20 blur-3xl" />
        <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
          <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-[1.5rem] p-7 sm:min-h-[470px]"><img src="/image.png" alt="Close-up texture of blue textile fibers" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#071d40]/90 via-[#0B2A5B]/20 to-transparent" /><div className="relative z-10"><p className="text-sm font-semibold uppercase tracking-[.22em] text-[#7FBFEF]">Texora International</p><p className="mt-3 max-w-[260px] font-display text-3xl font-semibold leading-tight text-white">Moving materials. Building possibilities.</p></div></div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7fbff] to-transparent" />
  </section>;
}

function About() {
  return <section id="about" className="section-shell grid gap-10 py-24 lg:grid-cols-[.8fr_1.2fr] lg:py-32"><div><p className="section-kicker">About Texora</p><h2 className="section-title mt-3">A smarter way to source textiles.</h2></div><div className="max-w-2xl lg:pt-8"><p className="text-xl leading-9 text-slate-600">Texora International is a textile trading and export company built around one simple promise: make global sourcing more reliable.</p><p className="mt-5 leading-7 text-slate-500">We bring together trusted manufacturing partners, market-ready products and responsive service to help businesses move from requirement to shipment with confidence.</p><div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#dbeafe] pt-7 sm:grid-cols-3"><div><p className="font-display text-3xl font-bold text-[#0B2A5B]">4+</p><p className="mt-1 text-sm text-slate-500">Product categories</p></div><div><p className="font-display text-3xl font-bold text-[#0B2A5B]">1</p><p className="mt-1 text-sm text-slate-500">Reliable partner</p></div><div><p className="font-display text-3xl font-bold text-[#0B2A5B]">∞</p><p className="mt-1 text-sm text-slate-500">Possibilities</p></div></div></div></section>;
}

function Products() {
  return <section id="products" className="bg-[#eef7ff] py-24 lg:py-32"><div className="section-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">Our products</p><h2 className="section-title mt-3">Textile essentials,<br className="hidden sm:block" /> sourced with care.</h2></div><p className="max-w-sm leading-7 text-slate-500">A focused range for buyers who value consistent quality and clear communication.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{products.map(({ title, icon: Icon, description, items }, index) => <article key={title} className="group rounded-2xl border border-[#d6ebff] bg-white p-6 shadow-[0_8px_30px_rgba(30,79,163,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,79,163,0.12)]"><div className="flex items-center justify-between"><div className="icon-box"><Icon size={22} /></div><span className="text-xs font-bold text-[#9acbf3]">0{index + 1}</span></div><h3 className="mt-7 font-display text-2xl font-semibold text-[#0B2A5B]">{title}</h3><p className="mt-2 min-h-[52px] text-sm leading-6 text-slate-500">{description}</p><ul className="mt-5 space-y-2 border-t border-slate-100 pt-5 text-sm font-medium text-slate-600">{items.map(item => <li key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#7FBFEF]" />{item}</li>)}</ul></article>)}</div></div></section>;
}

function WhyUs() {
  return <section id="why-us" className="section-shell py-24 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-kicker">Why Texora</p><h2 className="section-title mt-3">Trade with clarity.<br /><span className="text-[#1E4FA3]">Grow with confidence.</span></h2><p className="mt-6 max-w-sm leading-7 text-slate-500">Good trade is more than a transaction. It is the confidence that every detail is being handled.</p></div><div className="grid gap-4 sm:grid-cols-2">{reasons.map(({ title, description, icon: Icon }) => <div key={title} className="rounded-2xl border border-slate-100 p-6 transition hover:border-[#b9defb] hover:bg-[#f8fcff]"><div className="icon-box"><Icon size={21} /></div><h3 className="mt-5 font-display text-lg font-semibold text-[#0B2A5B]">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>)}</div></div></section>;
}

function Process() {
  return <section className="bg-[#0B2A5B] py-24 lg:py-28"><div className="section-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker !text-[#7FBFEF]">How it works</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">From enquiry to arrival.</h2></div><p className="max-w-sm leading-7 text-blue-100/70">A straightforward process, supported at every step.</p></div><div className="mt-14 grid gap-8 md:grid-cols-4">{steps.map((step, index) => <div key={step.number} className="relative border-t border-white/20 pt-5"><span className="font-display text-sm font-bold text-[#7FBFEF]">{step.number}</span><h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3><p className="mt-2 text-sm leading-6 text-blue-100/65">{step.description}</p>{index < 3 && <ArrowRight className="absolute right-0 top-5 hidden text-white/25 md:block" size={18} />}</div>)}</div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get('name') || '').trim(); const email = String(form.get('email') || '').trim(); if (!name || !email) { setError('Please add your name and email to continue.'); return; } setError(''); setSent(true); const subject = encodeURIComponent(`Quote enquiry from ${name}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${form.get('phone') || ''}\n\n${form.get('message') || ''}`); window.location.href = `mailto:ravi@texoraintl.com?subject=${subject}&body=${body}`; };
  return <section id="contact" className="bg-[#eef7ff] py-24 lg:py-32"><div className="section-shell grid gap-12 lg:grid-cols-[1fr_.72fr] lg:items-start"><div><p className="section-kicker">Start a conversation</p><h2 className="section-title mt-3">Let’s move your<br /><span className="text-[#1E4FA3]">next order forward.</span></h2><p className="mt-6 max-w-md leading-7 text-slate-500">Tell us what you are looking for. Our team will get back to you with the right sourcing options.</p><form onSubmit={submit} className="mt-10 rounded-2xl bg-white p-6 shadow-[0_12px_40px_rgba(30,79,163,0.08)] sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Name<input name="name" required placeholder="Your name" className="field-input" /></label><label className="field-label">Email<input name="email" type="email" required placeholder="you@company.com" className="field-input" /></label><label className="field-label">Phone<input name="phone" placeholder="+91 ..." className="field-input" /></label></div><label className="field-label mt-5 block">Message<textarea name="message" rows={4} placeholder="Tell us about your requirement..." className="field-input resize-none" /></label>{error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}{sent && <p className="mt-4 text-sm font-medium text-[#1E4FA3]">Thank you. Your enquiry is ready to send by email.</p>}<button type="submit" className="button-primary mt-6">Send Enquiry <Send size={16} /></button></form></div><aside><div className="rounded-2xl bg-[#0B2A5B] p-7 text-white sm:p-9"><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#7FBFEF]">Contact details</p><h3 className="mt-5 font-display text-2xl font-semibold">We’re ready when you are.</h3><div className="mt-8 space-y-5"><a href="mailto:ravi@texoraintl.com" className="contact-link"><Mail size={19} /> <span>ravi@texoraintl.com</span></a><a href="tel:+919558556868" className="contact-link"><Phone size={19} /> <span>+91 95585 56868</span></a><a href="https://wa.me/919558556868" className="contact-link" target="_blank" rel="noreferrer"><MessageCircle size={19} /> <span>Chat on WhatsApp</span></a></div><div className="mt-10 border-t border-white/15 pt-6 text-sm leading-6 text-blue-100/70"><p>Serving textile businesses with dependable sourcing and export support.</p></div></div></aside></div></section>;
}

function Footer() {
  return <footer className="bg-[#071d40] text-white"><div className="section-shell py-10"><div className="flex flex-col gap-7 border-b border-white/10 pb-9 md:flex-row md:items-center md:justify-between"><Logo light /><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100/65">{[['Home', '#home'], ['About', '#about'], ['Products', '#products'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}</div></div><div className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-[#7FBFEF]">Our brands / partners</p><div className="mt-4 flex items-center gap-3"><img src="/logos/LOGO_ICON.png" alt="Texora brand mark" className="h-9 w-9 rounded bg-white object-contain p-1" /><img src="/logos/LOGO_ALL.png" alt="Texora International logo" className="h-9 w-auto max-w-[150px] rounded bg-white object-contain px-2" /><span className="rounded border border-white/15 px-3 py-2 text-xs font-medium text-white/60">Trusted textile network</span></div></div><div className="text-left text-sm text-blue-100/60 sm:text-right"><a href="mailto:ravi@texoraintl.com" className="block hover:text-white">ravi@texoraintl.com</a><a href="tel:+919558556868" className="mt-1 block hover:text-white">+91 95585 56868</a></div></div><div className="border-t border-white/10 pt-6 text-xs text-blue-100/45">© 2025 Texora International. All rights reserved.</div></div><a href="https://wa.me/919558556868" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1E4FA3] text-white shadow-xl transition hover:scale-105 md:hidden"><MessageCircle size={25} /></a></footer>;
}

function App() {
  return <div className="min-h-screen bg-[#f7fbff] text-slate-900"><Navbar /><main><Hero /><About /><Products /><WhyUs /><Process /><Contact /></main><Footer /></div>;
}

export default App;
