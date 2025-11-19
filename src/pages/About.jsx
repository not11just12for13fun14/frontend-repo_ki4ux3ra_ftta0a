import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function useCount(to){
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return { ref, inView, to }
}

export default function About(){
  const stats = [
    { label: 'Students Placed', value: 500 },
    { label: 'Countries Reached', value: 45 },
    { label: 'Programs Curated', value: 1200 },
  ]

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-[#121212] mb-10"
        >
          Who We Are
        </motion.h1>

        <section className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold text-[#1E1E1E]">Mission</h2>
            <p className="mt-3 text-[#2D2D2D]/80">We empower young Africans to access life-changing opportunities across the globe through curated programs and personalized guidance.</p>
            <h2 className="mt-8 text-2xl font-semibold text-[#1E1E1E]">Vision</h2>
            <p className="mt-3 text-[#2D2D2D]/80">An Africa where ambition meets access — every talented individual can learn, grow, and lead on the world stage.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="grid grid-cols-3 gap-4">
              {['/team1.jpg','/team2.jpg','/team3.jpg','/team4.jpg','/team5.jpg','/team6.jpg'].map((src, i) => (
                <div key={i} className="aspect-square rounded-full bg-gradient-to-br from-gray-100 to-gray-200" />
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mt-10">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i*0.05 }} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(2,6,23,0.08)]">
                <Counter end={s.value} />+
                <div className="mt-1 text-sm text-[#2D2D2D]/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function Counter({ end }){
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <span ref={ref} className="text-4xl font-bold text-[#121212]">
      {inView ? end : 0}
    </span>
  )
}
