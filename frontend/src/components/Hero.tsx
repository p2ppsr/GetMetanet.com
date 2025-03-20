
import { useEffect, useRef } from "react";
import { Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Throttled mouse move handler for better performance
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && overlayRef.current) {
        window.requestAnimationFrame(() => {
          if (!overlayRef.current) return;

          const x = e.clientX / window.innerWidth;
          const y = e.clientY / window.innerHeight;

          overlayRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-web3-dark">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(51,195,240,0.1)_0,rgba(139,92,246,0.1)_25%,rgba(0,0,0,0)_50%)]"></div>
        <div
          ref={overlayRef}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.4), transparent 30%), radial-gradient(circle at 70% 30%, rgba(51, 195, 240, 0.4), transparent 30%)",
            backgroundSize: "100% 100%",
            transition: "transform 0.3s ease-out",
            willChange: "transform"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block fade-in-fast">
            <div className="rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-web3-accent">Blockchain Simplified</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight fade-in-normal">
            <span className="text-gradient text-glow">Metanet Desktop</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto fade-in-delayed">
            Your Gateway to the BSV Blockchain
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 slide-up-fast">
            <a href="#download" className="primary-button flex items-center gap-2 w-full sm:w-auto">
              <Download size={18} />
              Download Now
            </a>
            <a href="#features" className="secondary-button flex items-center gap-2 w-full sm:w-auto">
              Learn More
            </a>
          </div>
        </div>

        {/* 3D visualization mockup */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto slide-up-normal">
          <div className="relative">
            <div
              className="relative z-10 glass-card rounded-lg overflow-hidden shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite", willChange: "transform" }}
            >
              <div className="aspect-[16/9] bg-gradient-to-b from-web3-dark to-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm shadow-lg flex items-center justify-center">
                    <img
                      src="/desktop.png"
                      alt="Metanet Desktop UI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-8 bg-black/30 backdrop-blur-sm flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-web3-accent/30 to-web3-accent2/30 rounded-lg blur opacity-50 -z-10"></div>
          </div>
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center slide-up-delayed">
        <a href="#features" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
