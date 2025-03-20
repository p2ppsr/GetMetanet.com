
import { Globe, Lock, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-web3-accent" />,
      title: "Universal Compatibility & Interoperability",
      description: "Built on the vendor-neutral BRC-100 wallet standard, Metanet Desktop effortlessly interacts with any BSV dApp, exchange, marketplace, or blockchain application. Complies fully with the open BRC-100 Wallet Interface, ensuring compatibility with all compliant wallets and apps in the BSV ecosystem.",
    },
    {
      icon: <Lock className="h-8 w-8 text-web3-accent" />,
      title: "Security & Privilege Management",
      description: "Sophisticated key derivation, robust cryptographic signatures, secure encryption, and strict access permissions safeguard your identity and assets.",
    },
    {
      icon: <User className="h-8 w-8 text-web3-accent" />,
      title: "Decentralized Identity",
      description: "Leverage cryptographic identity certificates for selective data revelation. Manage identity securely and privately without centralized liabilities.",
    },
  ];

  return (
    <section id="features" className="section-padding relative bg-gradient-to-b from-web3-dark to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-gradient absolute inset-0"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful</span> Features
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Metanet Desktop provides all the tools you need to interact with the blockchain efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-white/10 group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-gradient-to-br group-hover:from-web3-accent/20 group-hover:to-web3-accent2/20 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-web3-accent transition-colors duration-300">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="glass-card rounded-lg p-8 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Unleash the Full Potential of <span className="text-gradient">BSV Blockchain</span>
                </h3>
                <p className="text-white/70 mb-6">
                  Metanet Desktop combines powerful features with a user-friendly interface, allowing both beginners and experts to take full advantage of blockchain technology.
                </p>
                <ul className="space-y-3">
                  {[
                    "Action-Oriented Transactions with transparent controls and rich metadata",
                    "Robust Cryptography using AES-256-GCM encryption and ECDSA signatures",
                    "Identity & Certificate Manager for selective data revelation",
                    "SPV and Scalability with BEEF blockchain data standards",
                    "Auditable Proofs & Key Linkages for enhanced privacy",
                    "Flexible Asset & Key Permissions through named baskets",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1 text-web3-accent">✓</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg relative overflow-hidden animate-float">
                  <img
                    src="/trust-network.png"  // Replace with your image path or URL
                    alt="Interactive Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-web3-accent/20 to-web3-accent2/20 rounded-lg blur-md -z-10"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
