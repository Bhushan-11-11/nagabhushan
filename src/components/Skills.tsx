
import { 
  Code, 
  FileText, 
  Github, 
  Database,
  Laptop,
  LineChart
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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

// For the pie chart visualization
const getOverallProficiency = (category: any) => {
  return Math.round(category.items.reduce((sum: number, item: any) => sum + item.proficiency, 0) / category.items.length);
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Languages');
  const [animationTriggered, setAnimationTriggered] = useState(false);
  
  const activeCategoryData = skills.find(cat => cat.category === activeCategory) || skills[0];
  
  const pieData = skills.map(category => ({
    name: category.category,
    value: getOverallProficiency(category),
    color: category.color
  }));

  useEffect(() => {
    // Reset animation state when category changes
    setAnimationTriggered(false);
    const timer = setTimeout(() => {
      setAnimationTriggered(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  return (
    <section id="skills" className="section py-20 bg-gradient-to-b from-white to-softBlue/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 text-4xl font-bold text-charcoal">Technical Expertise</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Card className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left side: Category selection */}
                <div className="bg-gradient-to-br from-softBlue/10 to-white p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-primary mb-6">Skill Categories</h3>
                  
                  <div className="space-y-3">
                    {skills.map((category) => {
                      const Icon = category.icon;
                      const isActive = activeCategory === category.category;
                      
                      return (
                        <button 
                          key={category.category}
                          className={`w-full group transition-all duration-300 p-4 rounded-lg flex items-center ${
                            isActive 
                              ? 'bg-primary text-white shadow-md' 
                              : 'bg-white/70 hover:bg-white hover:shadow-sm'
                          }`}
                          onClick={() => setActiveCategory(category.category)}
                        >
                          <div 
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                              isActive ? 'bg-white/20' : 'bg-opacity-20 group-hover:scale-110'
                            }`}
                            style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : `${category.color}20` }}
                          >
                            <Icon size={20} color={isActive ? "white" : category.color} />
                          </div>
                          <span className={`font-medium ${isActive ? 'text-white' : 'text-charcoal'}`}>
                            {category.category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Chart visualization */}
                  <div className="mt-8 h-[180px] hidden lg:block">
                    <h4 className="text-sm font-medium text-charcoal/70 mb-2">Overall Proficiency</h4>
                    <div style={{ width: '100%', height: '180px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={70}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                {/* Right side: Skills detail */}
                <div className="p-6 lg:p-8 col-span-2">
                  <div className={`${animationTriggered ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                      {React.createElement(activeCategoryData.icon, { color: activeCategoryData.color, size: 24, className: "mr-3" })}
                      {activeCategory} Proficiency
                    </h3>
                    
                    <div className="space-y-8">
                      {activeCategoryData.items.map((skill, idx) => (
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
                              value={animationTriggered ? skill.proficiency : 0} 
                              className="h-3 rounded-full bg-softBlue/30"
                              style={{
                                transition: "all 1.2s ease-out",
                              }}
                            />
                            <div 
                              className="absolute top-0 h-3 rounded-full"
                              style={{ 
                                width: animationTriggered ? `${skill.proficiency}%` : '0%',
                                backgroundColor: activeCategoryData.color,
                                transition: "width 1.2s ease-out"
                              }}
                            />
                          </div>
                          
                          {/* Skill level indicators */}
                          <div className="mt-1 flex justify-between">
                            <span className="text-xs text-charcoal/60">Beginner</span>
                            <span className="text-xs text-charcoal/60">Intermediate</span>
                            <span className="text-xs text-charcoal/60">Expert</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-5 rounded-lg border border-softBlue/30 bg-gradient-to-r from-white to-softBlue/10">
                      <h4 className="font-medium text-primary mb-2 flex items-center">
                        <LineChart className="mr-2 h-4 w-4" /> 
                        Using {activeCategory} in my projects:
                      </h4>
                      <p className="text-charcoal/80">
                        I've applied these {activeCategory.toLowerCase()} skills across various projects, 
                        focusing on writing clean, maintainable code and following industry best practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Mobile carousel for categories (only visible on mobile) */}
          <div className="block md:hidden mt-6">
            <Carousel className="w-full">
              <CarouselContent>
                {skills.map((category) => (
                  <CarouselItem key={category.category} className="md:basis-1/2 lg:basis-1/3">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        {React.createElement(category.icon, { color: category.color, size: 30, className: "mb-2" })}
                        <h3 className="font-medium text-center">{category.category}</h3>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
