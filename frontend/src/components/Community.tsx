
import { Users, Twitter, Github, MessageCircle, Share2 } from "lucide-react";

const Community = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "Discord",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "#",
    },
  ];

  return (
    <section id="community" className="section-padding relative bg-web3-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-7 w-7 text-web3-accent mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our <span className="text-gradient">Community</span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Connect with other Metanet Desktop users, share ideas, and get the latest updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-white/70 mb-6">
              Follow us on social media for the latest news, updates, and community events.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2 transition-all duration-300 hover:scale-105"
                  aria-label={link.name}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-lg p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Share Metanet Desktop</h3>
            <p className="text-white/70 mb-6">
              Help us grow by sharing Metanet Desktop with your network.
            </p>
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-web3-accent to-web3-accent2 rounded-lg px-5 py-2 w-full justify-center text-white hover:opacity-90 transition-opacity"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }}
            >
              <Share2 className="h-5 w-5" />
              Copy Link
            </button>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="glass-card rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-6">
              Get the latest updates, tutorials, and news about Metanet Desktop delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-black/30 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-web3-accent/50 placeholder:text-white/40"
                required
              />
              <button
                type="submit"
                className="primary-button whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
