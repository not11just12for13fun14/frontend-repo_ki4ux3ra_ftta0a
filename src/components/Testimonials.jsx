import { motion, useScroll, useTransform } from 'framer-motion'

const testimonials = Array.from({ length: 8 }).map((_, i) => ({
  name: ['Aisha','Kwame','Tomiwa','Zainab','Lerato','Chinedu','Fatou','Khalid'][i % 8],
  route: [
    'Abuja → LSE',
    'Accra → MIT',
    'Lagos → Oxford',
    'Kano → Cambridge',
    'Johannesburg → UBC',
    'Enugu → ETH Zürich',
    'Dakar → KU Leuven',
    'Kampala → TU Munich',
  ][i % 8],
  program: ['Scholarship','Fellowship','Internship','Conference'][i % 4],
  quote: 'ThePlacee guided me end-to-end — from shortlisting to winning funding.'
}))

export default function Testimonials(){
  const { scrollY } = useScroll()
  const depth1 = useTransform(scrollY, [0, 800], [0, -30])
  const depth2 = useTransform(scrollY, [0, 800], [0, -60])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-[#121212]"
        >
          Success Stories
        </motion.h2>
      </div>

      <div className="relative mt-10">
        <motion.div style={{ y: depth1 }} className="relative">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
            {testimonials.slice(0,4).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.10)] hover:-translate-y-0.5 hover:rotate-[0.25deg] transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BF080B] to-rose-500" />
                  <div>
                    <p className="font-semibold text-[#1E1E1E]">{t.name}</p>
                    <p className="text-xs text-[#2D2D2D]/70">{t.route}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#2D2D2D]">“{t.quote}”</p>
                <span className="mt-3 inline-block text-xs font-medium text-[#BF080B] bg-[#BF080B]/10 px-2.5 py-1 rounded-full">{t.program}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: depth2 }} className="relative mt-6">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
            {testimonials.slice(4).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_rgba(2,6,23,0.10)] hover:-translate-y-0.5 hover:-rotate-[0.25deg] transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#121212] to-[#2D2D2D]" />
                  <div>
                    <p className="font-semibold text-[#1E1E1E]">{t.name}</p>
                    <p className="text-xs text-[#2D2D2D]/70">{t.route}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#2D2D2D]">“{t.quote}”</p>
                <span className="mt-3 inline-block text-xs font-medium text-[#BF080B] bg-[#BF080B]/10 px-2.5 py-1 rounded-full">{t.program}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
