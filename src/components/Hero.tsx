
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-softBlue/30 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Hero Content */}
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Hi, I'm <span className="text-primary">Naga Bhushan Naidu Addala</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-charcoal/80 mb-6">
            Aspiring Software Developer | Master's Student in Computer Science
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-md">
            I'm a software developer passionate about building scalable web applications and contributing to innovative engineering teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
              <a href="#resume">View Resume</a>
            </Button>
            <Button asChild className="bg-softBlue hover:bg-softBlue/90 text-primary px-8 py-6">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-right">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Naga Bhushan Naidu Addala" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
