import { motion } from "framer-motion";
import {
  FaCloud,
  FaCube,
  FaCogs,
  FaShieldAlt,
  FaStar,
  FaStarHalf,
  FaRegStar
} from "react-icons/fa";
import { cvData } from "@/data/cvData";

type SkillType = {
  name: string;
  level: string;
};

const SkillLevel = ({ skill }: { skill: SkillType }) => {
  // Map level to stars/visualization
  const renderLevelIndicator = () => {
    switch(skill.level) {
      case 'expert':
        return (
          <div className="flex text-primary">
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
          </div>
        );
      case 'advanced':
        return (
          <div className="flex text-primary">
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaStarHalf className="mr-1" />
          </div>
        );
      case 'intermediate':
        return (
          <div className="flex text-primary">
            <FaStar className="mr-1" />
            <FaStar className="mr-1" />
            <FaRegStar className="mr-1" />
          </div>
        );
      case 'beginner':
      default:
        return (
          <div className="flex text-primary">
            <FaStar className="mr-1" />
            <FaRegStar className="mr-1" />
            <FaRegStar className="mr-1" />
          </div>
        );
    }
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="font-medium">{skill.name}</span>
      <div className="flex items-center">
        <span className="text-sm text-muted-foreground mr-2 capitalize">
          {skill.level}
        </span>
        {renderLevelIndicator()}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { cloudSkills, containerSkills, cicdSkills, monitoringSkills, additionalSkills } = cvData.skills;

  return (
    <section id="skills" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-muted-foreground text-center">
            My growing toolkit of DevOps technologies that I'm actively learning to build efficient and reliable infrastructure solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cloud & Infrastructure */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaCloud className="mr-3 text-primary" />
              Cloud & Infrastructure
            </h3>
            <div className="space-y-4">
              {cloudSkills.map((skill) => (
                <SkillLevel key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          {/* Container & Orchestration */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaCube className="mr-3 text-primary" />
              Containers & Orchestration
            </h3>
            <div className="space-y-4">
              {containerSkills.map((skill) => (
                <SkillLevel key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          {/* CI/CD & Automation */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaCogs className="mr-3 text-primary" />
              CI/CD & Automation
            </h3>
            <div className="space-y-4">
              {cicdSkills.map((skill) => (
                <SkillLevel key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
          
          {/* Monitoring & Security */}
          <motion.div
            className="bg-card rounded-xl p-6 border border-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaShieldAlt className="mr-3 text-primary" />
              Monitoring & Security
            </h3>
            <div className="space-y-4">
              {monitoringSkills.map((skill) => (
                <SkillLevel key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills Tags */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background rounded-full border border-gray-700 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
