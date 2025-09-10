import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Star,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ConsultPro</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Results</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-sm hover:shadow-md">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Results</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Business with 
            <span className="text-blue-600 block">Expert Consulting</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            We help ambitious companies achieve breakthrough results through proven strategies, 
            data-driven insights, and personalized consulting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-lg font-semibold">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive roadmaps that align your team and drive sustainable growth through proven methodologies."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Leverage data-driven insights to identify opportunities and optimize your operations for maximum efficiency."
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Build high-performing teams and develop leadership capabilities that drive organizational excellence."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Modernize your processes and technology stack to stay competitive in today's digital landscape."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate potential risks while building resilient systems for long-term success."
    },
    {
      icon: Award,
      title: "Process Optimization",
      description: "Streamline workflows and implement best practices to enhance productivity and quality outcomes."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive consulting solutions designed to address your unique challenges 
            and accelerate your path to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const logos = [
    { name: "TechCorp", width: "w-32" },
    { name: "InnovateCo", width: "w-28" },
    { name: "GlobalTech", width: "w-36" },
    { name: "FutureSoft", width: "w-30" },
    { name: "NextGen", width: "w-32" },
    { name: "ProBusiness", width: "w-34" }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-500 font-medium text-lg">Trusted by industry leaders</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className={`${logo.width} h-12 bg-gray-200 rounded-lg flex items-center justify-center`}>
              <span className="text-gray-400 font-semibold text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { number: "500+", label: "Projects Completed", description: "Successful transformations delivered" },
    { number: "250%", label: "Average ROI", description: "Return on investment achieved" },
    { number: "98%", label: "Client Satisfaction", description: "Clients would recommend us" },
    { number: "15+", label: "Years Experience", description: "Industry expertise and knowledge" }
  ];

  const caseStudies = [
    {
      company: "TechStartup Inc.",
      industry: "Technology",
      challenge: "Scaling operations efficiently",
      result: "300% revenue growth in 18 months",
      metric: "3x Growth"
    },
    {
      company: "Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Process optimization needed",
      result: "40% reduction in operational costs",
      metric: "40% Savings"
    },
    {
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Digital transformation required",
      result: "150% increase in online sales",
      metric: "150% Increase"
    }
  ];

  return (
    <section id="results" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Proven Results That Drive Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. See how we've helped businesses achieve 
            extraordinary outcomes and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-900 text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-4">{study.metric}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
              <p className="text-gray-500 text-sm mb-4">{study.industry}</p>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-600 font-medium">Challenge: </span>
                  <span className="text-gray-700">{study.challenge}</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Result: </span>
                  <span className="text-gray-700">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of successful companies that have accelerated their growth with our proven consulting approach. 
          Let's discuss how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg font-semibold">
            Download Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ConsultPro</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming businesses through expert consulting and proven strategies that deliver measurable results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@consultpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Business Ave, Suite 100</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industry Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2024 ConsultPro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;