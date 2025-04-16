import { motion } from "framer-motion";
import { 
  FaGraduationCap, 
  FaCertificate, 
  FaAws, 
  FaLinux, 
  FaGoogle, 
  FaShieldAlt, 
  FaDocker 
} from "react-icons/fa";
import { cvData } from "@/data/cvData";

const EducationSection = () => {
  const { education, certifications } = cvData;

  const iconMap: Record<string, React.ReactNode> = {
    "aws": <FaAws />,
    "linux": <FaLinux />,
    "google": <FaGoogle />,
    "hashicorp": <FaShieldAlt />,
    "docker": <FaDocker />,
  };

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Education & Certifications</h2>
          <p className="text-muted-foreground text-center">
            My academic background and professional certifications that support my DevOps expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <span className="bg-background px-3 py-1 rounded-full text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaCertificate className="mr-3 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-card p-5 rounded-xl border border-gray-800 hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="text-xl text-primary mr-4">
                        {iconMap[cert.icon]}
                      </div>
                      <div>
                        <h4 className="font-bold">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
