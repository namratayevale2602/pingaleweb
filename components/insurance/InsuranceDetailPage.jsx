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
  Users,
  ChevronDown,
  Star,
  ThumbsUp,
  Zap,
  Users as UsersIcon,
  HeadphonesIcon,
  Scale,
  Timer
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

  // Memoize insurance data to prevent unnecessary re-renders
  const insurance = useMemo(() => insuranceData, [insuranceData]);

  // Handle loading state
  if (!insurance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
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


  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'addons', label: 'Add-ons' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'documents', label: 'Documents' }
  ];

  // Benefits/features data
  const benefits = [
    { icon: Zap, text: 'Quick Claim Settlement within 7 days' },
    { icon: UsersIcon, text: 'Coverage for 10+ family members' },
    { icon: HeadphonesIcon, text: '24/7 Customer Support' },
    { icon: Scale, text: 'No Claim Bonus available' },
    { icon: Timer, text: 'Lifetime policy renewal' },
    { icon: ThumbsUp, text: '98% Claim Settlement Ratio' }
  ];

  // Key highlights
  const highlights = [
    { label: 'Entry Age', value: '18 - 65 years' },
    { label: 'Policy Term', value: '1 - 30 years' },
    { label: 'Sum Assured', value: '₹5 Lakhs - ₹1 Crore' },
    { label: 'Tax Benefit', value: 'U/s 80C & 10(10D)' },
    { label: 'Claim Ratio', value: '98.5%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <div className="bg-linear-to-r from-[#1a729e] to-[#074a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          

          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div>
                
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{insurance.title}</h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90">{insurance.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Desktop Tabs - hidden on mobile */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 lg:px-6 py-3 font-medium text-sm transition-all relative whitespace-nowrap ${
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

        {/* Content - Different layouts for mobile and desktop */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mobile View - Show all sections stacked */}
            <div className="block md:hidden space-y-6">
              {/* Overview Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#074a6b]" />
                  About {insurance.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{insurance.description}</p>
              </div>

              {/* Quick Stats - Mobile */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#e6f0f5]">
                      <Shield className="w-4 h-4 text-[#074a6b]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Coverage</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">₹5L - ₹1Cr</div>
                  <p className="text-xs text-gray-500 mt-1">Typical coverage range</p>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#e6f0f5]">
                      <Clock className="w-4 h-4 text-[#074a6b]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Term</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">1-30 Years</div>
                  <p className="text-xs text-gray-500 mt-1">Flexible policy terms</p>
                </div>
              </div>

              {/* Key Highlights - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, idx) => (
                    <div key={idx}>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why choose this plan?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <benefit.icon className="w-4 h-4 text-[#074a6b] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#074a6b]" />
                  What's Covered
                </h2>
                <div className="space-y-3">
                  {insurance.coverage.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#074a6b] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  What's Not Covered
                </h2>
                <div className="space-y-3">
                  {insurance.exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#074a6b]" />
                  Available Add-ons
                </h2>
                <div className="space-y-3">
                  {insurance.addons.map((addon, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">{addon.name}</h3>
                        <p className="text-xs text-gray-500">Enhance your coverage</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sm text-gray-900">{addon.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#074a6b]" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {insurance.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-sm text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-xs text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Section - Mobile */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#074a6b]" />
                  Required Documents
                </h2>
                <div className="space-y-3">
                  {insurance.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop View - Tabbed content */}
            <div className="hidden md:block space-y-6">
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
                        <div className="p-2 rounded-lg bg-[#e6f0f5]">
                          <Shield className="w-5 h-5 text-[#074a6b]" />
                        </div>
                        <span className="font-semibold text-gray-900">Coverage</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">₹5L - ₹1Cr</div>
                      <p className="text-sm text-gray-500 mt-1">Typical coverage range</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#e6f0f5]">
                          <Clock className="w-5 h-5 text-[#074a6b]" />
                        </div>
                        <span className="font-semibold text-gray-900">Term</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">1-30 Years</div>
                      <p className="text-sm text-gray-500 mt-1">Flexible policy terms</p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Key Highlights</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {highlights.map((item, idx) => (
                        <div key={idx}>
                          <p className="text-sm text-gray-500">{item.label}</p>
                          <p className="text-base font-semibold text-gray-900">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Why choose this plan?</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <benefit.icon className="w-5 h-5 text-[#074a6b] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit.text}</span>
                        </div>
                      ))}
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
                          <CheckCircle className="w-5 h-5 text-[#074a6b] flex-shrink-0 mt-0.5" />
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
          </div>

          {/* Sidebar - Insurance Info Cards */}
          <div className="space-y-6">
            {/* Policy at a Glance Card */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm sticky top-6">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#074a6b]" />
                Policy at a Glance
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Policy Type</span>
                  <span className="text-sm font-semibold text-gray-900">{insurance.category}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Entry Age</span>
                  <span className="text-sm font-semibold text-gray-900">18-65 years</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Policy Term</span>
                  <span className="text-sm font-semibold text-gray-900">1-30 years</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Sum Assured</span>
                  <span className="text-sm font-semibold text-gray-900">₹5L - ₹1Cr</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Tax Benefits</span>
                  <span className="text-sm font-semibold text-green-600">U/s 80C, 10(10D)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Claim Ratio</span>
                  <span className="text-sm font-semibold text-gray-900">98.5%</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Customer Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold ml-1">4.5</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Based on 10,000+ reviews</p>
              </div>
            </div>

            {/* Key Benefits Card */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-green-100 rounded-lg">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Quick Claim Settlement</p>
                    <p className="text-xs text-gray-500">Within 7 working days</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Family Coverage</p>
                    <p className="text-xs text-gray-500">Cover spouse, kids & parents</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-purple-100 rounded-lg">
                    <HeadphonesIcon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                    <p className="text-xs text-gray-500">Dedicated relationship manager</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-orange-100 rounded-lg">
                    <Scale className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">No Claim Bonus</p>
                    <p className="text-xs text-gray-500">5% bonus on sum assured</p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDetail;