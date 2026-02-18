"use client";
import { useState, useEffect } from "react";
import {
  Calculator,
  TrendingUp,
  IndianRupee,
  Calendar,
  Percent,
  Target,
  Zap,
  ArrowUp,
  Wallet,
  Landmark,
  Users,
  Clock,
  Award,
  AlertCircle,
} from "lucide-react";

const RetirementCorpusCalculator = () => {
  // Default values
  const [formData, setFormData] = useState({
    currentMonthlyExpense: 100000,
    futureInflation: 6,
    currentAge: 35,
    retirementAge: 60,
    lifeExpectancy: 90,
    earningYearsReturn: 12,
    retirementYearsReturn: 7,
    currentWealth: 1500000,
  });

  // Separate state for input fields to prevent re-renders during typing
  const [inputFields, setInputFields] = useState({
    currentMonthlyExpense: "100000",
    futureInflation: "6",
    currentAge: "35",
    retirementAge: "60",
    lifeExpectancy: "90",
    earningYearsReturn: "12",
    retirementYearsReturn: "7",
    currentWealth: "1500000",
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Validation limits
  const limits = {
    currentMonthlyExpense: { min: 10000, max: 10000000, default: 100000 },
    futureInflation: { min: 2, max: 15, default: 6 },
    currentAge: { min: 18, max: 80, default: 35 },
    retirementAge: { min: 30, max: 100, default: 60 },
    lifeExpectancy: { min: 50, max: 120, default: 90 },
    earningYearsReturn: { min: 4, max: 20, default: 12 },
    retirementYearsReturn: { min: 4, max: 15, default: 7 },
    currentWealth: { min: 0, max: 1000000000, default: 1500000 },
  };

  // Format currency
  const formatCurrency = (value) => {
    if (Math.abs(value) < 0.01) return '₹0';
    const formatter = new Intl.NumberFormat('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return `₹${formatter.format(Math.round(value))}`;
  };

  // Auto-calculate on formData change
  useEffect(() => {
    // Check if there are any validation errors
    let hasErrors = false;
    
    Object.keys(formData).forEach(field => {
      const value = formData[field];
      const limit = limits[field];
      
      if (value < limit.min || value > limit.max) {
        hasErrors = true;
      }
    });

    if (formData.retirementAge <= formData.currentAge) {
      hasErrors = true;
    }

    if (formData.lifeExpectancy <= formData.retirementAge) {
      hasErrors = true;
    }

    if (!hasErrors) {
      calculateRetirementCorpus();
    }
  }, [formData]);

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

    const limit = limits[field];
    if (numValue < limit.min) {
      setErrors(prev => ({
        ...prev,
        [field]: `Minimum value is ${field.includes('Expense') || field.includes('Wealth') ? '₹' : ''}${limit.min}${field.includes('Inflation') || field.includes('Return') ? '%' : ''}`
      }));
      return;
    }
    
    if (numValue > limit.max) {
      setErrors(prev => ({
        ...prev,
        [field]: `Maximum value is ${field.includes('Expense') || field.includes('Wealth') ? '₹' : ''}${limit.max}${field.includes('Inflation') || field.includes('Return') ? '%' : ''}`
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
      currentMonthlyExpense: limits.currentMonthlyExpense.default,
      futureInflation: limits.futureInflation.default,
      currentAge: limits.currentAge.default,
      retirementAge: limits.retirementAge.default,
      lifeExpectancy: limits.lifeExpectancy.default,
      earningYearsReturn: limits.earningYearsReturn.default,
      retirementYearsReturn: limits.retirementYearsReturn.default,
      currentWealth: limits.currentWealth.default,
    };
    
    setFormData(defaults);
    setInputFields({
      currentMonthlyExpense: defaults.currentMonthlyExpense.toString(),
      futureInflation: defaults.futureInflation.toString(),
      currentAge: defaults.currentAge.toString(),
      retirementAge: defaults.retirementAge.toString(),
      lifeExpectancy: defaults.lifeExpectancy.toString(),
      earningYearsReturn: defaults.earningYearsReturn.toString(),
      retirementYearsReturn: defaults.retirementYearsReturn.toString(),
      currentWealth: defaults.currentWealth.toString(),
    });
    setErrors({});
    setResults(null);
  };

  // Calculate retirement corpus
  const calculateRetirementCorpus = () => {
    const {
      currentMonthlyExpense,
      futureInflation,
      currentAge,
      retirementAge,
      lifeExpectancy,
      earningYearsReturn,
      retirementYearsReturn,
      currentWealth,
    } = formData;

    // Step 1: Calculate time periods
    const yearsToRetirement = retirementAge - currentAge;
    const retirementYears = lifeExpectancy - retirementAge;
    
    // Step 2: Calculate future monthly expense at retirement
    const futureMonthlyExpense = currentMonthlyExpense * 
      Math.pow(1 + futureInflation / 100, yearsToRetirement);

    // Step 3: Calculate retirement corpus using growing annuity formula
    const annualExpenseAtRetirement = futureMonthlyExpense * 12;
    
    // Function to calculate corpus using growing annuity present value formula
    const calculateCorpus = (annualExpense, inflationRate, returnRate, years) => {
      const g = inflationRate / 100;
      const r = returnRate / 100;
      
      // If return rate equals inflation rate, use simple formula
      if (Math.abs(r - g) < 0.00001) {
        return annualExpense * years;
      }
      
      const factor = (1 - Math.pow((1 + g) / (1 + r), years)) / (r - g);
      return annualExpense * factor;
    };

    const corpusNeeded = calculateCorpus(
      annualExpenseAtRetirement,
      futureInflation,
      retirementYearsReturn,
      retirementYears
    );

    // Step 4: Calculate future value of current wealth
    const futureValueOfCurrentWealth = currentWealth * 
      Math.pow(1 + earningYearsReturn / 100, yearsToRetirement);

    // Step 5: Calculate additional corpus needed
    const additionalCorpusNeeded = Math.max(0, corpusNeeded - futureValueOfCurrentWealth);

    // Step 6: Calculate monthly SIP required
    const calculateMonthlySIP = (futureValue, annualReturn, years) => {
      if (futureValue <= 0) return 0;
      
      const monthlyRate = annualReturn / 100 / 12;
      const totalMonths = years * 12;
      
      if (monthlyRate === 0) {
        return futureValue / totalMonths;
      }
      
      // Future value factor for SIP (beginning of period)
      const factor = (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
      const beginningFactor = factor * (1 + monthlyRate);
      return futureValue / beginningFactor;
    };

    const monthlySIP = calculateMonthlySIP(
      additionalCorpusNeeded,
      earningYearsReturn,
      yearsToRetirement
    );

    // Calculate inflation multiplier
    const inflationMultiplier = Math.pow(1 + futureInflation / 100, yearsToRetirement);

    // Calculate corpus sufficiency percentage
    const corpusSufficiency = (futureValueOfCurrentWealth / corpusNeeded) * 100;

    setResults({
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
      corpusNeeded: Math.round(corpusNeeded),
      futureValueOfCurrentWealth: Math.round(futureValueOfCurrentWealth),
      monthlySIP: Math.round(monthlySIP),
      additionalCorpusNeeded: Math.round(additionalCorpusNeeded),
      yearsToRetirement,
      retirementYears,
      inflationMultiplier: inflationMultiplier.toFixed(2),
      corpusSufficiency: Math.min(100, corpusSufficiency).toFixed(1),
      isCorpusSufficient: futureValueOfCurrentWealth >= corpusNeeded,
    });
  };

  // Format display value
  const formatDisplayValue = (value, field) => {
    if (field.includes('Inflation') || field.includes('Return')) return `${value}%`;
    if (field.includes('Age') || field.includes('Expectancy')) return `${value} years`;
    
    const absValue = Math.abs(value);
    if (absValue >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
    if (absValue >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
    if (absValue >= 1000) return `₹${(value / 1000).toFixed(1)} K`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Retirement Corpus Calculator
            </h1>
            <Award className="w-10 h-10 text-green-600" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your retirement savings with inflation-adjusted calculations and build a corpus for a secure future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" />
              Retirement Parameters
            </h2>
            
            {/* Current Monthly Expense */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-blue-500" />
                  Current Monthly Expense
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.currentMonthlyExpense}
                    onChange={(e) => handleInputChange('currentMonthlyExpense', e.target.value)}
                    onBlur={() => handleInputBlur('currentMonthlyExpense')}
                    className={`w-36 px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.currentMonthlyExpense ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Amount"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formatDisplayValue(formData.currentMonthlyExpense, 'currentMonthlyExpense')}
                  </span>
                </div>
              </div>
              {errors.currentMonthlyExpense && (
                <p className="text-red-500 text-sm mb-2">{errors.currentMonthlyExpense}</p>
              )}
              <input
                type="range"
                min={limits.currentMonthlyExpense.min}
                max={limits.currentMonthlyExpense.max}
                step={1000}
                value={formData.currentMonthlyExpense}
                onChange={(e) => handleSliderChange('currentMonthlyExpense', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10K</span>
                <span>₹1 Cr</span>
              </div>
            </div>

            {/* Future Inflation */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  Future Inflation Assumed (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.futureInflation}
                    onChange={(e) => handleInputChange('futureInflation', e.target.value)}
                    onBlur={() => handleInputBlur('futureInflation')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.futureInflation ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="%"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.futureInflation}%
                  </span>
                </div>
              </div>
              {errors.futureInflation && (
                <p className="text-red-500 text-sm mb-2">{errors.futureInflation}</p>
              )}
              <input
                type="range"
                min={limits.futureInflation.min}
                max={limits.futureInflation.max}
                step={0.5}
                value={formData.futureInflation}
                onChange={(e) => handleSliderChange('futureInflation', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Current Age */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-500" />
                  Current Age (Years)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.currentAge}
                    onChange={(e) => handleInputChange('currentAge', e.target.value)}
                    onBlur={() => handleInputBlur('currentAge')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.currentAge ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Years"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.currentAge} years
                  </span>
                </div>
              </div>
              {errors.currentAge && (
                <p className="text-red-500 text-sm mb-2">{errors.currentAge}</p>
              )}
              <input
                type="range"
                min={limits.currentAge.min}
                max={limits.currentAge.max}
                step={1}
                value={formData.currentAge}
                onChange={(e) => handleSliderChange('currentAge', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>18</span>
                <span>80</span>
              </div>
            </div>

            {/* Retirement Age */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  Retirement Age (Years)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.retirementAge}
                    onChange={(e) => handleInputChange('retirementAge', e.target.value)}
                    onBlur={() => handleInputBlur('retirementAge')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.retirementAge ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Years"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.retirementAge} years
                  </span>
                </div>
              </div>
              {errors.retirementAge && (
                <p className="text-red-500 text-sm mb-2">{errors.retirementAge}</p>
              )}
              <input
                type="range"
                min={Math.max(formData.currentAge + 1, limits.retirementAge.min)}
                max={limits.retirementAge.max}
                step={1}
                value={formData.retirementAge}
                onChange={(e) => handleSliderChange('retirementAge', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{Math.max(formData.currentAge + 1, limits.retirementAge.min)}</span>
                <span>100</span>
              </div>
            </div>

            {/* Life Expectancy */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  Life Expectancy (Years)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.lifeExpectancy}
                    onChange={(e) => handleInputChange('lifeExpectancy', e.target.value)}
                    onBlur={() => handleInputBlur('lifeExpectancy')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.lifeExpectancy ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Years"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.lifeExpectancy} years
                  </span>
                </div>
              </div>
              {errors.lifeExpectancy && (
                <p className="text-red-500 text-sm mb-2">{errors.lifeExpectancy}</p>
              )}
              <input
                type="range"
                min={Math.max(formData.retirementAge + 1, limits.lifeExpectancy.min)}
                max={limits.lifeExpectancy.max}
                step={1}
                value={formData.lifeExpectancy}
                onChange={(e) => handleSliderChange('lifeExpectancy', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{Math.max(formData.retirementAge + 1, limits.lifeExpectancy.min)}</span>
                <span>120</span>
              </div>
            </div>

            {/* Earning Years Return */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  Returns During Earning Years (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.earningYearsReturn}
                    onChange={(e) => handleInputChange('earningYearsReturn', e.target.value)}
                    onBlur={() => handleInputBlur('earningYearsReturn')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.earningYearsReturn ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="%"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.earningYearsReturn}%
                  </span>
                </div>
              </div>
              {errors.earningYearsReturn && (
                <p className="text-red-500 text-sm mb-2">{errors.earningYearsReturn}</p>
              )}
              <input
                type="range"
                min={limits.earningYearsReturn.min}
                max={limits.earningYearsReturn.max}
                step={0.5}
                value={formData.earningYearsReturn}
                onChange={(e) => handleSliderChange('earningYearsReturn', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>4%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Retirement Years Return */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-500" />
                  Returns During Retirement Years (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.retirementYearsReturn}
                    onChange={(e) => handleInputChange('retirementYearsReturn', e.target.value)}
                    onBlur={() => handleInputBlur('retirementYearsReturn')}
                    className={`w-36 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.retirementYearsReturn ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="%"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formData.retirementYearsReturn}%
                  </span>
                </div>
              </div>
              {errors.retirementYearsReturn && (
                <p className="text-red-500 text-sm mb-2">{errors.retirementYearsReturn}</p>
              )}
              <input
                type="range"
                min={limits.retirementYearsReturn.min}
                max={limits.retirementYearsReturn.max}
                step={0.5}
                value={formData.retirementYearsReturn}
                onChange={(e) => handleSliderChange('retirementYearsReturn', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>4%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Current Wealth */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-700 font-medium flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-pink-500" />
                  Current Wealth for Retirement
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputFields.currentWealth}
                    onChange={(e) => handleInputChange('currentWealth', e.target.value)}
                    onBlur={() => handleInputBlur('currentWealth')}
                    className={`w-36 px-3 py-2 pl-7 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.currentWealth ? 'border-red-500' : 'border-gray-300 focus:ring-blue-200'
                    }`}
                    placeholder="Amount"
                  />
                  <span className="text-blue-600 font-semibold w-20 text-right">
                    {formatDisplayValue(formData.currentWealth, 'currentWealth')}
                  </span>
                </div>
              </div>
              {errors.currentWealth && (
                <p className="text-red-500 text-sm mb-2">{errors.currentWealth}</p>
              )}
              <input
                type="range"
                min={limits.currentWealth.min}
                max={limits.currentWealth.max}
                step={100000}
                value={formData.currentWealth}
                onChange={(e) => handleSliderChange('currentWealth', e.target.value)}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>₹100 Cr</span>
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
                {/* Main Result - Corpus Required */}
                <div className="bg-linear-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Retirement Corpus Required
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.corpusNeeded)}</div>
                  <p className="opacity-90 text-sm">
                    To sustain {results.retirementYears} years of retirement
                  </p>
                  <p className="opacity-75 text-xs mt-2">
                    Inflation multiplier: {results.inflationMultiplier}x
                  </p>
                </div>

                {/* Monthly Expense at Retirement */}
                <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-6 text-white">
                  <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                    <Wallet className="w-5 h-5" />
                    Monthly Expense at Retirement
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.futureMonthlyExpense)}</div>
                  <p className="opacity-90 text-sm">
                    Adjusted for {formData.futureInflation}% inflation
                  </p>
                </div>

                {/* Corpus Sufficiency */}
                <div className={`rounded-2xl shadow-xl p-6 text-white ${
                  results.isCorpusSufficient 
                    ? 'bg-linear-to-br from-green-600 to-emerald-600' 
                    : 'bg-linear-to-br from-orange-600 to-red-600'
                }`}>
                  <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {results.isCorpusSufficient ? 'Corpus Sufficient!' : 'Additional Corpus Needed'}
                  </h3>
                  {results.isCorpusSufficient ? (
                    <>
                      <div className="text-2xl font-bold mb-2">You're on track!</div>
                      <p className="opacity-90 text-sm">
                        Your current wealth will grow to cover {results.corpusSufficiency}% of your retirement corpus
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.additionalCorpusNeeded)}</div>
                      <p className="opacity-90 text-sm">
                        Additional amount needed beyond current wealth
                      </p>
                    </>
                  )}
                </div>

                {/* Monthly SIP Required */}
                {!results.isCorpusSufficient && (
                  <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
                    <h3 className="text-lg opacity-90 mb-2 flex items-center gap-2">
                      <ArrowUp className="w-5 h-5" />
                      Monthly SIP Required
                    </h3>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{formatCurrency(results.monthlySIP)}</div>
                    <p className="opacity-90 text-sm">
                      For {results.yearsToRetirement} years at {formData.earningYearsReturn}% returns
                    </p>
                  </div>
                )}

                {/* Timeline Summary */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Retirement Timeline
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Years to Retirement</span>
                      <span className="font-bold text-blue-600 text-xl">{results.yearsToRetirement} years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Retirement Duration</span>
                      <span className="font-bold text-purple-600 text-xl">{results.retirementYears} years</span>
                    </div>
                    <div className="relative pt-2">
                      <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="bg-blue-600 rounded-l-full"
                          style={{ width: `${(formData.currentAge / (formData.lifeExpectancy - formData.currentAge)) * 100}%` }}
                        ></div>
                        <div className="bg-green-600 flex-1"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Current Age: {formData.currentAge}</span>
                        <span>Retirement: {formData.retirementAge}</span>
                        <span>Life Exp: {formData.lifeExpectancy}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Wealth Growth */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Wealth Growth</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Current Wealth</span>
                      <span className="font-semibold text-gray-800">
                        {formatCurrency(formData.currentWealth)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-600">Future Value at Retirement</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(results.futureValueOfCurrentWealth)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Growth Multiple</span>
                      <span className="font-semibold text-purple-600">
                        {(results.futureValueOfCurrentWealth / formData.currentWealth || 0).toFixed(2)}x
                      </span>
                    </div>
                  </div>
                </div>

                {/* Return Assumptions */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Return Assumptions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg text-center">
                      <p className="text-xs text-gray-600">Earning Years</p>
                      <p className="text-lg font-bold text-blue-700">{formData.earningYearsReturn}%</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <p className="text-xs text-gray-600">Retirement Years</p>
                      <p className="text-lg font-bold text-green-700">{formData.retirementYearsReturn}%</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg text-center col-span-2">
                      <p className="text-xs text-gray-600">Inflation Assumed</p>
                      <p className="text-lg font-bold text-orange-700">{formData.futureInflation}%</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto text-blue-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2">
                    Adjust Parameters
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Adjust the parameters above to see your retirement analysis
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl p-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-3">Common Retirement Scenarios</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Early Starter', age: 25, expense: 50000, retirement: 50 },
              { label: 'Mid Career', age: 35, expense: 100000, retirement: 60 },
              { label: 'Late Starter', age: 45, expense: 150000, retirement: 65 },
            ].map((scenario, index) => (
              <button
                key={index}
                onClick={() => {
                  setFormData(prev => ({ 
                    ...prev, 
                    currentAge: scenario.age,
                    currentMonthlyExpense: scenario.expense,
                    retirementAge: scenario.retirement
                  }));
                  setInputFields({
                    ...inputFields,
                    currentAge: scenario.age.toString(),
                    currentMonthlyExpense: scenario.expense.toString(),
                    retirementAge: scenario.retirement.toString(),
                  });
                }}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium"
              >
                {scenario.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <h3 className="text-sm font-semibold text-gray-500 w-full mb-2">Lifestyle Options</h3>
            {[
              { label: 'Simple Lifestyle', expense: 50000 },
              { label: 'Comfortable', expense: 100000 },
              { label: 'Luxury', expense: 200000 },
              { label: 'Premium', expense: 500000 },
            ].map((lifestyle, index) => (
              <button
                key={index}
                onClick={() => {
                  setFormData(prev => ({ ...prev, currentMonthlyExpense: lifestyle.expense }));
                  setInputFields(prev => ({ ...prev, currentMonthlyExpense: lifestyle.expense.toString() }));
                }}
                className="px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
              >
                {lifestyle.label}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-xs text-gray-600 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> All calculations are approximate and for illustration purposes only. 
              Actual returns may vary based on market conditions. Consider consulting a financial advisor 
              for personalized retirement planning.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetirementCorpusCalculator;