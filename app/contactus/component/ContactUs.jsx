"use client";
import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  Globe,
  CheckCircle,
  AlertCircle,
  Calendar,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Star,
  Heart,
  Shield,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Share2
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    consent: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState('mumbai');
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Office Locations
  const offices = [
    {
      id: 'mumbai',
      city: 'Mumbai',
      address: 'Express Towers, 15th Floor, Nariman Point, Mumbai - 400021',
      phone: '+91 22 4123 4567',
      email: 'mumbai@finance.com',
      coordinates: { lat: 18.9242, lng: 72.8258 },
      hours: 'Mon-Fri: 9:00 AM - 7:00 PM',
      landline: '022-4123-4567',
      emergency: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'delhi',
      city: 'Delhi',
      address: 'DLF Cyber City, Building 8, Tower C, Gurugram - 122002',
      phone: '+91 124 4123 4567',
      email: 'delhi@finance.com',
      coordinates: { lat: 28.4595, lng: 77.0266 },
      hours: 'Mon-Fri: 9:30 AM - 6:30 PM',
      landline: '0124-4123-4567',
      emergency: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bangalore',
      city: 'Bangalore',
      address: 'Embassy Golf Links, Intermediate Ring Road, Bangalore - 560071',
      phone: '+91 80 4123 4567',
      email: 'bangalore@finance.com',
      coordinates: { lat: 12.9551, lng: 77.6417 },
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      landline: '080-4123-4567',
      emergency: '+91 98765 43212',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Social Media Links
  const socialMedia = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      link: 'https://facebook.com/finance', 
      color: '#1877F2',
      followers: '50K+'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      link: 'https://twitter.com/finance', 
      color: '#1DA1F2',
      followers: '25K+'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      link: 'https://linkedin.com/company/finance', 
      color: '#0A66C2',
      followers: '100K+'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      link: 'https://instagram.com/finance', 
      color: '#E4405F',
      followers: '75K+'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      link: 'https://youtube.com/finance', 
      color: '#FF0000',
      followers: '150K+'
    }
  ];

 

  // FAQ Data
  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by calling our office, emailing us, or using the online booking system above. Initial consultations are free and typically last 30-45 minutes."
    },
    {
      question: "What documents should I bring to first meeting?",
      answer: "Please bring your PAN card, Aadhaar, recent bank statements, existing insurance policies, investment portfolios, and any other financial documents you have. Don't worry if you don't have everything - we can guide you."
    },
    {
      question: "Is there a fee for the first consultation?",
      answer: "No, your first consultation is completely free with no obligation. We believe in providing value before expecting anything in return."
    },
    {
      question: "Do you offer virtual meetings?",
      answer: "Yes! We offer video consultations via Zoom, Google Meet, or phone calls. You can choose what works best for you during the booking process."
    },
    {
      question: "What areas do you serve?",
      answer: "We have physical offices in Mumbai, Delhi, and Bangalore, but serve clients across India through virtual consultations."
    }
  ];

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending...' });

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        consent: false
      });
    }, 1500);
  };

  // Copy to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation<br/>
            <span className="text-[#0A4D6B]">About Your Financial Future</span>
          </h2>
        </div>

        {/* Main Contact Area - Form & Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4D6B] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4D6B] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4D6B] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4D6B] focus:border-transparent transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="consultation">Book Consultation</option>
                    <option value="question">General Question</option>
                    <option value="support">Client Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4D6B] focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0A4D6B]"
                    />
                    <span className="text-sm text-gray-600">Email</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0A4D6B]"
                    />
                    <span className="text-sm text-gray-600">Phone</span>
                  </label>
                </div>
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 mt-1 text-[#0A4D6B] rounded"
                />
                <span className="text-sm text-gray-500">
                  I consent to having this website store my submitted information for contact purposes.
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus.submitted && !formStatus.success}
                className="w-full bg-[#0A4D6B] text-white py-4 rounded-xl font-semibold hover:bg-[#2A9D8F] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.submitted && !formStatus.success ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Form Status Message */}
              {formStatus.message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${
                  formStatus.success ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                }`}>
                  {formStatus.success ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{formStatus.message}</span>
                </div>
              )}
            </form>
          </div>

          {/* Map & Office Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-80 relative overflow-hidden">
              <img 
                src={offices.find(o => o.id === selectedOffice)?.image}
                alt={`${selectedOffice} office`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Office Selector */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2">
                  {offices.map(office => (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOffice(office.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedOffice === office.id
                          ? 'bg-white text-[#0A4D6B]'
                          : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
                      }`}
                    >
                      {office.city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Details */}
            {offices.filter(o => o.id === selectedOffice).map(office => (
              <div key={office.id} className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{office.city} Office</h4>
                    <p className="text-sm text-gray-500">{office.hours}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(office.address)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <a href={`tel:${office.phone}`} className="text-[#0A4D6B] hover:underline text-sm block">
                        {office.phone}
                      </a>
                      <span className="text-xs text-gray-400">Emergency: {office.emergency}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a href={`mailto:${office.email}`} className="text-[#0A4D6B] hover:underline text-sm">
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{office.hours}</span>
                  </div>
                </div>

                {/* Directions Button */}
                <button className="mt-6 w-full bg-gray-50 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours & Quick Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-[#1a729e] rounded-2xl p-6 text-white">
            <Clock className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="text-lg font-bold mb-2">Business Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a729e] rounded-2xl p-6 text-white">
            <Phone className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="text-lg font-bold mb-2">Emergency Contact</h4>
            <p className="text-2xl font-bold mb-2">+91 98765 43210</p>
            <p className="text-sm opacity-90">24/7 for existing clients</p>
          </div>

          <div className="bg-[#1a729e] rounded-2xl p-6 text-white">
            <Globe className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="text-lg font-bold mb-2">Email Us</h4>
            <p className="text-2xl font-bold mb-4">hello@finance.com</p>
            <p className="text-sm opacity-90">24/7 Support Available</p>
            
          </div>
        </div>

        {/* Social Media Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600">Follow us for daily financial tips, market updates, and expert advice</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialMedia.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8" style={{ color: social.color }} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{social.name}</h4>
                  <p className="text-sm text-gray-500">{social.followers} followers</p>
                  <p className="text-xs text-[#0A4D6B] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Follow →
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0A4D6B] transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#0A4D6B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {activeFaq === idx && (
                  <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;