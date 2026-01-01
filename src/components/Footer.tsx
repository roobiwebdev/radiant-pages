import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="editorial-heading mb-4 text-2xl">Bodies by RS</h3>
            <p className="editorial-body mb-6 max-w-sm text-base leading-relaxed">
              Expert-led aesthetics and body contouring. Modern techniques, 
              thoughtful care, refined results.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/Bodiesbyrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-medium uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:Contact@bodiesbyrs.com"
                  className="flex items-start gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Contact@bodiesbyrs.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07752640385"
                  className="flex items-start gap-3 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>07752 640 385</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-sans text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    9 The Shrubberies, George Lane
                    <br />
                    South Woodford, London E18 1BD
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-medium uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#treatments"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Treatments
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book Consultation
                </a>
              </li>
              <li>
                <a
                  href="#finance"
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Finance Options
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bodies by RS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
