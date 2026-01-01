import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <a href="/" className="editorial-heading text-xl md:text-2xl">
          Bodies by RS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#treatments"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Treatments
          </a>
          <a
            href="#about"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <Button variant="editorial" size="default" asChild>
            <a href="https://bodiesbyrs.as.me/schedule/5732e964" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-20 bg-background/98 backdrop-blur-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            <a
              href="#treatments"
              className="font-sans text-lg text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Treatments
            </a>
            <a
              href="#about"
              className="font-sans text-lg text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="font-sans text-lg text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              variant="editorial"
              size="editorial"
              className="mt-4 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
              asChild
            >
              <a href="https://bodiesbyrs.as.me/schedule/5732e964" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
