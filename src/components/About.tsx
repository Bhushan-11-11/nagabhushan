
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-1/3 reveal">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Working on computer" 
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-2/3 reveal">
            <h3 className="text-2xl font-bold text-primary mb-4">Computer Science Graduate from Montclair State University</h3>
            
            <p className="text-charcoal/80 mb-4">
              I am a passionate Computer Science professional with a Master's degree from Montclair State University. 
              My academic journey has provided me with a solid foundation in software engineering principles and modern development practices.
            </p>
            
            <p className="text-charcoal/80 mb-6">
              My areas of expertise include front-end development, artificial intelligence, and software engineering. 
              I'm deeply interested in creating intuitive user interfaces, developing intelligent systems, and building 
              robust software solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-charcoal mb-2">Education</h4>
                <p className="text-charcoal/70">MSc in Computer Science</p>
                <p className="text-charcoal/70">Montclair State University</p>
              </div>
              
              <div>
                <h4 className="font-bold text-charcoal mb-2">Career Goals</h4>
                <p className="text-charcoal/70">Develop innovative software solutions</p>
                <p className="text-charcoal/70">Contribute to open-source communities</p>
              </div>
            </div>
            
            <Button asChild className="bg-softBlue hover:bg-softBlue/90 text-primary">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
