
import { FileText, HelpCircle, MessageSquare } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      icon: <FileText className="h-6 w-6 text-web3-accent" />,
      title: "User Guides",
      description: "Comprehensive documentation to help you get the most out of Metanet Desktop.",
      link: "#",
      linkText: "View Documentation",
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-web3-accent" />,
      title: "FAQs",
      description: "Find answers to commonly asked questions about Metanet Desktop.",
      link: "#",
      linkText: "Browse FAQs",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-web3-accent" />,
      title: "Support",
      description: "Need help? Our support team is ready to assist you.",
      link: "#",
      linkText: "Contact Support",
    },
  ];

  const faqs = [
    {
      question: "What is Metanet Desktop?",
      answer: "Metanet Desktop is an application that allows users to interact with the BSV blockchain, providing tools for browsing blockchain data, uploading files, managing digital identities, and integrating with other blockchain applications."
    },
    {
      question: "Is Metanet Desktop free to use?",
      answer: "Yes, Metanet Desktop is free to download and use. Some advanced features may require additional payment or subscription."
    },
    {
      question: "How secure is my data with Metanet Desktop?",
      answer: "Metanet Desktop implements industry-standard security practices to protect your data. Your private keys never leave your device, and all sensitive information is encrypted."
    },
    {
      question: "Can I use Metanet Desktop on multiple devices?",
      answer: "Yes, you can install Metanet Desktop on multiple devices. Your data can be synchronized across devices if you enable this feature."
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: "You can report bugs or suggest features through our GitHub repository or by contacting our support team directly."
    }
  ];

  return (
    <section id="resources" className="section-padding relative bg-gradient-to-b from-black to-web3-dark">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-gradient absolute inset-0"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            User <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to master Metanet Desktop and make the most of its features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-white/70 mb-6 flex-grow">{resource.description}</p>
              <a
                href={resource.link}
                className="text-web3-accent hover:text-web3-accent2 transition-colors flex items-center"
              >
                <span>{resource.linkText}</span>
                <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <h4 className="text-lg font-medium text-web3-accent mb-2">{faq.question}</h4>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
