import { motion } from "framer-motion";
import { useState } from "react";
import { FaImage, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { cvData } from "@/data/cvData";

type GalleryItemType = typeof cvData.gallery[0];

const GalleryItem = ({ 
  item, 
  index,
  onItemClick
}: { 
  item: GalleryItemType;
  index: number;
  onItemClick: (item: GalleryItemType) => void;
}) => (
  <motion.div 
    className="bg-card rounded-xl overflow-hidden border border-gray-800 shadow-lg cursor-pointer hover:border-primary transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
    onClick={() => onItemClick(item)}
  >
    <div className="h-48 relative bg-background">
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <FaImage className="text-4xl mx-auto mb-2 text-gray-700" />
          <span className="text-xs">{item.image}</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center text-xs text-muted-foreground mb-2">
        <FaCalendarAlt className="mr-1" />
        {item.date}
      </div>
      <h3 className="font-semibold mb-1">{item.title}</h3>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  </motion.div>
);

const GalleryModal = ({ 
  item, 
  onClose 
}: { 
  item: GalleryItemType | null;
  onClose: () => void;
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
      <motion.div 
        className="bg-card rounded-xl overflow-hidden max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        <div className="h-80 relative bg-background">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <FaImage className="text-6xl mx-auto mb-2 text-gray-700" />
              <span className="text-sm">{item.image}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <FaCalendarAlt className="mr-2" />
            {item.date}
          </div>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <p className="text-xs text-muted-foreground italic">
            In a real implementation, this would display the actual image with high resolution.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const GallerySection = () => {
  const { gallery } = cvData;
  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(null);

  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Photo Gallery</h2>
          <p className="text-muted-foreground text-center">
            A visual journey through my DevOps learning experiences, events, and activities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <GalleryItem 
              key={index} 
              item={item} 
              index={index} 
              onItemClick={setSelectedItem}
            />
          ))}
        </div>

        {selectedItem && (
          <GalleryModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;