import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  imageAlt: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Fitness AI Agent',
    description: 'A web application gives you the best workout plan for your fitness goals.',
    imageAlt: 'Fitness AI preview',
    github: 'https://github.com/ommkar/fitness_app',
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website to showcase my projects and skills.',
    imageAlt: 'Portfolio preview',
    github: 'https://github.com/ommkar/Portfolio',
  },
  {
    title: 'Pokedex Web',
    description: 'A web application that allows you to search for Pokémon and view their details.',
    imageAlt: 'Pokedex preview',
    github: 'https://github.com/ommkar/Pokedex',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-responsive">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-tealAccent/10 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-neutral-400">
                {p.imageAlt}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-300 text-sm">{p.description}</p>
                <div className="mt-4 flex gap-3">
                  {p.github && (
                    <a className="btn-outline text-sm" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  {p.demo && (
                    <a className="btn-primary text-sm" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


