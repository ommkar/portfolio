import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const navItems = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'education', label: 'Education'},
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        isScrolled ? 'backdrop-blur bg-neutral-900/70 border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <nav className="container-responsive relative flex items-center justify-center h-16">
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              offset={-64}
              duration={500}
              className="cursor-pointer text-sm text-neutral-300 hover:text-tealAccent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="absolute right-4 md:right-8 flex items-center gap-4">
          <a href="https://github.com/ommkar" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-300 hover:text-tealAccent transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ommkar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-300 hover:text-tealAccent transition-colors">
            <FiLinkedin size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
}


