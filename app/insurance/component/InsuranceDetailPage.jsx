// components/InsuranceDetail.jsx
"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Shield,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  Clock,
  IndianRupee,
  Car,
  Bike,
  Building,
  Heart,
  HeartPulse,
  Home,
  Key,
  Umbrella,
  Award,
  Briefcase,
  GraduationCap,
  PiggyBank,
  Users
} from 'lucide-react';

// Icon mapping - defined outside component to prevent recreation
const iconMap = {
  Car,
  Bike,
  Building,
  Heart,
  HeartPulse,
  Home,
  Key,
  Umbrella,
  Shield,
  Award,
  Briefcase,
  GraduationCap,
  PiggyBank,
  Users
};

const InsuranceDetail = ({ insuranceData, slug }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    coverage: '1000000',
    term: '10'
  });

  // Memoize insurance data to prevent unnecessary re-renders
  const insurance = useMemo(() => insuranceData, [insuranceData]);

  // Handle loading state
  if (!insurance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Insurance Not Found</h2>
          <p className="text-gray-600 mb-4">The insurance type you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/insurance')}
            className="px-6 py-2 bg-[#074a6b] text-white rounded-lg hover:bg-[#1a729e] transition"
          >
            Back to Insurance
          </button>
        </div>
      </div>
    );
  }

  // Memoize callbacks
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  const handleCalculatePremium = useCallback(() => {
    console.log('Calculating premium for:', formData);
  }, [formData]);

  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'addons', label: 'Add-ons' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'documents', label: 'Documents' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r ${insurance.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insurance Types</span>
          </button>

          <div className="flex items-start gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {insurance.category}
                </span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  ID: {insurance.id}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{insurance.title}</h1>
              <p className="text-xl text-white/90">{insurance.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-6 py-3 font-medium text-sm transition-all relative whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#074a6b]'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#074a6b]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {insurance.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{insurance.description}</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: insurance.lightColor }}>
                        <Shield className="w-5 h-5" style={{ color: insurance.color }} />
                      </div>
                      <span className="font-semibold text-gray-900">Coverage</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">₹5L - ₹1Cr</div>
                    <p className="text-sm text-gray-500 mt-1">Typical coverage range</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: insurance.lightColor }}>
                        <Clock className="w-5 h-5" style={{ color: insurance.color }} />
                      </div>
                      <span className="font-semibold text-gray-900">Term</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">1-30 Years</div>
                    <p className="text-sm text-gray-500 mt-1">Flexible policy terms</p>
                  </div>
                </div>

                {/* Why Choose This */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why choose this plan?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Comprehensive protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Flexible payment options</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Quick claim settlement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Tax benefits available</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Coverage Tab */}
            {activeTab === 'coverage' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Covered</h2>
                  <div className="space-y-4">
                    {insurance.coverage.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Not Covered</h2>
                  <div className="space-y-4">
                    {insurance.exclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Add-ons Tab */}
            {activeTab === 'addons' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Add-ons</h2>
                <div className="space-y-4">
                  {insurance.addons.map((addon, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
                      <div>
                        <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                        <p className="text-sm text-gray-500">Enhance your coverage</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{addon.price}</div>
                        <button className="text-sm text-[#0080bf] hover:underline">Learn more</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {insurance.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <div className="space-y-4">
                  {insurance.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Get Quote Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get a Free Quote</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Amount
                  </label>
                  <select 
                    name="coverage"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0080bf]"
                    value={formData.coverage}
                    onChange={handleInputChange}
                  >
                    <option value="500000">₹5,00,000</option>
                    <option value="1000000">₹10,00,000</option>
                    <option value="2500000">₹25,00,000</option>
                    <option value="5000000">₹50,00,000</option>
                    <option value="10000000">₹1,00,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Term (Years)
                  </label>
                  <select 
                    name="term"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0080bf]"
                    value={formData.term}
                    onChange={handleInputChange}
                  >
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="5">5 Years</option>
                    <option value="10">10 Years</option>
                    <option value="20">20 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>

                <button 
                  onClick={handleCalculatePremium}
                  className="w-full py-3 bg-gradient-to-r from-[#074a6b] to-[#0080bf] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Calculate Premium
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <IndianRupee className="w-5 h-5 text-gray-500" />
                  <span className="text-3xl font-bold text-gray-900">500</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-[#074a6b]/5 rounded-lg hover:bg-[#074a6b]/10 transition">
                  <Phone className="w-5 h-5 text-[#074a6b]" />
                  <span className="text-gray-700">Call an Advisor</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-[#0080bf]/5 rounded-lg hover:bg-[#0080bf]/10 transition">
                  <Mail className="w-5 h-5 text-[#0080bf]" />
                  <span className="text-gray-700">Email Us</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-[#2ba5ea]/5 rounded-lg hover:bg-[#2ba5ea]/10 transition">
                  <Calendar className="w-5 h-5 text-[#2ba5ea]" />
                  <span className="text-gray-700">Schedule a Call</span>
                </button>
              </div>
            </div>

            {/* Share Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                  Twitter
                </button>
                <button className="flex-1 py-2 px-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition text-sm">
                  Facebook
                </button>
                <button className="flex-1 py-2 px-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetail;