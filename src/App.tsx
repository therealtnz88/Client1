import React, { useState } from 'react';
import { Bot, MessageSquare, Database, Zap, ChevronRight, ArrowRight, LineChart, Shield } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl glass-effect hover:border-indigo-500/50 transition-all duration-500 group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-xl font-medium text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-[17px] text-gray-400 leading-relaxed font-light">{description}</p>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-all duration-300 text-[17px]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          className={inputClasses}
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={4}
          className={inputClasses}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 glow-effect text-[17px]"
      >
        <span>Send Message</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-6xl lg:text-7xl font-medium leading-tight tracking-tight">
                Transform Your Business with
                <span className="gradient-text block">EAGLE.AI</span>
              </h1>
              <p className="text-[21px] text-gray-300 leading-relaxed font-light">
                Harness the power of AI to automate lead generation and seamlessly integrate with your CRM system.
              </p>
              <div className="flex items-center space-x-6">
                <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 glow-effect text-[17px]">
                  <span>Book A Call</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-lg glass-effect hover:border-indigo-500/50 transition-all duration-300 text-[17px] font-light">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] pulse-effect">
                <div className="w-full h-full rounded-2xl glass-effect flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-purple-900/20 to-transparent"></div>
                  <Bot className="w-40 h-40 text-indigo-400 float-effect relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-32">
        <h2 className="text-5xl font-medium text-center mb-20 tracking-tight">
          Powerful Features for Your <span className="gradient-text">Business Growth</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={Bot}
            title="AI-Powered Chatbots"
            description="Engage visitors 24/7 with intelligent conversations that convert."
          />
          <FeatureCard
            icon={MessageSquare}
            title="Smart Lead Generation"
            description="Automatically qualify and nurture leads through natural conversations."
          />
          <FeatureCard
            icon={Database}
            title="CRM Integration"
            description="Seamlessly sync data with your existing CRM systems."
          />
          <FeatureCard
            icon={LineChart}
            title="Analytics Dashboard"
            description="Track performance and optimize conversations in real-time."
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade encryption and data protection protocols."
          />
          <FeatureCard
            icon={Zap}
            title="Quick Implementation"
            description="Get started in minutes with our no-code setup process."
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-medium mb-8 tracking-tight">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-[21px] text-gray-300 mb-16 leading-relaxed font-light">
            Schedule a call with our experts and discover how EAGLE.AI can revolutionize your customer engagement.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;