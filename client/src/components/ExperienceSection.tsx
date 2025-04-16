import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { cvData } from "@/data/cvData";

const ExperienceItem = ({ 
  experience, 
  index 
}: { 
  experience: typeof cvData.experiences[0]; 
  index: number 
}) => (
  <motion.div 
    className="mb-12 relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
  >
    <div className="absolute left-0 w-3.5 h-3.5 rounded-full bg-primary" style={{ top: "24px", left: "-1.75rem", boxShadow: "0 0 10px rgba(0, 255, 170, 0.7)" }}></div>
    <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-primary font-semibold">{experience.company}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="bg-background px-3 py-1 rounded-full text-sm text-muted-foreground font-mono">
            {experience.period}
          </span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">
        {experience.description}
      </p>
      <div className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <div key={i} className="flex items-start">
            <FaCheckCircle className="text-primary mt-1 mr-2" />
            <p className="text-muted-foreground">{achievement}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-background rounded-full text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const { experiences } = cvData;

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
          <p className="text-muted-foreground text-center">
            My professional journey building and managing DevOps solutions for organizations of various sizes.
          </p>
        </motion.div>
        
        <div className="timeline-container relative max-w-4xl mx-auto pl-12 md:pl-16">
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gray-700" style={{ left: "7px" }}></div>
          
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={index} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
