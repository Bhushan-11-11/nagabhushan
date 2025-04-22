
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-softBlue/30 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Hero Content */}
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-charcoal/80 mb-6">
            Computer Science Graduate
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-md">
            A passionate developer specialized in front-end development, AI, and software engineering. 
            Creating modern and user-friendly web applications.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-right">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Profile" 
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
