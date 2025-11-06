import { motion } from 'framer-motion';
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiNodedotjs } from 'react-icons/si';

const skills = [
  { name: 'C++', icon: SiCplusplus },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Machine Learning', icon: SiPython },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Git', icon: SiGit },
  { name: 'Node.js', icon: SiNodedotjs },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-responsive">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {skills.map(({ name, icon: Icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-tealAccent/10 transition-all"
            >
              <Icon className="text-3xl text-neutral-300 group-hover:text-tealAccent transition-colors" />
              <span className="mt-3 text-sm text-neutral-300">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


