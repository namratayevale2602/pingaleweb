"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Home,
  TrendingUp,
  IndianRupee,
  Calendar,
  Percent,
  Zap,
  ArrowUp,
  LineChart,
  Wallet,
  Landmark,
  DollarSign,
  PieChart,
  Rocket,
  TrendingDown,
  CreditCard,
  Shield,
  Target,
  BarChart3,
  ChevronRight,
  Building,
  Lock,
} from "lucide-react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const HomeLoanRecoveryCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("emi-loan"); // 'emi-loan', 'emi-monthly', 'principal', 'interest'
  const [emiSubType, setEmiSubType] = useState("loan-amount"); // 'loan-amount' or 'monthly-emi'

  // Common fields
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

  const [results, setResults] = useState(null);
  const [growthChartData, setGrowthChartData] = useState(null);
  const [breakdownChartData, setBreakdownChartData] = useState(null);

  useEffect(() => {
    calculateResults();
  }, [calculatorType, emiSubType, formData]);

  const calculateResults = () => {
    let targetAmount = 0;
    let monthlyInvestment = 0;
    let details = {};

    // Calculate target amount based on calculator type
    switch (calculatorType) {
      case "emi-loan":
        targetAmount = calculateTotalEMIFromLoan();
        details.title = "Total EMI Recovery";
        details.description = `Total EMI payments for ₹${formatNumber(formData.loanAmount)} loan at ${formData.interestRate}% interest`;
        break;
        
      case "emi-monthly":
        targetAmount = calculateTotalEMIFromMonthly();
        details.title = "Total EMI Recovery";
        details.description = `Total EMI payments of ₹${formatNumber(formData.monthlyEMI)} per month`;
        break;
        
      case "principal":
        targetAmount = formData.loanAmount;
        details.title = "Principal Recovery";
        details.description = `Loan principal amount of ₹${formatNumber(formData.loanAmount)}`;
        break;
        
      case "interest":
        const emiDetails = calculateEMIDetails();
        targetAmount = emiDetails.totalInterest;
        details.title = "Interest Recovery";
        details.description = `Total interest paid on ₹${formatNumber(formData.loanAmount)} loan at ${formData.interestRate}%`;
        break;
    }

    // Calculate monthly investment needed
    monthlyInvestment = calculateMonthlyInvestment(targetAmount);

    setResults({
      targetAmount: Math.round(targetAmount),
      monthlyInvestment: Math.round(monthlyInvestment),
      loanTenure: formData.loanTenure,
      details,
      emiDetails: calculatorType === "emi-loan" || calculatorType === "interest" ? calculateEMIDetails() : null,
    });

    // Generate charts
    generateCharts(targetAmount, monthlyInvestment);
  };

  const calculateTotalEMIFromLoan = () => {
    const { loanAmount, interestRate, loanTenure } = formData;
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTenure * 12;
    
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return emi * months;
  };

  const calculateTotalEMIFromMonthly = () => {
    return formData.monthlyEMI * 12 * formData.loanTenure;
  };

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

  const generateCharts = (targetAmount, monthlyInvestment) => {
    const { loanTenure, investmentReturn, annualIncrease } = formData;
    
    // Growth projection chart
    const labels = [];
    const investmentValues = [];
    const goalValues = [];
    
    let accumulated = 0;
    let monthlyInv = monthlyInvestment;
    
    for (let year = 0; year <= loanTenure; year++) {
      labels.push(`Year ${year}`);
      goalValues.push(targetAmount);
      
      // Calculate investment value at end of each year
      if (year > 0) {
        // Add year's investments
        const yearlyInvestment = monthlyInv * 12;
        accumulated = (accumulated + yearlyInvestment) * Math.pow(1 + investmentReturn / 100, 1);
        monthlyInv *= (1 + annualIncrease / 100); // Increase for next year
      }
      investmentValues.push(accumulated);
    }
    
    setGrowthChartData({
      labels,
      datasets: [
        {
          label: "Target Amount",
          data: goalValues,
          borderColor: "#ef4444",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          borderWidth: 2,
          fill: false,
          borderDash: [5, 5],
        },
        {
          label: "Your Investment Growth",
          data: investmentValues,
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          borderWidth: 3,
          fill: true,
          tension: 0.4,
        },
      ],
    });

    // Breakdown chart
    if (calculatorType === "emi-loan" || calculatorType === "interest") {
      const emiDetails = calculateEMIDetails();
      setBreakdownChartData({
        labels: ["Principal", "Interest"],
        datasets: [
          {
            data: [formData.loanAmount, emiDetails.totalInterest],
            backgroundColor: ["#3b82f6", "#f59e0b"],
            borderColor: ["#2563eb", "#d97706"],
            borderWidth: 2,
          },
        ],
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const formatNumber = (num) => {
    if (num >= 10000000) {
      return (num / 10000000).toFixed(2) + " Cr";
    } else if (num >= 100000) {
      return (num / 100000).toFixed(1) + " L";
    }
    return new Intl.NumberFormat("en-IN").format(Math.round(num));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get field limits based on calculator type
  const getFieldLimits = (fieldName) => {
    const limits = {
      // EMI with Loan Amount
      'emi-loan': {
        loanAmount: { min: 1000000, max: 10000000, step: 50000 },
        interestRate: { min: 5, max: 15, step: 0.1 },
        loanTenure: { min: 5, max: 40, step: 1 },
        investmentReturn: { min: 6, max: 18, step: 0.5 },
        annualIncrease: { min: 0, max: 50, step: 1 }
      },
      
      // EMI with Monthly EMI
      'emi-monthly': {
        monthlyEMI: { min: 10000, max: 200000, step: 1000 },
        loanTenure: { min: 5, max: 40, step: 1 },
        investmentReturn: { min: 6, max: 18, step: 0.5 },
        annualIncrease: { min: 0, max: 50, step: 1 }
      },
      
      // Principal
      'principal': {
        loanAmount: { min: 1000000, max: 10000000, step: 50000 },
        loanTenure: { min: 5, max: 40, step: 1 },
        investmentReturn: { min: 13, max: 13, step: 0.5 }, // Fixed at 13%
        annualIncrease: { min: 0, max: 50, step: 1 }
      },
      
      // Interest
      'interest': {
        loanAmount: { min: 1000000, max: 10000000, step: 50000 },
        interestRate: { min: 5, max: 15, step: 0.1 },
        loanTenure: { min: 5, max: 40, step: 1 },
        investmentReturn: { min: 6, max: 18, step: 0.5 },
        annualIncrease: { min: 0, max: 50, step: 1 }
      }
    };

    return limits[calculatorType][fieldName] || {};
  };

  // Get presets based on calculator type
  const getPresets = (fieldName) => {
    const presets = {
      loanAmount: [1000000, 3000000, 5000000, 7500000, 10000000],
      monthlyEMI: [10000, 30000, 50000, 100000, 150000],
      interestRate: [5, 7.5, 9, 10.5, 12, 15],
      loanTenure: [10, 15, 20, 25, 30, 40],
      investmentReturn: calculatorType === 'principal' ? [13] : [8, 10, 12, 13, 15, 18],
      annualIncrease: [0, 5, 10, 15, 20, 30, 50]
    };
    
    return presets[fieldName] || [];
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl">
      <motion.div
        className="flex flex-col items-center justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <Home className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Home Loan Recovery Calculator
          </h1>
          <Shield className="w-10 h-10 text-green-600" />
        </div>
        <p className="text-gray-600 text-center max-w-2xl">
          Calculate how much to invest monthly to recover your home loan costs
        </p>
      </motion.div>

      {/* Calculator Type Selector */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Calculator className="w-6 h-6 text-blue-500" />
          Select Calculation Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button
            onClick={() => {
              setCalculatorType("emi-loan");
              setEmiSubType("loan-amount");
            }}
            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${calculatorType === "emi-loan" ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"}`}
          >
            <CreditCard className={`w-8 h-8 ${calculatorType === "emi-loan" ? "text-blue-600" : "text-gray-500"}`} />
            <div className="text-center">
              <h3 className="font-semibold">Total EMI</h3>
              <p className="text-sm text-gray-600">From Loan Details</p>
            </div>
          </button>

          <button
            onClick={() => {
              setCalculatorType("emi-monthly");
              setEmiSubType("monthly-emi");
            }}
            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${calculatorType === "emi-monthly" ? "border-purple-500 bg-purple-50 shadow-md" : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"}`}
          >
            <Wallet className={`w-8 h-8 ${calculatorType === "emi-monthly" ? "text-purple-600" : "text-gray-500"}`} />
            <div className="text-center">
              <h3 className="font-semibold">Total EMI</h3>
              <p className="text-sm text-gray-600">From Monthly EMI</p>
            </div>
          </button>

          <button
            onClick={() => setCalculatorType("principal")}
            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${calculatorType === "principal" ? "border-green-500 bg-green-50 shadow-md" : "border-gray-200 hover:border-green-300 hover:bg-green-50"}`}
          >
            <Building className={`w-8 h-8 ${calculatorType === "principal" ? "text-green-600" : "text-gray-500"}`} />
            <div className="text-center">
              <h3 className="font-semibold">Principal Only</h3>
              <p className="text-sm text-gray-600">Loan Amount Recovery</p>
            </div>
          </button>

          <button
            onClick={() => setCalculatorType("interest")}
            className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-3 ${calculatorType === "interest" ? "border-orange-500 bg-orange-50 shadow-md" : "border-gray-200 hover:border-orange-300 hover:bg-orange-50"}`}
          >
            <TrendingUp className={`w-8 h-8 ${calculatorType === "interest" ? "text-orange-600" : "text-gray-500"}`} />
            <div className="text-center">
              <h3 className="font-semibold">Interest Only</h3>
              <p className="text-sm text-gray-600">Interest Amount Recovery</p>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 border-b border-blue-100 pb-4">
            <Calculator className="w-7 h-7 text-blue-500" />
            Loan & Investment Parameters
          </h2>

          <div className="space-y-8">
            {/* EMI Type Selection (only for EMI calculators) */}
            {(calculatorType === "emi-loan" || calculatorType === "emi-monthly") && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-700 mb-3">EMI Calculation Method</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setEmiSubType("loan-amount")}
                    className={`flex-1 py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${emiSubType === "loan-amount" ? "bg-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    <Landmark className="w-4 h-4" />
                    I Know Loan Amount
                  </button>
                  <button
                    onClick={() => setEmiSubType("monthly-emi")}
                    className={`flex-1 py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${emiSubType === "monthly-emi" ? "bg-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    <CreditCard className="w-4 h-4" />
                    I Know Monthly EMI
                  </button>
                </div>
              </div>
            )}

            {/* Loan Amount (for EMI-loan, Principal, and Interest) */}
            {(calculatorType === "emi-loan" || calculatorType === "principal" || calculatorType === "interest") && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-blue-500" />
                    Outstanding Loan Amount (₹)
                  </label>
                  <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <IndianRupee className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-blue-700 text-lg">
                      {formatNumber(formData.loanAmount)}
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  name="loanAmount"
                  min={getFieldLimits('loanAmount').min}
                  max={getFieldLimits('loanAmount').max}
                  step={getFieldLimits('loanAmount').step}
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-3">
                  <span className="font-medium">₹{formatNumber(getFieldLimits('loanAmount').min)}</span>
                  <span className="font-medium">₹{formatNumber(getFieldLimits('loanAmount').max)}</span>
                </div>
                <div className="flex gap-3 mt-3 flex-wrap">
                  {getPresets('loanAmount').map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setFormData({...formData, loanAmount: amt})}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                    >
                      {formatNumber(amt)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Interest Rate (for EMI-loan and Interest) */}
            {(calculatorType === "emi-loan" || calculatorType === "interest") && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Percent className="w-5 h-5 text-green-500" />
                    Rate of Interest (%)
                  </label>
                  <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                    <Percent className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-green-700 text-lg">
                      {formData.interestRate}%
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  name="interestRate"
                  min={getFieldLimits('interestRate').min}
                  max={getFieldLimits('interestRate').max}
                  step={getFieldLimits('interestRate').step}
                  value={formData.interestRate}
                  onChange={handleChange}
                  className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-3">
                  <span className="font-medium">{getFieldLimits('interestRate').min}%</span>
                  <span className="font-medium">{getFieldLimits('interestRate').max}%</span>
                </div>
                <div className="flex gap-3 mt-3">
                  {getPresets('interestRate').map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setFormData({...formData, interestRate: rate})}
                      className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Monthly EMI (for EMI-monthly) */}
            {emiSubType === "monthly-emi" && calculatorType === "emi-monthly" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-purple-500" />
                    Monthly EMI (₹)
                  </label>
                  <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <IndianRupee className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-purple-700 text-lg">
                      {formatNumber(formData.monthlyEMI)}
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  name="monthlyEMI"
                  min={getFieldLimits('monthlyEMI').min}
                  max={getFieldLimits('monthlyEMI').max}
                  step={getFieldLimits('monthlyEMI').step}
                  value={formData.monthlyEMI}
                  onChange={handleChange}
                  className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-3">
                  <span className="font-medium">₹{formatNumber(getFieldLimits('monthlyEMI').min)}</span>
                  <span className="font-medium">₹{formatNumber(getFieldLimits('monthlyEMI').max)}</span>
                </div>
                <div className="flex gap-3 mt-3">
                  {getPresets('monthlyEMI').map((emi) => (
                    <button
                      key={emi}
                      onClick={() => setFormData({...formData, monthlyEMI: emi})}
                      className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                    >
                      {formatNumber(emi)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loan Tenure (Common for all) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Loan Tenure (Years)
                </label>
                <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  <span className="font-bold text-orange-700 text-lg">
                    {formData.loanTenure}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="loanTenure"
                min={getFieldLimits('loanTenure').min}
                max={getFieldLimits('loanTenure').max}
                step={getFieldLimits('loanTenure').step}
                value={formData.loanTenure}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">{getFieldLimits('loanTenure').min} Years</span>
                <span className="font-medium">{getFieldLimits('loanTenure').max} Years</span>
              </div>
              <div className="flex gap-3 mt-3">
                {getPresets('loanTenure').map((years) => (
                  <button
                    key={years}
                    onClick={() => setFormData({...formData, loanTenure: years})}
                    className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                  >
                    {years} Years
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Return */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  Returns Expected on Investment (%)
                </label>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  {calculatorType === 'principal' && <Lock className="w-4 h-4 text-green-600" />}
                  <Percent className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">
                    {formData.investmentReturn}%
                    {calculatorType === 'principal' && " (Fixed)"}
                  </span>
                </div>
              </div>
              {calculatorType !== 'principal' ? (
                <>
                  <input
                    type="range"
                    name="investmentReturn"
                    min={getFieldLimits('investmentReturn').min}
                    max={getFieldLimits('investmentReturn').max}
                    step={getFieldLimits('investmentReturn').step}
                    value={formData.investmentReturn}
                    onChange={handleChange}
                    className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-3">
                    <span className="font-medium">{getFieldLimits('investmentReturn').min}%</span>
                    <span className="font-medium">{getFieldLimits('investmentReturn').max}%</span>
                  </div>
                  <div className="flex gap-3 mt-3">
                    {getPresets('investmentReturn').map((returnRate) => (
                      <button
                        key={returnRate}
                        onClick={() => setFormData({...formData, investmentReturn: returnRate})}
                        className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                      >
                        {returnRate}%
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    For Principal Recovery, the return is fixed at 13% as per your requirement.
                  </p>
                </div>
              )}
            </div>

            {/* Annual Increase */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Annual Increase in Monthly Investment (%)
                </label>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-700 text-lg">
                    {formData.annualIncrease}%
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="annualIncrease"
                min={getFieldLimits('annualIncrease').min}
                max={getFieldLimits('annualIncrease').max}
                step={getFieldLimits('annualIncrease').step}
                value={formData.annualIncrease}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">{getFieldLimits('annualIncrease').min}%</span>
                <span className="font-medium">{getFieldLimits('annualIncrease').max}%</span>
              </div>
              <div className="flex gap-3 mt-3">
                {getPresets('annualIncrease').map((increase) => (
                  <button
                    key={increase}
                    onClick={() => setFormData({...formData, annualIncrease: increase})}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                  >
                    {increase}%
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b border-blue-200 pb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-blue-500" />
                {results.details.title}
              </h2>

              <div className="space-y-8">
                {/* Main Result Card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      You need to do a Monthly Investment of
                    </h3>
                    <div className="flex items-center justify-center gap-3">
                      <IndianRupee className="w-10 h-10 text-green-600" />
                      <p className="text-5xl font-bold text-green-700">
                        {formatNumber(results.monthlyInvestment)}
                      </p>
                    </div>
                    <p className="text-xl text-gray-600 mt-4">
                      after {results.loanTenure} years
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                    <p className="text-gray-600 text-center">
                      <span className="font-semibold">To recover:</span> {results.details.description}
                    </p>
                    <p className="text-center text-lg font-bold text-blue-700 mt-2">
                      {formatCurrency(results.targetAmount)}
                    </p>
                  </div>
                </motion.div>

                {/* EMI Details (for EMI-loan and Interest) */}
                {(calculatorType === "emi-loan" || calculatorType === "interest") && results.emiDetails && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200"
                  >
                    <h4 className="font-semibold text-gray-700 mb-3">Loan EMI Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Monthly EMI</p>
                        <p className="text-lg font-bold text-purple-700 mt-1">
                          {formatCurrency(Math.round(results.emiDetails.emi))}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Total Payment</p>
                        <p className="text-lg font-bold text-purple-700 mt-1">
                          {formatCurrency(Math.round(results.emiDetails.totalPaid))}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Investment Strategy */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                >
                  <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Investment Strategy
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">First Year Monthly Investment</span>
                      <span className="font-bold text-green-700">
                        ₹{formatNumber(results.monthlyInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Increase</span>
                      <span className="font-bold text-green-700">
                        {formData.annualIncrease}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-bold text-green-700">
                        {formData.investmentReturn}% p.a.
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Investment Period</span>
                      <span className="font-bold text-green-700">
                        {results.loanTenure} years
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Yearly Breakdown Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-5 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <h4 className="font-semibold text-gray-700 mb-3">Yearly Investment Preview</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-2 text-left text-gray-600">Year</th>
                          <th className="py-2 text-left text-gray-600">Monthly Investment</th>
                          <th className="py-2 text-left text-gray-600">Annual Investment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, Math.floor(results.loanTenure/4), Math.floor(results.loanTenure/2), Math.floor(3*results.loanTenure/4), results.loanTenure].map((year) => {
                          if (year > results.loanTenure) return null;
                          const monthly = results.monthlyInvestment * Math.pow(1 + formData.annualIncrease/100, year-1);
                          const annual = monthly * 12;
                          return (
                            <tr key={year} className="border-b border-gray-100 last:border-0">
                              <td className="py-2 font-medium">Year {year}</td>
                              <td className="py-2">₹{formatNumber(Math.round(monthly))}</td>
                              <td className="py-2">₹{formatNumber(Math.round(annual))}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 flex items-center justify-center"
            >
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto text-blue-300 mb-6" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Adjust loan parameters
                </h3>
                <p className="text-gray-400">
                  Your investment calculation will appear here
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Charts Section */}
      {results && growthChartData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Growth Projection Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-green-500" />
              Investment Growth Projection
            </h3>
            <div className="h-64">
              <Line
                data={growthChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          const datasetLabel = context.dataset.label || "";
                          return `${datasetLabel}: ${formatCurrency(context.raw)}`;
                        },
                      },
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: function (value) {
                          if (value >= 10000000) {
                            return "₹" + (value / 10000000).toFixed(1) + " Cr";
                          } else if (value >= 100000) {
                            return "₹" + (value / 100000).toFixed(1) + " L";
                          }
                          return "₹" + new Intl.NumberFormat("en-IN").format(Math.round(value));
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Loan Breakdown Chart (for EMI-loan and Interest) */}
          {breakdownChartData && (calculatorType === "emi-loan" || calculatorType === "interest") && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-500" />
                Loan Payment Breakdown
              </h3>
              <div className="h-64">
                <Pie
                  data={breakdownChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "bottom",
                      },
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            const label = context.label || "";
                            const value = context.raw || 0;
                            const total = calculatorType === "emi-loan" 
                              ? results.targetAmount 
                              : formData.loanAmount + results.targetAmount;
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Investment Insights */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-blue-100 pb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-500" />
            Investment Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Total Investment Needed</p>
              <p className="text-lg font-bold text-blue-700">
                ₹{formatNumber(results.monthlyInvestment * 12 * results.loanTenure)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Sum of all monthly investments</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Final Year Monthly Investment</p>
              <p className="text-lg font-bold text-green-700">
                ₹{formatNumber(results.monthlyInvestment * Math.pow(1 + formData.annualIncrease/100, results.loanTenure-1))}
              </p>
              <p className="text-xs text-gray-500 mt-1">Monthly investment in final year</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Growth Multiplier</p>
              <p className="text-lg font-bold text-purple-700">
                {(results.targetAmount / (results.monthlyInvestment * 12 * results.loanTenure)).toFixed(1)}x
              </p>
              <p className="text-xs text-gray-500 mt-1">Investment growth factor</p>
            </div>
          </div>
          
          {/* Note about Principal calculator */}
          {calculatorType === 'principal' && (
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-yellow-600" />
                <h4 className="font-semibold text-gray-700">Note for Principal Recovery</h4>
              </div>
              <p className="text-sm text-gray-600">
                The investment return is fixed at 13% for Principal Recovery calculations as per your requirement.
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* CSS for custom slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default HomeLoanRecoveryCalculator;