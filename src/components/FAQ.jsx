import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'What services does ThePlacee offer?', a: 'We curate and guide applicants through scholarships, fellowships, internships, trainings, conferences, and global job opportunities.' },
  { q: 'Do you guarantee placements?', a: 'We cannot guarantee outcomes, but our process significantly improves your odds with expert guidance and tailored strategies.' },
  { q: 'Can I work with you from anywhere?', a: 'Yes. We support applicants across Africa and the diaspora with virtual consultations and resources.' },
  { q: 'How long does the process take?', a: 'Timelines vary by program. We provide a roadmap with milestones and regular check-ins.' },
]

export default function FAQ(){
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-[#121212] text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 divide-y divide-gray-200">
          {faqs.map((item, i) => (
            <Accordion key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Accordion({ q, a, index }){
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`py-5 ${open ? 'border-l-2 border-[#BF080B] pl-4' : ''}`}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="text-[#1E1E1E] font-medium">{q}</span>
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} overflow-hidden`}>
        <div className="text-sm text-[#2D2D2D] mt-3 overflow-hidden">
          {a}
        </div>
      </div>
    </motion.div>
  )
}
