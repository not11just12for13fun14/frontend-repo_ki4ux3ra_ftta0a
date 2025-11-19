import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Services', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [atTop, setAtTop] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${atTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl shadow-sm'} `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#BF080B] shadow-[0_8px_30px_rgba(191,8,11,0.35)]" />
          <span className={`font-semibold tracking-tight ${atTop ? 'text-white' : 'text-[#121212]'}`}>ThePlacee</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors hover:text-[#BF080B] ${atTop ? 'text-white/90' : 'text-[#2D2D2D]'} `}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(true)} className={`md:hidden p-2 rounded-lg ${atTop ? 'text-white' : 'text-[#121212]'} `} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-50 transition duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-[#121212]/90 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute inset-x-4 top-4 rounded-2xl bg-white p-6 shadow-2xl transition -translate-y-4 ${open ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-[#121212]">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg text-[#121212]/70 hover:text-[#121212]" aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="py-4 text-[#1E1E1E] hover:text-[#BF080B] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
