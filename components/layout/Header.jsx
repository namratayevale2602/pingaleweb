"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, User, ChevronRight } from 'lucide-react';
import pigalelogo from "../../public/pinglelogo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      title: 'Personal Insurance',
      dropdown: [
        {
          category: 'Auto Insurance',
          items: [
            { name: 'Car Insurance', slug: 'insurance/car-insurance' },
            { name: 'Motorcycle Insurance', slug: 'insurance/motorcycle-insurance' },
            { name: 'RV Insurance', slug: 'insurance/rv-insurance' }
          ]
        },
        {
          category: 'Home Insurance',
          items: [
            { name: 'Homeowners Insurance', slug: 'insurance/homeowners-insurance' },
            { name: 'Renters Insurance', slug: 'insurance/renters-insurance' },
            { name: 'Condo Insurance', slug: 'insurance/condo-insurance' }
          ]
        },
        {
          category: 'Life & Health',
          items: [
            { name: 'Life Insurance', slug: 'insurance/life-insurance' },
            { name: 'Health Insurance', slug: 'insurance/health-insurance' },
            { name: 'Disability Insurance', slug: 'insurance/disability-insurance' }
          ]
        }
      ]
    },
    {
      title: 'Business Insurance',
      dropdown: [
        {
          category: 'Small Business',
          items: [
            { name: 'General Liability', slug: 'insurance/general-liability' },
            { name: 'Professional Liability', slug: 'insurance/professional-liability' },
            { name: 'Workers Compensation', slug: 'insurance/workers-compensation' }
          ]
        },
        {
          category: 'Commercial',
          items: [
            { name: 'Commercial Auto', slug: 'insurance/commercial-auto' },
            { name: 'Commercial Property', slug: 'insurance/commercial-property' },
            { name: 'Cyber Liability', slug: 'insurance/cyber-liability' }
          ]
        }
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        {
          category: 'Learn',
          items: [
            { name: 'Insurance Guide', slug: 'insuranceguide' },
            // { name: 'Blog', slug: 'blog' },
            // { name: 'FAQs', slug: 'faqs' }
          ]
        }
      ]
    },
    {
      title: 'About Us',
      link: '/aboutus'
    },
    {
      title: 'Contact',
      link: '/contactus'
    },
    {
      title: 'Calculators',
      link: '/calculators'
    }
  ];

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-20 h-20">
                <Image
                  src={pigalelogo}
                  alt="Pingle Insurance"
                  fill={true}
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-[#074a6b] hover:text-[#2ba5ea] font-medium py-2 px-3 rounded-md transition-colors duration-200"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Mega Dropdown */}
                    {activeDropdown === index && (
                      <div className="absolute left-0 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 py-6 px-4 grid grid-cols-2 gap-6 animate-fadeIn">
                        {item.dropdown.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-3">
                            <h3 className="text-sm font-semibold text-[#074a6b] uppercase tracking-wider">
                              {category.category}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={`/${subItem.slug}`}
                                    className="text-gray-600 hover:text-[#2ba5ea] hover:pl-1 transition-all duration-200 flex items-center group"
                                  >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 mr-1" />
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="text-[#074a6b] hover:text-[#2ba5ea] font-medium py-2 px-3 rounded-md transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

          
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.dropdown ? (
                  <>
                    <div className="font-semibold text-[#074a6b] text-lg">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-4">
                      {item.dropdown.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500 uppercase">
                            {category.category}
                          </h4>
                          <ul className="space-y-2 pl-2">
                            {category.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={`/insurance/${subItem.slug}`}
                                  className="text-gray-600 hover:text-[#2ba5ea] block py-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="font-semibold text-[#074a6b] text-lg block hover:text-[#2ba5ea]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
          
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;