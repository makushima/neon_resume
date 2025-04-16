import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const TerminalText = ({ text }: { text: string }) => {
  return (
    <span className="relative after:content-['|'] after:ml-1 after:animate-[blink_1s_step-end_infinite] after:text-[#4ADE80]">
      {text}
    </span>
  );
};

const HeroSection = () => {
  return (
    <header id="about" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-foreground">
                  John Doe
                </h1>
                <h2 
                  className="text-2xl md:text-3xl font-semibold mb-2 text-primary"
                  style={{ textShadow: "0 0 5px rgba(0, 255, 170, 0.5), 0 0 10px rgba(0, 255, 170, 0.3)" }}
                >
                  Junior DevOps Engineer
                </h2>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-3 py-1 bg-background text-primary text-sm font-semibold rounded-full border border-primary">
                    Microsoft Student Ambassador
                  </span>
                </div>
                <p className="text-lg text-muted-foreground font-mono mb-6">
                  <TerminalText text="Learning to build resilient infrastructure" />
                </p>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enthusiastic Junior DevOps Engineer with a growing knowledge of cloud technologies, containerization, and automation.
                Passionate about modern deployment techniques and building scalable, reliable systems.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
                  style={{ boxShadow: "0 0 5px rgba(0, 255, 170, 0.5), 0 0 10px rgba(0, 255, 170, 0.3)" }}
                >
                  <a href="#contact">Contact Me</a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300"
                >
                  <a href="/api/download-cv" download>Download CV</a> <FaDownload className="ml-2" />
                </Button>
              </div>
              
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <FaGithub className="text-xl" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
              <div className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-secondary bg-muted"></div>
              <div className="absolute -bottom-4 -right-4 bg-secondary px-4 py-2 rounded-lg border border-gray-700">
                <div className="font-mono text-green-400 text-sm">
                  1+ year of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
