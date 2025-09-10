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
  Star
} from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ProfResults</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 transition-colors">Results</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit">
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
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Drive <span className="text-blue-600">Professional Results</span> for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with our proven strategies and expert consulting. 
              We deliver measurable results that drive growth and maximize your ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold">
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Business professionals in meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">250%</p>
                  <p className="text-sm text-gray-600">Average ROI Increase</p>
                </div>
              </div>
            </div>
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
      description: "Develop comprehensive business strategies that align with your goals and drive sustainable growth."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Identify bottlenecks and optimize your operations for maximum efficiency and profitability."
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Build high-performing teams through leadership training and organizational development."
    },
    {
      icon: Award,
      title: "Process Excellence",
      description: "Implement best practices and quality systems to ensure consistent, superior results."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive consulting services designed to transform your business 
            and deliver measurable results across all areas of operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
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

function Results() {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "250%", label: "Average ROI Increase" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      text: "ProfResults transformed our business operations completely. We saw a 300% increase in efficiency within 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Manufacturing",
      text: "Their strategic planning helped us expand into new markets successfully. Exceptional results and professional service.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Solutions",
      text: "The team development program revolutionized our workplace culture. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. See how we've helped businesses 
            achieve extraordinary results and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ProfResults?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in business consulting, we've helped 
              hundreds of companies achieve their goals and exceed their expectations.
            </p>
            
            <div className="space-y-6">
              {[
                "Proven methodologies with measurable results",
                "Expert team with diverse industry experience",
                "Customized solutions for your unique challenges",
                "Ongoing support and partnership approach"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
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

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get in touch with our experts today and discover how we can help 
              you achieve extraordinary results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-100">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-blue-100">contact@profresults.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-blue-100">123 Business Ave, Suite 100<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ProfResults</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through professional consulting and proven strategies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Performance Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Excellence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>contact@profresults.com</li>
              <li>123 Business Ave, Suite 100<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ProfResults. All rights reserved.</p>
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
      <Services />
      <About />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;