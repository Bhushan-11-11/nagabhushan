
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card reveal flex flex-col">
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
        
        {project.features && (
          <div className="mb-4">
            <p className="text-primary font-medium text-sm mb-2">Key Features:</p>
            <ul className="list-disc list-inside text-charcoal/70 text-sm">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
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
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
