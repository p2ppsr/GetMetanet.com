
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  // Improved animation approach with better performance
  useEffect(() => {
    // Using requestAnimationFrame for better performance
    const animateElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Only animate once
            if (entry.isIntersecting && !entry.target.classList.contains('has-animated')) {
              entry.target.classList.add('has-animated');
              
              // Apply appropriate animation class based on the element's data attribute
              if (entry.target.getAttribute('data-animation') === 'fade-in') {
                entry.target.classList.add('fade-in-normal');
              } else {
                entry.target.classList.add('slide-up-normal');
              }
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );

      // Observe all sections except hero
      document.querySelectorAll("section:not(#hero)").forEach((section) => {
        observer.observe(section);
      });
      
      // Observe individual elements with animation classes
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
      });
    };

    // Wait until the page is fully loaded to start animations
    if (document.readyState === 'complete') {
      animateElements();
    } else {
      window.addEventListener('load', animateElements);
      return () => window.removeEventListener('load', animateElements);
    }

    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-web3-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
