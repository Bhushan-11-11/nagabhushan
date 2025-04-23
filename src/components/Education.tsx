
import { BookOpen, Award, Cloud, Palette, RefreshCw } from 'lucide-react';

const certifications = [
  {
    category: "Cloud Certifications",
    title: "AWS Cloud Foundations & Architecting",
    icon: Cloud,
    description: "A strong foundation in cloud computing, with hands-on experience in AWS services and infrastructure. These certifications demonstrate my ability to design secure, scalable, and reliable cloud solutions.",
    items: [
      {
        name: "AWS Academy Graduate – AWS Academy Cloud Foundations",
        details: "Covered the core concepts of cloud computing, global AWS infrastructure, security, billing, and foundational AWS services.",
        issuer: "Amazon Web Services",
        year: "2022"
      },
      {
        name: "AWS Academy Graduate – AWS Academy Cloud Architecting",
        details: "Focused on designing architectures using AWS services like EC2, S3, RDS, VPC, and IAM. Emphasized best practices for high availability, fault tolerance, and cost optimization.",
        issuer: "Amazon Web Services",
        year: "2023"
      }
    ],
    skills: ["AWS Core Services", "Cloud Architecture", "Security Best Practices", "Infrastructure Design", "Cost Optimization"]
  },
  {
    category: "UX Design Certification",
    title: "IBM UX Design Fundamentals",
    icon: Palette,
    description: "An introductory yet comprehensive look at user experience design from IBM. This certification equipped me with the foundational knowledge to create intuitive and user-friendly digital products.",
    items: [
      {
        name: "IBM Skill Build – User Experience Design Fundamentals",
        details: "Explored core UX principles including empathy mapping, journey mapping, wireframing, and usability testing. Learned how to build user-centric interfaces that align with business goals.",
        issuer: "IBM",
        year: "2023"
      }
    ],
    skills: ["User-Centered Design", "Wireframing", "Usability Testing", "Empathy Mapping", "UX Thinking"]
  },
  {
    category: "Agile Methodology Certification",
    title: "Agile Foundations with IBM",
    icon: RefreshCw,
    description: "A deep dive into the Agile mindset and methodologies. This certification from IBM introduced me to the values, principles, and frameworks that power modern software delivery teams.",
    items: [
      {
        name: "IBM Skill Build – IBM Agile Explorer",
        details: "Focused on Agile values, Scrum framework, roles (Scrum Master, Product Owner), sprints, and ceremonies. Learned how to foster collaboration and continuous delivery.",
        issuer: "IBM",
        year: "2023"
      }
    ],
    skills: ["Agile Methodologies", "Scrum Practices", "Team Roles", "Iterative Development", "Continuous Feedback"]
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education & Certifications</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
          {/* Education */}
          <div className="reveal">
            <div className="bg-softBlue/20 p-6 rounded-lg">
              <div className="flex items-center mb-6">
                <BookOpen size={28} className="text-primary mr-4" />
                <h3 className="text-xl font-bold text-charcoal">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary">Master of Science in Computer Science</h4>
                  <p className="text-charcoal/70">Montclair State University</p>
                  <p className="text-charcoal/60">January 2023 - December 2024</p>
                  <p className="mt-2 text-charcoal/70">
                    Focusing on advanced software development, data structures, algorithms, and cloud computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="reveal">
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-softBlue/20 p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <cert.icon size={28} className="text-primary mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{cert.category}</h3>
                      <p className="text-primary font-medium mt-1">{cert.title}</p>
                    </div>
                  </div>

                  <p className="text-charcoal/70 mb-4">{cert.description}</p>

                  <div className="space-y-4">
                    {cert.items.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-primary pl-4">
                        <h4 className="text-lg font-semibold text-primary">{item.name}</h4>
                        <p className="text-charcoal/70 text-sm mt-1">{item.details}</p>
                        <p className="text-charcoal/60 text-sm mt-1">
                          {item.issuer} · {item.year}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="text-primary font-medium text-sm mb-2">Skills Gained:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
