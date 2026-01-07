import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "max-w-5xl rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] px-8"
            : "max-w-full bg-transparent px-6 lg:px-12"
        } flex items-center h-20`}
      >
        {/* Logo - Left */}
        <div className="flex-1 flex justify-start">
          <a 
            href="/" 
            className="flex items-baseline gap-1.5 transition-all hover:opacity-80 active:scale-95 group"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              BODIES
            </span>
            <span className="font-serif text-lg md:text-xl italic font-medium text-foreground">
              by
            </span>
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary transition-colors group-hover:text-foreground">
              RS
            </span>
          </a>
        </div>

        {/* Navigation - Center */}
        <nav className="hidden md:flex flex-none items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-widest uppercase transition-all hover:text-primary relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle - Right */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          <Button
            variant="editorial"
            size="default"
            className="hidden md:inline-flex shadow-sm hover:shadow-md cursor-pointer transition-shadow"
            asChild
          >
            <a href="https://bodiesbyrs.as.me/schedule/5732e964" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center md:hidden text-foreground hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-full mt-2 mx-4 md:hidden overflow-hidden rounded-3xl bg-background/95 backdrop-blur-2xl border border-border/50 shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            <div className="px-8 py-10 flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors flex justify-between items-center group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <span className="w-10 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="editorial"
                  size="editorial"
                  className="mt-4 w-full text-lg h-14"
                  onClick={() => setIsMobileMenuOpen(false)}
                  asChild
                >
                  <a href="https://bodiesbyrs.as.me/schedule/5732e964" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
