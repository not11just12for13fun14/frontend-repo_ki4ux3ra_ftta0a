import { Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#BF080B]" />
          <span className="font-semibold text-[#121212]">ThePlacee</span>
        </a>
        <div className="flex items-center gap-4 text-[#2D2D2D]">
          <a href="#" aria-label="Instagram" className="hover:text-[#BF080B] transition"><Instagram size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#BF080B] transition"><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#BF080B] transition"><Twitter size={18} /></a>
        </div>
        <p className="text-sm text-[#2D2D2D]/70">© {new Date().getFullYear()} ThePlacee. All rights reserved. · <a className="underline hover:text-[#BF080B]" href="#">Privacy</a> · <a className="underline hover:text-[#BF080B]" href="#">Terms</a></p>
      </div>
    </footer>
  )
}
