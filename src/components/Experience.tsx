
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Capgemini',
    role: 'Junior Software Developer',
    period: 'July 2022 - December 2022',
    description: 'Worked on Python/JavaScript applications, collaborated using GitLab, and gained experience with basic SDLC principles.',
    logo: Briefcase
  },
  {
    company: 'Wolfers Tech',
    role: 'Frontend Developer Intern',
    period: 'March 2022 - June 2022',
    description: 'Built an education/employment portal with Firebase integration. Focused on UI/UX design and frontend functionality.',
    logo: Briefcase
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-10 last:mb-0 reveal"
            >
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-sm">
                {/* Company Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-softBlue/30 flex items-center justify-center">
                    <exp.logo size={28} className="text-primary" />
                  </div>
                </div>
                
                {/* Experience Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-charcoal">{exp.company}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h4 className="text-lg font-medium text-primary">{exp.role}</h4>
                    <span className="text-sm text-charcoal/60">{exp.period}</span>
                  </div>
                  <p className="text-charcoal/70">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
