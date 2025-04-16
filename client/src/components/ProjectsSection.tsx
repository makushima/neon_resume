import { motion } from "framer-motion";
import { FaCog, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { cvData } from "@/data/cvData";
import TerminalDisplay from "./TerminalDisplay";

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: typeof cvData.projects[0]; 
  index: number 
}) => (
  <motion.div 
    className="bg-card rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-primary transition-all duration-300 flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
  >
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4">
        {project.description}
      </p>
      <div className="space-y-2 mb-4">
        {project.features.map((feature, i) => (
          <div key={i} className="flex items-start">
            <FaCog className="text-primary mt-1 mr-2" />
            <p className="text-muted-foreground text-sm">{feature}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-background rounded text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="px-6 py-4 bg-background border-t border-gray-800 flex justify-between items-center">
      <div className="font-mono text-sm text-green-400">
        <FaCodeBranch className="inline mr-1" /> {project.commits} commits
      </div>
      <a href={project.link} className="text-primary hover:text-green-400 transition-colors duration-300">
        <FaExternalLinkAlt />
      </a>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const { projects } = cvData;

  return (
    <section id="projects" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-muted-foreground text-center">
            Showcasing some of my key contributions to infrastructure and automation projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Terminal Display */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TerminalDisplay />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
