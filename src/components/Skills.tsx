
import { 
  Code, 
  FileText, 
  Github, 
  Database,
  Laptop
} from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: Code, color: '#3776AB' },
      { name: 'JavaScript', icon: Code, color: '#F7DF1E' },
      { name: 'SQL', icon: Code, color: '#4479A1' },
      { name: 'PHP', icon: Code, color: '#777BB4' }
    ]
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', icon: Code, color: '#E34F26' },
      { name: 'CSS3', icon: Code, color: '#1572B6' },
      { name: 'React (basic)', icon: Code, color: '#61DAFB' },
      { name: 'REST APIs', icon: Code, color: '#0096D6' }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: Database, color: '#4479A1' },
      { name: 'SQL Server', icon: Database, color: '#CC2927' },
      { name: 'Firebase', icon: Database, color: '#FFCA28' },
      { name: 'NoSQL (basic)', icon: Database, color: '#4DB33D' }
    ]
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git', icon: Github, color: '#F05032' },
      { name: 'Visual Studio', icon: Code, color: '#5C2D91' },
      { name: 'AWS', icon: Laptop, color: '#FF9900' },
      { name: 'SDLC', icon: FileText, color: '#66CFD5' }
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
