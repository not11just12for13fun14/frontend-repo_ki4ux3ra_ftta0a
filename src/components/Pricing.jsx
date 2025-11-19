import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const tiers = [
  { name: 'Basic', price: 49, features: ['Profile review', 'Opportunity matching', 'Email support'] },
  { name: 'Premium', price: 149, features: ['1:1 mentorship', 'Application editing', 'Interview prep', 'Priority support'] },
  { name: 'Elite', price: 299, features: ['Full strategy', 'End-to-end application', 'Scholarship pitch coaching'] },
]

function useCountUp(triggered, to, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let start = 0
    const startTime = performance.now()
    const step = (t) => {
      const p = Math.min((t - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const val = Math.round(start + (to - start) * eased)
      setValue(val)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, to, duration])
  return value
}

export default function Pricing(){
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-100px', once: true })

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-[#121212] text-center"
        >
          Our Services
        </motion.h2>

        <div ref={ref} className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => {
            const val = useCountUp(inView, t.price)
            const isPremium = t.name === 'Premium'
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative rounded-2xl border p-6 bg-white shadow-[0_10px_40px_rgba(2,6,23,0.08)] hover:-translate-y-0.5 transition ${isPremium ? 'border-[#BF080B] ring-4 ring-[#BF080B]/10' : 'border-gray-200'}`}
              >
                {isPremium && (
                  <div className="absolute -inset-px rounded-2xl animate-pulse pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(191,8,11,0.3), 0 10px 40px rgba(191,8,11,0.15)'}} />
                )}
                <h3 className="text-xl font-semibold text-[#1E1E1E]">{t.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#121212]">${val}</span>
                  <span className="text-sm text-[#2D2D2D]/70">/consult</span>
                </div>
                <ul className="mt-6 space-y-2">
                  {t.features.map(f => (
                    <li key={f} className="text-sm text-[#2D2D2D]">• {f}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full h-11 rounded-xl bg-[#121212] text-white hover:bg-[#2D2D2D] transition">Get started</button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
