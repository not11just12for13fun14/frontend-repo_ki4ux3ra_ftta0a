import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section className="py-24 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold"
        >
          Have a story to share? Or want to advertise?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80"
        >
          Join us in empowering the next generation of African leaders.
        </motion.p>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center justify-center mt-8 h-12 px-6 rounded-xl bg-[#BF080B] text-white shadow-[0_10px_40px_rgba(191,8,11,0.35)] hover:shadow-[0_14px_56px_rgba(191,8,11,0.45)] transition"
        >
          Submit Your Opportunity
        </motion.a>
      </div>
    </section>
  )
}
