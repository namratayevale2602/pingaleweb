"use client";
import { useState, useEffect } from "react";
import {
  Calculator,
  Home,
  TrendingUp,
  IndianRupee,
  Calendar,
  Percent,
  Zap,
  ArrowUp,
  Wallet,
  Landmark,
  Target,
  CreditCard,
  Shield,
  Building,
  Lock,
} from "lucide-react";

const HomeLoanRecoveryCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("emi-loan"); // 'emi-loan', 'emi-monthly', 'principal', 'interest'
  const [emiSubType, setEmiSubType] = useState("loan-amount"); // 'loan-amount' or 'monthly-emi'

  // Default values
  const [formData, setFormData] = useState({
    // EMI with Loan Amount
    loanAmount: 3000000,
    interestRate: 9,
    
    // EMI with Monthly EMI
    monthlyEMI: 30000,
    
    // Common
    loanTenure: 20,
    investmentReturn: 13,
    annualIncrease: 10,
  });

  // Separate state for input fields to prevent re-renders during typing
  const [inputFields, setInputFields] = useState({
    loanAmount: "3000000",
    interestRate: "9",
    monthlyEMI: "30000",
    loanTenure: "20",
    investmentReturn: "13",
    annualIncrease: "10",
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Validation limits based on calculator type
  const getLimits = (field) => {
    const commonLimits = {
      loanTenure: { min: 1, max: 40, default: 20 },
      investmentReturn: { min: 6, max: 18, default: 13 },
      annualIncrease: { min: 0, max: 30, default: 10 },
    };

    const typeLimits = {
      'emi-loan': {
        loanAmount: { min: 100000, max: 100000000, default: 3000000 },
        interestRate: { min: 5, max: 15, default: 9 },
        ...commonLimits
      },
      'emi-monthly': {
        monthlyEMI: { min: 1000, max: 500000, default: 30000 },
        ...commonLimits
      },
      'principal': {
        loanAmount: { min: 100000, max: 100000000, default: 3000000 },
        investmentReturn: { min: 13, max: 13, default: 13 }, // Fixed at 13%
        ...commonLimits
      },
      'interest': {
        loanAmount: { min: 100000, max: 100000000, default: 3000000 },
        interestRate: { min: 5, max: 15, default: 9 },
        ...commonLimits
      }
    };

    return typeLimits[calculatorType]?.[field] || { min: 0, max: 100, default: 0 };
  };

  // Auto-calculate on formData or calculatorType/emiSubType change
  useEffect(() => {
    // Check if there are any validation errors
    let hasErrors = false;
    
    // Get fields to validate based on calculator type
    const fieldsToValidate = [];
    
    if (calculatorType === "emi-loan" || calculatorType === "principal" || calculatorType === "interest") {
      fieldsToValidate.push('loanAmount');
    }
    
    if (calculatorType === "emi-loan" || calculatorType === "interest") {
      fieldsToValidate.push('interestRate');
    }
    
    if (emiSubType === "monthly-emi" && calculatorType === "emi-monthly") {
      fieldsToValidate.push('monthlyEMI');
    }
    
    fieldsToValidate.push('loanTenure');
    
    if (calculatorType !== "principal") {
      fieldsToValidate.push('investmentReturn');
    }
    
    fieldsToValidate.push('annualIncrease');

    fieldsToValidate.forEach(field => {
      const value = formData[field];
      const limit = getLimits(field);
      
      if (value < limit.min || value > limit.max) {
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      const targetAmount = calculateTargetAmount();
      const monthlyInvestment = calculateMonthlyInvestment(targetAmount);
      
      setResults({
        targetAmount: Math.round(targetAmount),
        monthlyInvestment: Math.round(monthlyInvestment),
        loanTenure: formData.loanTenure,
        emiDetails: (calculatorType === "emi-loan" || calculatorType === "interest") ? calculateEMIDetails() : null,
      });
    }
  }, [formData, calculatorType, emiSubType]);

  // Format currency
  const formatCurrency = (value) => {
    if (Math.abs(value) < 0.01) return '₹0';
    const formatter = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return `₹${formatter.format(Math.round(value))}`;
  };

  // Calculate EMI details
  const calculateEMIDetails = () => {
    const { loanAmount, interestRate, loanTenure } = formData;
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTenure * 12;
    
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalPaid = emi * months;
    const totalInterest = totalPaid - loanAmount;
    
    return { emi, totalPaid, totalInterest };
  };

  // Calculate target amount based on calculator type
  const calculateTargetAmount = () => {
    switch (calculatorType) {
      case "emi-loan": {
        const { loanAmount, interestRate, loanTenure } = formData;
        const monthlyRate = interestRate / 100 / 12;
        const months = loanTenure * 12;
        
        const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                    (Math.pow(1 + monthlyRate, months) - 1);
        return emi * months;
      }
      
      case "emi-monthly":
        return formData.monthlyEMI * 12 * formData.loanTenure;
        
      case "principal":
        return formData.loanAmount;
        
      case "interest": {
        const emiDetails = calculateEMIDetails();
        return emiDetails.totalInterest;
      }
      
      default:
        return 0;
    }
  };

  // Calculate monthly investment needed
  const calculateMonthlyInvestment = (targetAmount) => {
    const { investmentReturn, annualIncrease, loanTenure } = formData;
    
    // Convert annual return to monthly rate
    const monthlyRate = Math.pow(1 + investmentReturn / 100, 1/12) - 1;
    
    // Calculate sum of geometric series for growing annuity
    const r = investmentReturn / 100;
    const g = annualIncrease / 100;
    const n = loanTenure;
    
    // Calculate (1+r)^n and (1+g)^n
    const powRN = Math.pow(1 + r, n);
    const powGN = Math.pow(1 + g, n);
    
    // Main factor
    const mainFactor = (powRN - powGN) / (r - g);
    
    // Monthly adjustment factor
    const monthlyAdjustment = r / monthlyRate;
    
    // Beginning-of-month factor
    const beginningFactor = 1 + monthlyRate;
    
    // Total factor
    const totalFactor = mainFactor * monthlyAdjustment * beginningFactor;
    
    // Monthly investment
    return targetAmount / totalFactor;
  };

  // Handle input change - SIMPLE AND SMOOTH
  const handleInputChange = (field, value) => {
    setInputFields(prev => ({
      ...prev,
      [field]: value
    }));

    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  // Handle input blur - validate and update formData
  const handleInputBlur = (field) => {
    const value = inputFields[field];
    
    if (value === '') {
      setInputFields(prev => ({
        ...prev,
        [field]: formData[field].toString()
      }));
      return;
    }

    const numValue = Number(value);
    
    if (isNaN(numValue)) {
      setErrors(prev => ({
        ...prev,
        [field]: 'Please enter a valid number'
      }));
      return;
    }

    const limit = getLimits(field);
    if (numValue < limit.min) {
      setErrors(prev => ({
        ...prev,
        [field]: `Minimum value is ${field.includes('Rate') || field.includes('Return') || field.includes('Increase') ? '' : '₹'}${limit.min}${field.includes('Rate') || field.includes('Return') || field.includes('Increase') ? '%' : ''}`
      }));
      return;
    }
    
    if (numValue > limit.max) {
      setErrors(prev => ({
        ...prev,
        [field]: `Maximum value is ${field.includes('Rate') || field.includes('Return') || field.includes('Increase') ? '' : '₹'}${limit.max}${field.includes('Rate') || field.includes('Return') || field.includes('Increase') ? '%' : ''}`
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  // Handle slider change
  const handleSliderChange = (field, value) => {
    const numValue = Number(value);
    
    setFormData(prev => ({
      ...prev,
      [field]: numValue
    }));
    
    setInputFields(prev => ({
      ...prev,
      [field]: numValue.toString()
    }));

    setErrors(prev => ({
      ...prev,
      [field]: ''
    }));
  };

  // Reset to defaults
  const handleReset = () => {
    const defaults = {
      loanAmount: 3000000,
      interestRate: 9,
      monthlyEMI: 30000,
      loanTenure: 20,
      investmentReturn: 13,
      annualIncrease: 10,
    };
    
    setFormData(defaults);
    setInputFields({
      loanAmount: defaults.loanAmount.toString(),
      interestRate: defaults.interestRate.toString(),
      monthlyEMI: defaults.monthlyEMI.toString(),
      loanTenure: defaults.loanTenure.toString(),
      investmentReturn: defaults.investmentReturn.toString(),
      annualIncrease: defaults.annualIncrease.toString(),
    });
    setErrors({});
    setResults(null);
  };

  // Format display value
  const formatDisplayValue = (value, field) => {
    if (field === 'interestRate' || field === 'investmentReturn' || field === 'annualIncrease') return `${value}%`;
    if (field === 'loanTenure') return `${value} years`;
    
    const absValue = Math.abs(value);
    if (absValue >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (absValue >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    if (absValue >= 1000) return `₹${(value / 1000).toFixed(1)} K`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  // Get title based on calculator type
  const getTitle = () => {
    switch (calculatorType) {
      case "emi-loan": return "Total EMI Recovery (from Loan Amount)";
      case "emi-monthly": return "Total EMI Recovery (from Monthly EMI)";
      case "principal": return "Principal Amount Recovery";
      case "interest": return "Total Interest Recovery";
      default: return "Loan Recovery";
    }
  };

  // Get description based on calculator type
  const getDescription = () => {
    switch (calculatorType) {
      case "emi-loan": 
        return `Total EMI payments for ${formatDisplayValue(formData.loanAmount, 'loanAmount')} loan at ${formData.interestRate}% interest`;
      case "emi-monthly": 
        return `Total EMI payments of ${formatDisplayValue(formData.monthlyEMI, 'monthlyEMI')} per month`;
      case "principal": 
        return `Loan principal amount of ${formatDisplayValue(formData.loanAmount, 'loanAmount')}`;
      case "interest": 
        return `Total interest paid on ${formatDisplayValue(formData.loanAmount, 'loanAmount')} loan at ${formData.interestRate}%`;
      default: return "";
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
       

        {/* Calculator Type Selector */}
        <div className="mb-8 bg-gray-100 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            Select What You Want to Recover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => {
                setCalculatorType("emi-loan");
                setEmiSubType("loan-amount");
              }}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                calculatorType === "emi-loan" 
                  ? "border-blue-500 bg-blue-50 shadow-md" 
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <CreditCard className={`w-6 h-6 ${calculatorType === "emi-loan" ? "text-blue-600" : "text-gray-500"}`} />
              <span className="font-medium text-sm text-center">Total EMI (from Loan)</span>
            </button>

            <button
              onClick={() => {
                setCalculatorType("emi-monthly");
                setEmiSubType("monthly-emi");
              }}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                calculatorType === "emi-monthly" 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
              }`}
            >
              <Wallet className={`w-6 h-6 ${calculatorType === "emi-monthly" ? "text-purple-600" : "text-gray-500"}`} />
              <span className="font-medium text-sm text-center">Total EMI (from Monthly)</span>
            </button>

            <button
              onClick={() => setCalculatorType("principal")}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                calculatorType === "principal" 
                  ? "border-green-500 bg-green-50 shadow-md" 
                  : "border-gray-200 hover:border-green-300 hover:bg-green-50"
              }`}
            >
              <Building className={`w-6 h-6 ${calculatorType === "principal" ? "text-green-600" : "text-gray-500"}`} />
              <span className="font-medium text-sm text-center">Principal Only</span>
            </button>

            <button
              onClick={() => setCalculatorType("interest")}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                calculatorType === "interest" 
                  ? "border-orange-500 bg-orange-50 shadow-md" 
                  : "border-gray-200 hover:border-orange-300 hover:bg-orange-50"
              }`}
            >
              <TrendingUp className={`w-6 h-6 ${calculatorType === "interest" ? "text-orange-600" : "text-gray-500"}`} />
              <span className="font-medium text-sm text-center">Interest Only</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 bg-gray-100 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" />
              Loan & Investment Parameters
            </h2>

            {/* EMI Type Selection (only for EMI calculators) */}
            {(calculatorType === "emi-loan" || calculatorType === "emi-monthly") && (
              <div className="mb-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-500" />
                    EMI Calculation Method
                  </label>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setEmiSubType("loan-amount")}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                      emiSubType === "loan-amount" 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Landmark className="w-4 h-4" />
                    Know Loan Amount
                  </button>
                  <button
                    onClick={() => setEmiSubType("monthly-emi")}
                    className={`flex-1 py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                      emiSubType === "monthly-emi" 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    Know Monthly EMI
                  </button>
                </div>
              </div>
            )}
            
            {/* Loan Amount (for EMI-loan, Principal, and Interest) */}
            {(calculatorType === "emi-loan" || calculatorType === "principal" || calculatorType === "interest") && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-blue-500" />
                    Outstanding Loan Amount
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={inputFields.loanAmount}
                      onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                      onBlur={() => handleInputBlur('loanAmount')}
                      className={`w-36 px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.loanAmount ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="Amount"
                    />
                    <span className="text-blue-600 font-semibold w-20 text-right">
                      {formatDisplayValue(formData.loanAmount, 'loanAmount')}
                    </span>
                  </div>
                </div>
                {errors.loanAmount && (
                  <p className="text-red-500 text-sm mb-2">{errors.loanAmount}</p>
                )}
                <input
                  type="range"
                  min={getLimits('loanAmount').min}
                  max={getLimits('loanAmount').max}
                  step={100000}
                  value={formData.loanAmount}
                  onChange={(e) => handleSliderChange('loanAmount', e.target.value)}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1 L</span>
                  <span>₹10 Cr</span>
                </div>
              </div>
            )}

            {/* Interest Rate (for EMI-loan and Interest) */}
            {(calculatorType === "emi-loan" || calculatorType === "interest") && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <Percent className="w-4 h-4 text-green-500" />
                    Rate of Interest (%)
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={inputFields.interestRate}
                      onChange={(e) => handleInputChange('interestRate', e.target.value)}
                      onBlur={() => handleInputBlur('interestRate')}
                      className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.interestRate ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="%"
                    />
                    <span className="text-blue-600 font-semibold w-20 text-right">
                      {formData.interestRate}%
                    </span>
                  </div>
                </div>
                {errors.interestRate && (
                  <p className="text-red-500 text-sm mb-2">{errors.interestRate}</p>
                )}
                <input
                  type="range"
                  min={getLimits('interestRate').min}
                  max={getLimits('interestRate').max}
                  step={0.1}
                  value={formData.interestRate}
                  onChange={(e) => handleSliderChange('interestRate', e.target.value)}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>
            )}

            {/* Monthly EMI (for EMI-monthly) */}
            {emiSubType === "monthly-emi" && calculatorType === "emi-monthly" && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-purple-500" />
                    Monthly EMI
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={inputFields.monthlyEMI}
                      onChange={(e) => handleInputChange('monthlyEMI', e.target.value)}
                      onBlur={() => handleInputBlur('monthlyEMI')}
                      className={`w-36 px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.monthlyEMI ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                      }`}
                      placeholder="Amount"
                    />
                    <span className="text-blue-600 font-semibold w-20 text-right">
                      {formatDisplayValue(formData.monthlyEMI, 'monthlyEMI')}
                    </span>
                  </div>
                </div>
                {errors.monthlyEMI && (
                  <p className="text-red-500 text-sm mb-2">{errors.monthlyEMI}</p>
                )}
                <input
                  type="range"
                  min={getLimits('monthlyEMI').min}
                  max={getLimits('monthlyEMI').max}
                  step={1000}
                  value={formData.monthlyEMI}
                  onChange={(e) => handleSliderChange('monthlyEMI', e.target.value)}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹1K</span>
                  <span>₹5 L</span>
                </div>
              </div>
            )}

            {/* Loan Tenure (Common for all) */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  Loan Tenure (Years)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.loanTenure}
                    onChange={(e) => handleInputChange('loanTenure', e.target.value)}
                    onBlur={() => handleInputBlur('loanTenure')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.loanTenure ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Years"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.loanTenure} years
                  </span>
                </div>
              </div>
              {errors.loanTenure && (
                <p className="text-red-500 text-sm mb-2">{errors.loanTenure}</p>
              )}
              <input
                type="range"
                min={getLimits('loanTenure').min}
                max={getLimits('loanTenure').max}
                step={1}
                value={formData.loanTenure}
                onChange={(e) => handleSliderChange('loanTenure', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 Year</span>
                <span>40 Years</span>
              </div>
            </div>

            {/* Investment Return */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Expected Return on Investment (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.investmentReturn}
                    onChange={(e) => handleInputChange('investmentReturn', e.target.value)}
                    onBlur={() => handleInputBlur('investmentReturn')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.investmentReturn ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="%"
                    disabled={calculatorType === "principal"}
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.investmentReturn}%
                    {calculatorType === "principal" && <Lock className="w-3 h-3 inline ml-1" />}
                  </span>
                </div>
              </div>
              {errors.investmentReturn && (
                <p className="text-red-500 text-sm mb-2">{errors.investmentReturn}</p>
              )}
              {calculatorType !== "principal" ? (
                <>
                  <input
                    type="range"
                    min={getLimits('investmentReturn').min}
                    max={getLimits('investmentReturn').max}
                    step={0.5}
                    value={formData.investmentReturn}
                    onChange={(e) => handleSliderChange('investmentReturn', e.target.value)}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>6%</span>
                    <span>18%</span>
                  </div>
                </>
              ) : (
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mt-2">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" />
                    Fixed at 13% as per your requirement
                  </p>
                </div>
              )}
            </div>

            {/* Annual Increase */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  Annual Increase in Investment (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.annualIncrease}
                    onChange={(e) => handleInputChange('annualIncrease', e.target.value)}
                    onBlur={() => handleInputBlur('annualIncrease')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.annualIncrease ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="%"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.annualIncrease}%
                  </span>
                </div>
              </div>
              {errors.annualIncrease && (
                <p className="text-red-500 text-sm mb-2">{errors.annualIncrease}</p>
              )}
              <input
                type="range"
                min={getLimits('annualIncrease').min}
                max={getLimits('annualIncrease').max}
                step={1}
                value={formData.annualIncrease}
                onChange={(e) => handleSliderChange('annualIncrease', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0%</span>
                <span>30%</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Reset to Default Values
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Main Result */}
                <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    {getTitle()}
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.targetAmount)}</div>
                  <p className="opacity-90 text-sm">{getDescription()}</p>
                </div>

                {/* Monthly Investment Required */}
                <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                    <ArrowUp className="w-5 h-5" />
                    Monthly Investment Required
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.monthlyInvestment)}</div>
                  <p className="opacity-90 text-sm">First year monthly investment</p>
                </div>

                {/* EMI Details (for EMI-loan and Interest) */}
                {(calculatorType === "emi-loan" || calculatorType === "interest") && results.emiDetails && (
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                      Loan EMI Breakdown
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Monthly EMI</span>
                        <span className="font-semibold text-purple-600">
                          {formatCurrency(Math.round(results.emiDetails.emi))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600">Total Payment</span>
                        <span className="font-semibold text-blue-600">
                          {formatCurrency(Math.round(results.emiDetails.totalPaid))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Interest</span>
                        <span className="font-semibold text-orange-600">
                          {formatCurrency(Math.round(results.emiDetails.totalInterest))}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Investment Strategy */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Investment Strategy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">First Year Monthly</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(results.monthlyInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Annual Increase</span>
                      <span className="font-semibold text-blue-600">
                        {formData.annualIncrease}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-semibold text-purple-600">
                        {formData.investmentReturn}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Investment Period</span>
                      <span className="font-semibold text-orange-600">
                        {results.loanTenure} years
                      </span>
                    </div>
                  </div>
                </div>

                {/* Year 1-5 Preview */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">First 5 Years Preview</h3>
                  <div className="space-y-2">
                    {[1,2,3,4,5].map((year) => {
                      const monthly = results.monthlyInvestment * Math.pow(1 + formData.annualIncrease/100, year-1);
                      const annual = monthly * 12;
                      return (
                        <div key={year} className="flex justify-between items-center text-sm py-1 border-b border-gray-100 last:border-0">
                          <span className="text-gray-600">Year {year}</span>
                          <span className="font-medium text-gray-800">{formatCurrency(Math.round(monthly))}/month</span>
                          <span className="text-gray-500">({formatCurrency(Math.round(annual))}/year)</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Home className="w-16 h-16 mx-auto text-blue-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    Adjust Parameters
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Adjust the parameters above to see your investment strategy
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl p-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">Common Loan Amounts</h3>
          <div className="flex flex-wrap gap-2">
            {[1000000, 3000000, 5000000, 7500000, 10000000].map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setFormData(prev => ({ ...prev, loanAmount: amount }));
                  setInputFields(prev => ({ ...prev, loanAmount: amount.toString() }));
                }}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                {formatDisplayValue(amount, 'loanAmount')}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <h3 className="text-sm font-semibold text-gray-500 w-full mb-2">Common Tenures</h3>
            {[10, 15, 20, 25, 30].map((years) => (
              <button
                key={years}
                onClick={() => {
                  setFormData(prev => ({ ...prev, loanTenure: years }));
                  setInputFields(prev => ({ ...prev, loanTenure: years.toString() }));
                }}
                className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
              >
                {years} Years
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanRecoveryCalculator;