import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationItems = [
  {
    institution: 'Odisha University of Technology and Research (OUTR)',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2023 - 2027',
    CGPA: '8.77',
    description: 'I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at Odisha University of Technology and Research (OUTR).',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container-responsive">
        <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        <div className="mt-8 space-y-6">
          {educationItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-tealAccent/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-tealAccent/30 to-transparent p-1">
                  <div className="w-full h-full rounded-full bg-neutral-800 flex items-center justify-center">
                    <FaGraduationCap className="text-tealAccent text-xl" />
                  </div>
                </div>
                <div className="flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-tealAccent mt-1">{item.institution}</p>
                  <p className="text-neutral-400 text-sm mt-1">{item.period}</p>
                  <p className="text-neutral-400 text-sm mt-1">CGPA: {item.CGPA}</p>
                  <p className="text-neutral-300 mt-3">{item.description}</p>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
