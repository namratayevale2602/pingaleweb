// FutureWealthCalculator.jsx - CORRECTED VERSION with Indian Number Format
"use client";
import { useState, useEffect, useCallback } from 'react';

const FutureWealthCalculator = () => {
  // Default values - Updated to match your example
  const [formData, setFormData] = useState({
    currentPortfolio: 2500000,    // ₹25 lakhs
    lumpSum: 300000,              // ₹3 lakhs ANNUAL lumpsum
    monthlySIP: 20000,            // ₹20,000 monthly
    portfolioReturn: 13,          // 13% annual return
    years: 20
  });

  const [futureValue, setFutureValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [wealthGained, setWealthGained] = useState(0);

  // Validation limits
  const limits = {
    currentPortfolio: { min: 0, max: 1000000000, default: 2500000 },
    lumpSum: { min: 0, max: 10000000, default: 300000 }, // Up to ₹1 crore annual
    monthlySIP: { min: 0, max: 5000000, default: 20000 },
    portfolioReturn: { min: 5, max: 20, default: 13 },
    years: { min: 5, max: 60, default: 20 }
  };

  // UPDATED: Format currency in Indian numbering system without Cr/L/K
  const formatCurrency = (value, currency = '₹') => {
    // Handle very small values
    if (Math.abs(value) < 0.01) return `${currency}0`;
    
    // Format with Indian numbering system (lakhs and crores separators)
    const formatter = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    return `${currency}${formatter.format(Math.round(value))}`;
  };

  // Handle input changes
  const handleInputChange = useCallback((field, value) => {
    let parsedValue = value;
    
    if (typeof value === 'string') {
      parsedValue = parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
    }
    
    const limit = limits[field];
    
    if (parsedValue < limit.min) parsedValue = limit.min;
    if (parsedValue > limit.max) parsedValue = limit.max;

    setFormData(prev => ({
      ...prev,
      [field]: parsedValue
    }));
  }, [limits]);

  // Reset to defaults
  const handleReset = useCallback(() => {
    setFormData({
      currentPortfolio: limits.currentPortfolio.default,
      lumpSum: limits.lumpSum.default,
      monthlySIP: limits.monthlySIP.default,
      portfolioReturn: limits.portfolioReturn.default,
      years: limits.years.default
    });
  }, [limits]);

  // CORRECTED: Calculate future value with annual lumpsum
  const calculateWealth = useCallback(() => {
    const { 
      currentPortfolio, 
      lumpSum, 
      monthlySIP, 
      portfolioReturn, 
      years 
    } = formData;

    const months = years * 12;
    const annualRate = portfolioReturn / 100;
    const monthlyRate = Math.pow(1 + annualRate, 1/12) - 1;

    // 1. Future value of current portfolio
    const fvCurrentPortfolio = currentPortfolio * Math.pow(1 + annualRate, years);

    // 2. Future value of ANNUAL lumpsum (beginning of each year)
    const annualGrowthFactor = Math.pow(1 + annualRate, years);
    const fvAnnualLumpsum = lumpSum * (1 + annualRate) * 
      (annualGrowthFactor - 1) / annualRate;

    // 3. Future value of monthly SIP (beginning of each month)
    const monthlyGrowthFactor = Math.pow(1 + monthlyRate, months);
    const fvMonthlySIP = monthlySIP * (1 + monthlyRate) * 
      (monthlyGrowthFactor - 1) / monthlyRate;

    // Total future value
    const totalFV = fvCurrentPortfolio + fvAnnualLumpsum + fvMonthlySIP;
    
    // Total amount invested
    const totalInvestment = currentPortfolio + 
      (lumpSum * years) + 
      (monthlySIP * months);
    
    const gain = totalFV - totalInvestment;

    setFutureValue(totalFV);
    setTotalInvested(totalInvestment);
    setWealthGained(gain);
  }, [formData]);

  // Calculate on mount and when formData changes
  useEffect(() => {
    calculateWealth();
  }, [calculateWealth]);

  // UPDATED: Slider display format function for smaller numbers
  const formatSliderValue = (value, format = 'currency', prefix = '₹') => {
    if (format === 'currency') {
      // For slider display, show compact format for readability
      const absValue = Math.abs(value);
      if (absValue >= 10000000) {
        return `${prefix}${(value / 10000000).toFixed(2)} Cr`;
      } else if (absValue >= 100000) {
        return `${prefix}${(value / 100000).toFixed(2)} L`;
      } else if (absValue >= 1000) {
        return `${prefix}${(value / 1000).toFixed(1)} K`;
      }
      return `${prefix}${value.toLocaleString('en-IN', { minimumFractionDigits: 0 })}`;
    } else if (format === 'percent') {
      return `${value}%`;
    } else if (format === 'years') {
      return `${value} years`;
    }
    return value;
  };

  // Slider input component
  const SliderInput = ({ label, field, value, min, max, step = 1, format = 'currency', prefix = '₹' }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-gray-700 font-medium">{label}</label>
        <div className="text-lg font-semibold text-blue-600">
          {formatSliderValue(value, format, prefix)}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => handleInputChange(field, parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>{formatSliderValue(min, format, prefix)}</span>
        <span>{formatSliderValue(max, format, prefix)}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Future Wealth Calculator
          </h1>
          <p className="text-gray-600">
            Calculate your potential future wealth based on current investments, annual lumpsum, and SIP contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Investment Parameters</h2>
              
              <SliderInput
                label="Current Portfolio Value"
                field="currentPortfolio"
                value={formData.currentPortfolio}
                min={limits.currentPortfolio.min}
                max={limits.currentPortfolio.max}
                step={100000}
              />

              <SliderInput
                label="Annual Lump Sum Investment"
                field="lumpSum"
                value={formData.lumpSum}
                min={limits.lumpSum.min}
                max={limits.lumpSum.max}
                step={50000}
              />

              <SliderInput
                label="Monthly SIP"
                field="monthlySIP"
                value={formData.monthlySIP}
                min={limits.monthlySIP.min}
                max={limits.monthlySIP.max}
                step={10000}
              />

              <SliderInput
                label="Assumed Annual Portfolio Return"
                field="portfolioReturn"
                value={formData.portfolioReturn}
                min={limits.portfolioReturn.min}
                max={limits.portfolioReturn.max}
                step={0.5}
                format="percent"
              />

              <SliderInput
                label="Investment Period (Years)"
                field="years"
                value={formData.years}
                min={limits.years.min}
                max={limits.years.max}
                step={1}
                format="years"
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  Reset to Default Values
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Total Future Value - UPDATED: Full number format */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="mb-4">
                <h3 className="text-lg font-medium opacity-90">
                  Future Value After {formData.years} Years
                </h3>
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {formatCurrency(futureValue)}
              </div>
              <p className="opacity-90 text-sm">
                Total amount after {formData.years} years of investment
              </p>
            </div>

            {/* Total Invested */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Total Amount Invested</h3>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {formatCurrency(totalInvested)}
              </div>
              <p className="text-gray-600 text-sm">
                Sum of all your contributions over {formData.years} years
              </p>
            </div>

            {/* Wealth Gained */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Wealth Gained</h3>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {formatCurrency(wealthGained)}
              </div>
              <p className="text-gray-600 text-sm">
                Returns generated through compounding
              </p>
            </div>

            {/* Summary Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Investment Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Monthly Rate</span>
                  <span className="font-semibold">
                    {((Math.pow(1 + formData.portfolioReturn / 100, 1/12) - 1) * 100).toFixed(4)}%
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Annual Lumpsum</span>
                  <span className="font-semibold">
                    {formatCurrency(formData.lumpSum * formData.years)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Total SIP Payments</span>
                  <span className="font-semibold">
                    {formatCurrency(formData.monthlySIP * formData.years * 12)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Return</span>
                  <span className="font-semibold text-blue-600">
                    {formData.portfolioReturn}%
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>ROI Multiple</span>
                  <span className="font-semibold text-gray-800">
                    {totalInvested > 0 ? (futureValue / totalInvested).toFixed(2) + 'x' : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Note: Calculations assume annual lumpsum invested at beginning of each year 
            and monthly SIP at beginning of each month. Returns are for illustrative purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureWealthCalculator;