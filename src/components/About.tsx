import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-responsive grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1 flex justify-center"
        >
          <div className="relative">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-tealAccent/30 to-transparent p-1">
              <div className="w-full h-full rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 text-sm">
                <img src="/pfp1.jpg" alt="Profile Photo" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            I'm Ommkar, a Computer Science and Engineering student with a strong interest in Machine Learning and Web Development. I enjoy building intelligent, efficient systems that solve real-world problems. I’m always eager to learn new technologies and apply them creatively through projects and collaborations.
          </p>
          <div className="mt-6">
          <div className="mt-6">
            <a
              className="btn-primary"
              href="https://docs.google.com/document/d/1Ry91eJPwnYHBiYpG_1un0RS78VG0uTaStf8b4JGfe-M/edit?usp=sharing"  
              download
              target="_blank"
              rel="noopener"
            >
              View Resume
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


