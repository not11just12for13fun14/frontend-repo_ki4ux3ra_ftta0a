import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy, BookOpen, Globe2, Plane } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Scholarships',
    desc: 'Fully and partially funded programs across continents.',
  },
  { icon: Briefcase, title: 'Internships', desc: 'Industry placements to build real skills.' },
  { icon: Trophy, title: 'Contests', desc: 'Competitions to showcase your talent.' },
  { icon: BookOpen, title: 'Trainings', desc: 'Short courses and bootcamps to level up.' },
  { icon: Globe2, title: 'Conferences', desc: 'Meet global leaders and expand your network.' },
  { icon: Plane, title: 'Abroad Jobs', desc: 'Career opportunities around the world.' },
]

export default function Opportunities() {
  return (
    <section id="opportunities" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold text-[#121212]"
          >
            Explore Opportunities
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-[0_6px_30px_rgba(2,6,23,0.06)] hover:shadow-[0_12px_48px_rgba(2,6,23,0.12)] transition-transform hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#BF080B]/10 text-[#BF080B] flex items-center justify-center mb-4">
                <it.icon />
              </div>
              <h3 className="text-lg font-semibold text-[#1E1E1E]">{it.title}</h3>
              <p className="mt-2 text-sm text-[#2D2D2D]/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
