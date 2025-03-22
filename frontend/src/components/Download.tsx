
import { Monitor, Apple, Terminal, Clock } from "lucide-react";
import { toast } from "sonner";

const Download = () => {
  const platforms = [
    {
      name: "Windows",
      icon: <Monitor className="h-6 w-6" />,
      version: "v1.2.0",
      requirementsText: "Windows 10 or later",
      buttonText: "Download for Windows",
      downloadUrl: "#",
      isComingSoon: true
    },
    {
      name: "macOS",
      icon: <Apple className="h-6 w-6" />,
      version: "v1.2.0",
      requirementsText: "macOS 11.0 or later",
      buttonText: "Download for Mac",
      downloadUrl: "/Metanet Desktop.dmg",
      isComingSoon: false
    },
    {
      name: "Linux",
      icon: <Terminal className="h-6 w-6" />,
      version: "v1.2.0",
      requirementsText: "Ubuntu 20.04 or equivalent",
      buttonText: "Download for Linux",
      downloadUrl: "/metanet_desktop-x86_64.AppImage",
      isComingSoon: false
    },
  ];

  const handleDownloadClick = (platform: typeof platforms[0], e: React.MouseEvent) => {
    if (platform.isComingSoon) {
      e.preventDefault();
      toast(`${platform.name} version coming soon`, {
        description: "We're working hard to bring Metanet Desktop to this platform.",
        icon: <Clock className="h-5 w-5" />,
        duration: 3000,
      });
    }
  };

  return (
    <section id="download" className="section-padding relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(51,195,240,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_40%)]"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Get Started</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Download Metanet Desktop for your preferred platform and start exploring the blockchain today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="glass-card rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:bg-white/10 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                {platform.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <span className="text-sm text-web3-accent/80 mb-4">{platform.version}</span>
              <p className="text-sm text-white/60 mb-6">{platform.requirementsText}</p>
              <a
                href={platform.downloadUrl}
                className="primary-button w-full"
                onClick={(e) => handleDownloadClick(platform, e)}
              >
                {platform.buttonText}
                {platform.isComingSoon && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">Soon</span>
                )}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Installation Guide</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-2">Windows</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Coming soon! Stay tuned for the Windows version.</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-2">macOS</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Download the macOS .dmg file from the link above.</li>
                <li>Open the .dmg file and drag Metanet Desktop to your Applications folder.</li>
                <li>Launch Metanet Desktop from your Applications folder.</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-2">Linux</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>
                  Download the <code>metanet_desktop-x86_64.AppImage</code> file from the link above.
                </li>
                <li>
                  Make it executable: <code>chmod +x metanet_desktop-x86_64.AppImage</code>
                </li>
                <li>
                  Run the application: <code>./metanet_desktop-x86_64.AppImage</code>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
