import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-tealAccent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-tealAccent/10 rounded-full blur-3xl" />
      <div className="container-responsive relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-tealAccent font-medium tracking-wide mb-3"
        >
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Ommkar Pattnaik
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 text-lg text-neutral-300 max-w-2xl"
        >
          Passionate about Machine Learning, Web Development, and Innovative Tech Solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}


