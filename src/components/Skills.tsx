
import { 
  Code, 
  FileText, 
  Github, 
  Database,
  Laptop
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const skills = [
  {
    category: 'Languages',
    icon: Code,
    color: '#3776AB',
    items: [
      { name: 'Python', proficiency: 85 },
      { name: 'JavaScript', proficiency: 80 },
      { name: 'SQL', proficiency: 75 },
      { name: 'PHP', proficiency: 70 }
    ]
  },
  {
    category: 'Web Technologies',
    icon: Laptop,
    color: '#E34F26',
    items: [
      { name: 'HTML5', proficiency: 90 },
      { name: 'CSS3', proficiency: 85 },
      { name: 'React (basic)', proficiency: 75 },
      { name: 'REST APIs', proficiency: 70 }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    color: '#4479A1',
    items: [
      { name: 'MySQL', proficiency: 80 },
      { name: 'SQL Server', proficiency: 75 },
      { name: 'Firebase', proficiency: 85 },
      { name: 'NoSQL (basic)', proficiency: 65 }
    ]
  },
  {
    category: 'Tools & Cloud',
    icon: Github,
    color: '#F05032',
    items: [
      { name: 'Git', proficiency: 85 },
      { name: 'Visual Studio', proficiency: 80 },
      { name: 'AWS', proficiency: 70 },
      { name: 'SDLC', proficiency: 75 }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Languages');

  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-softBlue/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Technical Skills</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Category Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {skills.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.category;
              
              return (
                <button 
                  key={category.category}
                  className={`reveal transition-all duration-300 p-4 rounded-lg flex flex-col items-center justify-center ${
                    isActive 
                      ? 'bg-primary text-white shadow-md scale-105' 
                      : 'bg-white/80 hover:bg-white hover:shadow-sm'
                  }`}
                  onClick={() => setActiveCategory(category.category)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      isActive ? 'bg-white/20' : `bg-opacity-20`
                    }`}
                    style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${category.color}20` }}
                  >
                    <Icon size={24} color={isActive ? "white" : category.color} />
                  </div>
                  <span className={`font-medium text-sm md:text-base ${isActive ? 'text-white' : 'text-charcoal'}`}>
                    {category.category}
                  </span>
                </button>
              );
            })}
          </div>
          
          {/* Skills Detail */}
          <div className="reveal">
            {skills.map((category) => {
              if (category.category !== activeCategory) return null;
              
              return (
                <div key={category.category} className="animate-scale-in">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-md">
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                      <category.icon color={category.color} className="mr-3" />
                      {category.category} Proficiency
                    </h3>
                    
                    <div className="space-y-8">
                      {category.items.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium text-charcoal">
                              {skill.name}
                            </span>
                            <span className="text-primary font-semibold">
                              {skill.proficiency}%
                            </span>
                          </div>
                          
                          <div className="relative">
                            <Progress 
                              value={skill.proficiency} 
                              className="h-3 rounded-full bg-softBlue/30"
                              style={{
                                transition: "all 1s ease-out",
                              }}
                            />
                            <div 
                              className="absolute top-0 h-3 rounded-full bg-gradient-to-r from-primary/80 to-primary"
                              style={{ 
                                width: `${skill.proficiency}%`,
                                animation: `growWidth 1.5s ease-out`
                              }}
                            />
                          </div>
                          
                          {/* Skill level indicator */}
                          <div className="mt-1 flex justify-between">
                            <span className="text-xs text-charcoal/60">Beginner</span>
                            <span className="text-xs text-charcoal/60">Intermediate</span>
                            <span className="text-xs text-charcoal/60">Expert</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-softBlue/20 p-4 rounded-lg">
                      <h4 className="font-medium text-primary mb-2">Using {activeCategory} in my projects:</h4>
                      <p className="text-charcoal/80">
                        I've applied these {activeCategory.toLowerCase()} skills across various projects, 
                        focusing on writing clean, maintainable code and following industry best practices.
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes growWidth {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
