
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">Naga Bhushan Naidu Addala</div>
            <p className="text-white/60 text-sm">
              &copy; {currentYear} All Rights Reserved.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap gap-4 justify-center">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/nagabhushannaidu-addala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github size={20} />
            </a>
            
            <a 
              href="mailto:nagabhushannaidua@gmail.com" 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
