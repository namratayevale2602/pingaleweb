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
          items: ['Car Insurance', 'Motorcycle Insurance', 'RV Insurance']
        },
        {
          category: 'Home Insurance',
          items: ['Homeowners Insurance', 'Renters Insurance', 'Condo Insurance']
        },
        {
          category: 'Life & Health',
          items: ['Life Insurance', 'Health Insurance', 'Disability Insurance']
        }
      ]
    },
    {
      title: 'Business Insurance',
      dropdown: [
        {
          category: 'Small Business',
          items: ['General Liability', 'Professional Liability', 'Workers Compensation']
        },
        {
          category: 'Commercial',
          items: ['Commercial Auto', 'Commercial Property', 'Cyber Liability']
        }
      ]
    },
    {
      title: 'Resources',
      dropdown: [
        {
          category: 'Learn',
          items: ['Insurance Guide', 'Blog', 'FAQs']
        },
        {
          category: 'Support',
          items: ['Claims Center', 'Customer Support', 'Find an Agent']
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
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              {/* Replace with your actual exported image */}
              <div className="relative w-20 h-20">
                <Image
                  src={pigalelogo} // Update this path to your image
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
                      <div className="absolute left-0 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 py-6 px-4 grid grid-cols-3 gap-6 animate-fadeIn">
                        {item.dropdown.map((category, catIndex) => (
                          <div key={catIndex} className="space-y-3">
                            <h3 className="text-sm font-semibold text-[#074a6b] uppercase tracking-wider">
                              {category.category}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-gray-600 hover:text-[#2ba5ea] hover:pl-1 transition-all duration-200 flex items-center group"
                                  >
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 mr-1" />
                                    {subItem}
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
                    <div className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-4">
                      {item.dropdown.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-500">
                            {category.category}
                          </h4>
                          <ul className="space-y-2 pl-2">
                            {category.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-gray-600 hover:text-blue-600 block py-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem}
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
                    className="font-semibold text-gray-800 text-lg block hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-6 space-y-3 border-t border-gray-100">
              <Link
                href="/get-quote"
                className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="block w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="block w-full text-gray-600 px-4 py-3 rounded-lg font-semibold hover:text-blue-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;