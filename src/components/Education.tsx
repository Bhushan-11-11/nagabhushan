
import { BookOpen, Award } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Academy Cloud Architecting',
    issuer: 'Amazon Web Services',
    year: '2023'
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services', 
    year: '2022'
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education */}
          <div className="reveal">
            <div className="bg-softBlue/20 p-6 rounded-lg h-full">
              <div className="flex items-center mb-6">
                <BookOpen size={28} className="text-primary mr-4" />
                <h3 className="text-xl font-bold text-charcoal">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary">Master of Science in Computer Science</h4>
                  <p className="text-charcoal/70">Montclair State University</p>
                  <p className="text-charcoal/60">January 2023 - December 2024</p>
                  <p className="mt-2 text-charcoal/70">
                    Focusing on advanced software development, data structures, algorithms, and cloud computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="reveal">
            <div className="bg-softBlue/20 p-6 rounded-lg h-full">
              <div className="flex items-center mb-6">
                <Award size={28} className="text-primary mr-4" />
                <h3 className="text-xl font-bold text-charcoal">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-primary">{cert.name}</h4>
                    <p className="text-charcoal/70">{cert.issuer}</p>
                    <p className="text-charcoal/60">Issued {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
