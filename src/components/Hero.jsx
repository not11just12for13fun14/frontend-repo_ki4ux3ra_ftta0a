import { motion, useScroll, useTransform } from 'framer-motion'
import { Search } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 600], [0, -40])
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0.85])

  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden flex items-center">
      <motion.div style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-gray-50"/>

      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-[#BF080B]/10 blur-3xl rounded-full"/>
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[#121212]/5 blur-3xl rounded-full"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-[#121212]"
          >
            Connecting Opportunities Across Africa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-[#2D2D2D]"
          >
            Unlock Your Potential with Global Opportunities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-[#2D2D2D]/80"
          >
            Discover scholarships, fellowships, internships, training programs, conferences, and self-funded study abroad placements across all continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="mt-10"
          >
            <div className="relative group">
              <input
                placeholder="Search scholarships, fellowships, internships..."
                className="w-full sm:w-[560px] h-14 px-5 pl-12 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 focus:border-[#BF080B] outline-none shadow-[0_10px_40px_rgba(2,6,23,0.08)] transition"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D2D2D]/50" size={20} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
