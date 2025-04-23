
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, BarChart, Users } from 'lucide-react';

const projects = [
  {
    title: 'Smart Student Attendance System',
    description: 'A full-cycle HCI project for academic attendance tracking with role-based dashboards, QR/biometric attendance, real-time notifications, and analytics. Built using iterative prototyping and user testing.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Figma', 'Python', 'React.js', 'MySQL', 'Firebase', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: Users,
    outcome: 'Delivered a working prototype that significantly improves user experience for attendance tracking.'
  },
  {
    title: 'Human vs AI Code Analysis',
    description: 'Research project analyzing code quality differences between AI-generated and human-written code using SonarQube. Evaluated 60 code samples for bug density, maintainability, reliability, and code duplications.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['SonarQube', 'GitHub', 'ChatGPT', 'GitHub Copilot', 'Java', 'Python'],
    github: 'https://github.com',
    demo: 'https://example.com',
    icon: BarChart,
    outcome: 'Provided key insights into AI coding strengths and limitations, supporting future hybrid development research.'
  },
  {
    title: 'Education & Employment Portal',
    description: 'A comprehensive portal connecting students and employers. Features include secure login, real-time job/course listings, and event planning tools.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['HTML', 'CSS', 'PHP', 'SQL', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://example.com',
    outcome: 'Increased engagement by 20% with faster performance.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card reveal flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2">
                  {project.icon && <project.icon className="h-5 w-5 text-primary" />}
                  <CardTitle>{project.title}</CardTitle>
                </div>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="bg-softBlue/50 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-charcoal/70 mb-4">{project.description}</p>
                {project.outcome && (
                  <p className="text-primary font-medium text-sm">
                    Outcome: {project.outcome}
                  </p>
                )}
              </CardContent>
              
              <CardFooter className="flex justify-between mt-auto">
                <Button asChild variant="outline" size="sm" className="flex items-center gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
