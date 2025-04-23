
import { Briefcase, Code, Database } from 'lucide-react';

const experiences = [
  {
    company: 'Capgemini',
    role: 'Junior Software Developer',
    period: 'July 2022 - December 2022',
    description: 'Worked on Python/JavaScript applications, collaborated using GitLab, and gained experience with basic SDLC principles.',
    logo: Code,
    details: [
      'Assisted in software application development using Python and JavaScript during training and project work',
      'Collaborated with team members to understand project requirements and contribute to coding tasks',
      'Wrote and maintained clean, well-documented code for small modules and features',
      'Used Git for version control and collaborated with teammates on GitLab',
      'Conducted basic debugging and testing to ensure functionality of assigned tasks',
      'Gained foundational knowledge of SDLC and software development best practices'
    ],
    technologies: ['Python', 'JavaScript', 'GitLab', 'Git']
  },
  {
    company: 'Wolfers Tech',
    role: 'Frontend Developer Intern',
    period: 'March 2022 - June 2022',
    description: 'Built an education/employment portal with Firebase integration. Focused on UI/UX design and frontend functionality.',
    logo: Database,
    project: 'Education and Employment Portal',
    details: [
      'Led frontend development using HTML and CSS, creating a responsive and visually appealing user interface',
      'Implemented backend functionalities using PHP and SQL for dynamic content management',
      'Integrated Google Firebase for secure user authentication and real-time data storage',
      'Collaborated with cross-functional teams to gather requirements and design system architecture',
      'Improved user engagement by 20% through intuitive design and personalized features'
    ],
    technologies: ['HTML', 'CSS', 'PHP', 'SQL', 'Firebase']
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
                  
                  {exp.project && (
                    <p className="text-charcoal/90 font-medium mb-2">
                      Project: {exp.project}
                    </p>
                  )}

                  <p className="text-charcoal/70 mb-4">{exp.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-softBlue/30 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Contributions */}
                  <div>
                    <p className="text-primary font-medium text-sm mb-2">Key Contributions:</p>
                    <ul className="list-disc list-inside text-charcoal/70 text-sm space-y-1">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
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
