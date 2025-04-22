
import { 
  Code, 
  FileText, 
  Github, 
  Database,
  Laptop
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', icon: Code, color: '#F7DF1E' },
      { name: 'React', icon: Code, color: '#61DAFB' },
      { name: 'HTML/CSS', icon: Code, color: '#E34F26' },
      { name: 'Tailwind CSS', icon: Code, color: '#38B2AC' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: Code, color: '#339933' },
      { name: 'Python', icon: Code, color: '#3776AB' },
      { name: 'Express', icon: Code, color: '#000000' },
      { name: 'RESTful APIs', icon: Code, color: '#0096D6' }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: Database, color: '#47A248' },
      { name: 'PostgreSQL', icon: Database, color: '#336791' },
      { name: 'SQL', icon: Database, color: '#4479A1' },
      { name: 'Firebase', icon: Database, color: '#FFCA28' }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: Github, color: '#F05032' },
      { name: 'Docker', icon: Code, color: '#2496ED' },
      { name: 'Agile/Scrum', icon: FileText, color: '#66CFD5' },
      { name: 'AWS', icon: Laptop, color: '#FF9900' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="reveal">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">{category.category}</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  
                  return (
                    <div 
                      key={skillIndex} 
                      className="flex flex-col items-center justify-center skill-icon"
                    >
                      <div 
                        className="w-14 h-14 rounded-lg flex items-center justify-center shadow-sm mb-3"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <Icon size={28} color={skill.color} />
                      </div>
                      <span className="text-charcoal text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
