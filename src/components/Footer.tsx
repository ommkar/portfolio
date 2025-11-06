import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-16">
      <div className="container-responsive py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p>© 2025 Ommkar Pattnaik</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ommkar" target="_blank" rel="noreferrer" className="hover:text-tealAccent"> <FiGithub /> </a>
          <a href="https://www.linkedin.com/in/ommkar" target="_blank" rel="noreferrer" className="hover:text-tealAccent"> <FiLinkedin /> </a>
        </div>
      </div>
    </footer>
  );
}


