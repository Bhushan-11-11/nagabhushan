
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Education & Employment Portal',
    description: 'A comprehensive portal connecting students and employers. Features include secure login, real-time job/course listings, and event planning tools. Increased engagement by 20% with faster performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['HTML', 'CSS', 'PHP', 'SQL', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'High School Alumni Website',
    description: 'A platform connecting alumni with event updates, secure login, and fast database queries. Implemented using modern web technologies resulting in a 30% increase in alumni interaction.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'AJAX', 'Firebase'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio showcasing my projects and skills. Features GitHub API integration and modern UI/UX design principles implemented with React and JavaScript.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
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
