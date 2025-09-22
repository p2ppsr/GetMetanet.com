
import { MonitorSmartphone, Apple, Smartphone, ExternalLink } from "lucide-react";

const Download = () => {
  const mobileApps = [
    {
      name: "iOS TestFlight Beta",
      icon: <Apple className="h-6 w-6" />,
      description: "Install the Metanet Mobile browser on your iPhone via Apple's TestFlight program.",
      buttonText: "Join TestFlight",
      downloadUrl: "https://testflight.apple.com/join/K3jmxevG",
    },
    {
      name: "Android APK",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Side-load the latest Metanet Mobile APK to explore the BSV web on Android devices.",
      buttonText: "Download Android APK",
      downloadUrl: "https://getmetanet.com/android.apk",
    },
  ];

  return (
    <section id="download" className="section-padding relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(51,195,240,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_40%)]"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Get on the Metanet</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the experience that fits your device and keep your BSV identity with you on desktop and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 max-w-5xl mx-auto">
          <div
            id="desktop"
            className="glass-card rounded-lg p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:bg-white/10"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <MonitorSmartphone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Metanet Desktop Browser</h3>
              <p className="text-white/70 mb-6">
                Launch the latest web-native Metanet experience directly in your desktop browser. No installation required—just sign in and start browsing the BSV internet.
              </p>
            </div>
            <a
              href="https://desktop.bsvb.tech"
              className="primary-button w-full flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Desktop Browser
              <ExternalLink size={16} />
            </a>
          </div>

          <div id="mobile" className="space-y-6">
            {mobileApps.map((platform) => (
              <div
                key={platform.name}
                className="glass-card rounded-lg p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:bg-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                    <span className="text-xs uppercase tracking-wide text-white/60">Early Access</span>
                  </div>
                </div>
                <p className="text-sm text-white/70 mb-6">{platform.description}</p>
                <a
                  href={platform.downloadUrl}
                  className="primary-button w-full flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.buttonText}
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass-card rounded-lg p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Getting started is simple</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-3">Desktop Browser</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Open the Metanet Desktop web app in your preferred browser.</li>
                <li>Sign in with your existing identity or create a new one.</li>
                <li>Start transacting, building, and browsing on the BSV internet.</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-3">iOS TestFlight</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Install the TestFlight app from the App Store.</li>
                <li>Tap the "Join TestFlight" button above to accept the Metanet invite.</li>
                <li>Install Metanet Mobile from TestFlight and enable notifications for updates.</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-medium text-web3-accent mb-3">Android APK</h4>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Download the APK using the button above on your Android device.</li>
                <li>Approve installs from your browser when prompted by Android.</li>
                <li>Open Metanet Mobile and connect to the BSV-powered web.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
