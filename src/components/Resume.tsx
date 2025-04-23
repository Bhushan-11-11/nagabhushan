
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="section bg-gradient-to-br from-softBlue/30 to-softGray/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-center">My Resume</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 reveal">
          <div className="flex flex-col items-center">
            <FileText size={64} className="text-primary mb-6" />
            
            <h3 className="text-2xl font-bold text-charcoal mb-4">Ready to Know More?</h3>
            
            <p className="text-charcoal/70 mb-8">
              Download my resume to learn more about my education, work experience, 
              technical skills, and projects I've worked on throughout my career.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 flex items-center gap-2">
              <FileText size={18} />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
