
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Chat Application',
    description: 'A real-time chat application powered by AI that can understand natural language and provide helpful responses to users.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['React', 'Node.js', 'TensorFlow', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Next.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard that displays complex data sets in an intuitive and visually appealing way using charts and graphs.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['D3.js', 'React', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first application that helps users track their workouts, set fitness goals, and monitor their progress over time.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Smart Home System',
    description: 'An IoT system that connects various smart devices and allows users to control them through a centralized web interface.',
    image: 'https://images.unsplash.com/photo-1581092921461-39b10bc4bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Python', 'MQTT', 'React', 'Raspberry Pi'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card reveal">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
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
              
              <CardContent>
                <p className="text-charcoal/70">{project.description}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between">
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
