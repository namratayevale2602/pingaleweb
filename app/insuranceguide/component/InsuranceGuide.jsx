// components/InsuranceGuide.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import {
  Shield,
  BookOpen,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Clock,
  IndianRupee,
  Users,
  Home,
  Car,
  Heart,
  Briefcase,
  Search,
  FileText,
  Scale,
  Target,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

const InsuranceGuide = ({ insuranceData }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guideCategories = [
    { id: 'all', name: 'All Guides', icon: BookOpen },
    { id: 'auto', name: 'Auto Insurance', icon: Car },
    { id: 'home', name: 'Home Insurance', icon: Home },
    { id: 'life', name: 'Life & Health', icon: Heart },
    { id: 'business', name: 'Business', icon: Briefcase }
  ];

  const faqs = [
    {
      question: "What is insurance and why do I need it?",
      answer: "Insurance is a financial safety net that protects you and your loved ones from unexpected events. It works by spreading risk across many people - you pay a small premium, and the insurance company covers large, unexpected costs. Think of it as peace of mind that your savings won't be wiped out by a medical emergency, car accident, or other life events.",
      category: "general"
    },
    {
      question: "How much insurance coverage do I need?",
      answer: "The amount depends on your life stage and responsibilities. A general rule: Life insurance should be 10-15x your annual income. Health insurance should cover at least ₹5-10 lakhs. For assets, coverage should equal replacement cost. Our calculators can help you find the right amount based on your specific situation.",
      category: "general"
    },
    {
      question: "What's the difference between term and whole life insurance?",
      answer: "Term life insurance provides coverage for a specific period (like 20-30 years) at lower premiums. It's pure protection. Whole life insurance combines protection with an investment component, lasting your entire life but with higher premiums. Term is usually better for most people needing pure protection.",
      category: "life"
    },
    {
      question: "Does health insurance cover pre-existing diseases?",
      answer: "Yes, but after a waiting period. Most policies cover pre-existing conditions after 2-4 years of continuous coverage. Some policies may have shorter waiting periods for specific conditions. Always disclose pre-existing conditions when buying - hiding them can lead to claim rejection.",
      category: "health"
    },
    {
      question: "What is not covered in standard car insurance?",
      answer: "Standard car insurance doesn't cover normal wear and tear, mechanical breakdown, driving under influence, or using the car for commercial purposes without appropriate coverage. It also excludes damage from war, nuclear risks, or intentional acts.",
      category: "auto"
    },
    {
      question: "Do I need home insurance if I'm renting?",
      answer: "Yes! While your landlord insures the building, their policy doesn't cover your belongings. Renters insurance protects your furniture, electronics, and other possessions. It also provides liability coverage if someone gets injured in your rental and covers additional living expenses if your rental becomes uninhabitable.",
      category: "home"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const steps = [
    {
      number: 1,
      title: "Assess Your Needs",
      description: "Evaluate your life stage, responsibilities, and assets to determine what needs protection.",
      icon: Target,
      color: "#074a6b"
    },
    {
      number: 2,
      title: "Understand Coverage",
      description: "Learn what different policies cover and exclude. Read the fine print before buying.",
      icon: BookOpen,
      color: "#2ba5ea"
    },
    {
      number: 3,
      title: "Compare Options",
      description: "Get quotes from multiple insurers. Compare premiums, coverage, and claim settlement ratios.",
      icon: Scale,
      color: "#1a729e"
    },
    {
      number: 4,
      title: "Buy & Review",
      description: "Purchase the policy that fits best. Review annually or when life circumstances change.",
      icon: CheckCircle,
      color: "#0080bf"
    }
  ];

  const tips = [
    {
      icon: Clock,
      title: "Buy Early",
      description: "Premiums increase with age. Buy life and health insurance when you're young and healthy."
    },
    {
      icon: FileText,
      title: "Read the Fine Print",
      description: "Understand exclusions, waiting periods, and claim procedures before buying."
    },
    {
      icon: Users,
      title: "Disclose Everything",
      description: "Be honest about health conditions and habits. Non-disclosure can void your policy."
    },
    {
      icon: IndianRupee,
      title: "Don't Underinsure",
      description: "Buying inadequate coverage to save premiums defeats the purpose of insurance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#074a6b] to-[#0080bf] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Insurance Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understanding Insurance, 
              <span className="text-[#2ba5ea]"> Made Simple</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about protecting what matters most. 
              No jargon, just clear answers.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#2ba5ea]/50"
              />
              <Search className="absolute right-6 top-4 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Guide Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="text-sm font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${step.color}15`, color: step.color }}
                  >
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {guideCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? 'bg-[#074a6b] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                      {selectedCategory === category.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Tips */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Tips</h3>
                <div className="space-y-4">
                  {tips.map((tip, idx) => {
                    const Icon = tip.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-[#2ba5ea]/10 rounded-lg">
                          <Icon className="w-4 h-4 text-[#2ba5ea]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{tip.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{tip.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Need Help Card */}
              <div className="mt-8 p-4 bg-gradient-to-br from-[#074a6b] to-[#0080bf] rounded-xl text-white">
                <h3 className="font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Our advisors are here to help you understand your options.
                </p>
                <button className="w-full bg-white text-[#074a6b] px-4 py-2 rounded-lg font-medium hover:shadow-lg transition">
                  Talk to an Advisor
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - FAQs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({filteredFaqs.length} questions)
                </span>
              </h2>

              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            activeFaq === idx ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {activeFaq === idx && (
                        <div className="p-4 pt-0 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search or category</p>
                </div>
              )}

              {/* Insurance Types Overview */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Insurance Types Explained</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Car className="w-5 h-5 text-[#074a6b]" />
                      <h4 className="font-semibold text-gray-900">Auto Insurance</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Protects against financial loss from accidents, theft, and damage to your vehicle.
                    </p>
                    <Link href="/insurance/car-insurance" className="text-[#0080bf] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Home className="w-5 h-5 text-[#1a729e]" />
                      <h4 className="font-semibold text-gray-900">Home Insurance</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Covers your home structure and belongings against fire, theft, and natural disasters.
                    </p>
                    <Link href="/insurance/homeowners-insurance" className="text-[#0080bf] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="p-4 bg-rose-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-5 h-5 text-[#2ba5ea]" />
                      <h4 className="font-semibold text-gray-900">Life Insurance</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Provides financial security for your family when you're no longer there.
                    </p>
                    <Link href="/insurance/life-insurance" className="text-[#0080bf] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-[#074a6b]" />
                      <h4 className="font-semibold text-gray-900">Business Insurance</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Protects your business from liability, property damage, and employee-related risks.
                    </p>
                    <Link href="/insurance/general-liability" className="text-[#0080bf] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glossary Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Glossary</h2>
            <p className="text-lg text-gray-600">Common terms explained in simple language</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#074a6b] mb-2">Premium</h3>
              <p className="text-sm text-gray-600">The amount you pay (monthly or yearly) to keep your insurance policy active.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#2ba5ea] mb-2">Deductible</h3>
              <p className="text-sm text-gray-600">The amount you pay out-of-pocket before insurance coverage kicks in.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#1a729e] mb-2">Coverage</h3>
              <p className="text-sm text-gray-600">The specific protections and situations your insurance policy covers.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0080bf] mb-2">Exclusion</h3>
              <p className="text-sm text-gray-600">Specific situations or items not covered by your insurance policy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#074a6b] mb-2">Claim</h3>
              <p className="text-sm text-gray-600">A formal request to your insurance company for coverage or compensation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#2ba5ea] mb-2">Rider</h3>
              <p className="text-sm text-gray-600">An additional feature you can add to your policy for extra coverage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#074a6b] to-[#0080bf] rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Still unsure?</h2>
              <p className="text-white/90 mb-6">
                Get personalized advice from our licensed advisors. We'll help you find the right coverage for your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#074a6b] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call an Advisor
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#074a6b] transition inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-semibold mb-2">Quick Help</h3>
                <p className="text-sm text-white/90 mb-4">Email us at</p>
                <a href="mailto:help@insurance.com" className="text-lg font-medium hover:underline">
                  help@insurance.com
                </a>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-white/90">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceGuide;