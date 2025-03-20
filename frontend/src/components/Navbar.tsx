
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts to prevent flash
    setIsLoaded(true);

    // Throttled scroll handler for better performance
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Download", href: "#download" },
  ];

  // Only render when loaded to prevent flash
  if (!isLoaded) {
    return (
      <header className="fixed top-0 z-50 w-full h-20 bg-black/60 backdrop-blur-lg"></header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-black/60 backdrop-blur-lg shadow-lg" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                <span className="text-gradient">Metanet</span> Desktop
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-web3-accent link-hover"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <a
              href="#download"
              className="primary-button"
            >
              Download Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-web3-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav - using transform instead of display for smoother animations */}
      <div
        className={cn(
          "fixed inset-0 z-40 transform bg-black/90 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-medium text-white hover:text-web3-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#download"
            onClick={closeMenu}
            className="primary-button mt-4"
          >
            Download Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
