
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Coding" 
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
              Aspiring Software Developer with hands-on experience in full-stack development, databases, and cloud technologies. 
              Skilled in Python, JavaScript, SQL, and HTML/CSS, with real-world project experience in education tech and alumni platforms. 
              Currently pursuing a Master's in Computer Science at Montclair State University.
            </p>
            
            <p className="text-charcoal/80 mb-6">
              Based in Charlotte, NC, I'm passionate about creating efficient, user-friendly applications 
              that solve real-world problems. My focus areas include web development, database management, 
              and cloud computing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-charcoal mb-2">Education</h4>
                <p className="text-charcoal/70">M.S. in Computer Science</p>
                <p className="text-charcoal/70">Montclair State University (2023-2024)</p>
              </div>
              
              <div>
                <h4 className="font-bold text-charcoal mb-2">Location</h4>
                <p className="text-charcoal/70">Charlotte, North Carolina</p>
                <p className="text-charcoal/70">Available for relocation</p>
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
