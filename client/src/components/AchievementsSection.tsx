import { motion } from "framer-motion";
import { FaMedal, FaMicrosoft, FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/data/cvData";

const AchievementCard = ({ 
  achievement, 
  index 
}: { 
  achievement: typeof cvData.achievements[0]; 
  index: number 
}) => (
  <motion.div 
    className="bg-card rounded-xl border border-gray-800 shadow-lg overflow-hidden hover:border-primary transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">
          {achievement.title === "Microsoft Student Ambassador" ? (
            <div className="flex items-center">
              <FaMicrosoft className="text-primary mr-2" />
              {achievement.title}
            </div>
          ) : (
            <div className="flex items-center">
              <FaLaptopCode className="text-primary mr-2" />
              {achievement.title}
            </div>
          )}
        </h3>
        <Badge variant="outline" className="bg-background">
          {achievement.period}
        </Badge>
      </div>
      
      <p className="text-muted-foreground mb-4">
        {achievement.description}
      </p>
      
      <div className="space-y-2 mb-4">
        {achievement.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start">
            <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
            <p className="text-muted-foreground text-sm">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
    
    {'photos' in achievement && achievement.photos && (
      <div className="px-6 pb-6">
        <h4 className="font-medium mb-3 text-sm uppercase text-muted-foreground tracking-wider">
          Event Photos
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {achievement.photos.map((photo, i) => (
            <div key={i} className="relative h-20 bg-background rounded border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-xs">{photo}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2 italic">
          Hover over images to enlarge
        </p>
      </div>
    )}
  </motion.div>
);

const AchievementsSection = () => {
  const { achievements } = cvData;

  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Achievements & Leadership</h2>
          <p className="text-muted-foreground text-center">
            Beyond technical work, I've taken on leadership roles and contributed to the tech community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;