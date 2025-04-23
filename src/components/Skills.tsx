
import { 
  Code, 
  FileText, 
  Github, 
  Database,
  Laptop
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useState } from 'react';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: Code, color: '#3776AB', proficiency: 85 },
      { name: 'JavaScript', icon: Code, color: '#F7DF1E', proficiency: 80 },
      { name: 'SQL', icon: Code, color: '#4479A1', proficiency: 75 },
      { name: 'PHP', icon: Code, color: '#777BB4', proficiency: 70 }
    ]
  },
  {
    category: 'Web Technologies',
    items: [
      { name: 'HTML5', icon: Code, color: '#E34F26', proficiency: 90 },
      { name: 'CSS3', icon: Code, color: '#1572B6', proficiency: 85 },
      { name: 'React (basic)', icon: Code, color: '#61DAFB', proficiency: 75 },
      { name: 'REST APIs', icon: Code, color: '#0096D6', proficiency: 70 }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', icon: Database, color: '#4479A1', proficiency: 80 },
      { name: 'SQL Server', icon: Database, color: '#CC2927', proficiency: 75 },
      { name: 'Firebase', icon: Database, color: '#FFCA28', proficiency: 85 },
      { name: 'NoSQL (basic)', icon: Database, color: '#4DB33D', proficiency: 65 }
    ]
  },
  {
    category: 'Tools & Cloud',
    items: [
      { name: 'Git', icon: Github, color: '#F05032', proficiency: 85 },
      { name: 'Visual Studio', icon: Code, color: '#5C2D91', proficiency: 80 },
      { name: 'AWS', icon: Laptop, color: '#FF9900', proficiency: 70 },
      { name: 'SDLC', icon: FileText, color: '#66CFD5', proficiency: 75 }
    ]
  }
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="reveal bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">{category.category}</h3>
              
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  const isHovered = hoveredCategory === category.category;
                  
                  return (
                    <div 
                      key={skillIndex} 
                      className="skill-item"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-8 h-8 rounded flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}15` }}
                        >
                          <Icon size={20} color={skill.color} />
                        </div>
                        <span className="text-charcoal font-medium">{skill.name}</span>
                        {isHovered && (
                          <span className="text-charcoal/60 text-sm ml-auto">
                            {skill.proficiency}%
                          </span>
                        )}
                      </div>
                      {isHovered && (
                        <div className="skill-progress">
                          <Progress 
                            value={skill.proficiency} 
                            className="h-2 bg-softBlue/20"
                            style={{
                              transition: "all 0.6s ease-out",
                            }}
                          />
                        </div>
                      )}
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
