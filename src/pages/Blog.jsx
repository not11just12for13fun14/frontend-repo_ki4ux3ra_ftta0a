import { motion } from 'framer-motion'

const posts = Array.from({ length: 9 }).map((_, i) => ({
  title: `How to win ${['scholarships','fellowships','internships'][i%3]}`,
  date: 'Sep 12, 2025',
  tag: ['Scholarships','Careers','Abroad'][i%3],
  excerpt: 'Actionable strategies to stand out in competitive global programs.',
  image: `https://images.unsplash.com/photo-1523240964-1c1bfb625f2e?q=80&w=800&auto=format&fit=crop`,
}))

export default function Blog(){
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-[#121212] mb-10"
        >
          Insights & Stories
        </motion.h1>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24, clipPath: 'inset(10% 0 0 0 round 16px)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0 round 16px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i%3)*0.05 }}
              className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-[0_8px_30px_rgba(2,6,23,0.08)] hover:-translate-y-0.5 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-[#BF080B] bg-[#BF080B]/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-[#1E1E1E]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#2D2D2D]/80">{p.excerpt}</p>
                <div className="mt-4 text-xs text-[#2D2D2D]/60">{p.date}</div>
                <a href="#" className="mt-3 inline-block text-[#BF080B] font-medium">Read More →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
