import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div 
            className="font-mono text-primary text-lg mb-2"
            style={{ textShadow: "0 0 5px rgba(0, 255, 170, 0.5), 0 0 10px rgba(0, 255, 170, 0.3)" }}
          >
            John Doe
          </div>
          <div className="text-muted-foreground text-sm">DevOps Engineer</div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-6">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="inline-flex items-center justify-center w-10 h-10 bg-secondary rounded-full hover:bg-primary/10 transition-colors duration-300 text-muted-foreground hover:text-primary"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
