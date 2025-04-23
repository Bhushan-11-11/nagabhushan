import { BookOpen, Award, Cloud, Palette, RefreshCw } from 'lucide-react';

const coursework = {
  title: "Graduate-Level Mastery in Core Computer Science Subjects",
  description: "As part of my Master's in Computer Science at Montclair State University, I gained hands-on experience and deep theoretical understanding across a broad range of technical subjects. These courses laid the foundation for both my academic growth and practical skillset in software development, system design, and data-driven computing.",
  subjects: [
    {
      name: "Software Engineering",
      details: "Lifecycle models, version control, team collaboration, and design patterns"
    },
    {
      name: "Human-Computer Interaction (HCI)",
      details: "Usability principles, user research, prototyping, and interface design"
    },
    {
      name: "Computer Forensics",
      details: "Digital evidence analysis, data recovery, and cybercrime investigation"
    },
    {
      name: "Computer Architecture",
      details: "CPU design, memory management, and hardware-software integration"
    },
    {
      name: "Database Systems",
      details: "SQL, relational modeling, normalization, and transaction management"
    },
    {
      name: "Algorithms and Analysis",
      details: "Time complexity, sorting, searching, dynamic programming"
    },
    {
      name: "Operating Systems",
      details: "Process scheduling, concurrency, memory and file systems"
    },
    {
      name: "Python for Data Science",
      details: "Data wrangling, visualization, NumPy, Pandas, and machine learning basics"
    }
  ],
  skills: [
    "System Design",
    "UX/UI Principles",
    "Python Programming",
    "Data Analysis",
    "Cybersecurity",
    "SQL",
    "OS Internals",
    "Algorithm Optimization"
  ]
};

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
                  
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-primary mb-3">{coursework.title}</h5>
                    <p className="text-charcoal/70 mb-4">{coursework.description}</p>
                    
                    <div className="space-y-4">
                      <h6 className="font-semibold text-primary">Subjects Mastered:</h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coursework.subjects.map((subject, idx) => (
                          <div key={idx} className="border-l-2 border-primary pl-4">
                            <h6 className="font-semibold text-charcoal">{subject.name}</h6>
                            <p className="text-charcoal/70 text-sm">{subject.details}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <h6 className="font-semibold text-primary mb-2">Skills Gained:</h6>
                        <div className="flex flex-wrap gap-2">
                          {coursework.skills.map((skill, idx) => (
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
                  </div>
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
