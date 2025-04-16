import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full bg-opacity-80 backdrop-blur-md border-b border-gray-800 transition-all duration-300 ${
          scrolled ? "bg-background" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-primary" style={{ textShadow: "0 0 5px rgba(0, 255, 170, 0.5), 0 0 10px rgba(0, 255, 170, 0.3)" }}>
                John Doe
              </span>
              <span className="ml-2 text-sm font-mono text-muted-foreground">// DevOps Engineer</span>
            </div>
            <div className="hidden md:flex space-x-8 text-muted-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <button
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 left-0 right-0 bg-secondary bg-opacity-95 backdrop-blur-md shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4 text-muted-foreground">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="py-2 hover:text-primary transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
