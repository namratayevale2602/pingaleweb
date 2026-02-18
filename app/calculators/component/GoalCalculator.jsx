"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Target,
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
  BarChart3,
  Rocket,
  TrendingDown,
  Moon,
  Sunrise,
} from "lucide-react";
import { Pie, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
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
  BarElement,
  PointElement,
  LineElement,
  Title
);

const GoalCalculator = () => {
  const [formData, setFormData] = useState({
    amountRequiredToday: 5000000,
    yearsLeft: 15,
    yearlyInflation: 7,
    expectedReturn: 13,
    currentInvestment: 2000000,
  });

  const [results, setResults] = useState(null);
  const [growthChartData, setGrowthChartData] = useState(null);
  const [contributionChartData, setContributionChartData] = useState(null);
  const [inflationChartData, setInflationChartData] = useState(null);
  const [paymentType, setPaymentType] = useState("beginning"); // 'beginning' or 'end'

  useEffect(() => {
    calculateResults();
  }, [formData, paymentType]);

  useEffect(() => {
    if (results) {
      // Future Value Growth Chart
      const growthData = generateGrowthData();
      setGrowthChartData({
        labels: growthData.labels,
        datasets: [
          {
            label: "Goal Value Required",
            data: growthData.goalValues,
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.3,
          },
          {
            label: "Your Investment Growth",
            data: growthData.investmentValues,
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.3,
          },
        ],
      });

      // Contribution Chart
      setContributionChartData({
        labels: ["Current Investment", "Future Investment Needed"],
        datasets: [
          {
            data: [
              results.futureValueOfCurrent,
              results.additionalAmountNeeded > 0 ? results.additionalAmountNeeded : 0
            ],
            backgroundColor: ["#3b82f6", "#f59e0b"],
            borderColor: ["#2563eb", "#d97706"],
            borderWidth: 2,
          },
        ],
      });

      // Inflation Impact Chart
      const inflationData = generateInflationData();
      setInflationChartData({
        labels: inflationData.labels,
        datasets: [
          {
            label: "Inflation Impact",
            data: inflationData.values,
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.1)",
            borderWidth: 3,
            fill: true,
          },
        ],
      });
    }
  }, [results]);

  const calculateResults = () => {
    const {
      amountRequiredToday,
      yearsLeft,
      yearlyInflation,
      expectedReturn,
      currentInvestment,
    } = formData;

    // Step 1: Calculate future goal value adjusted for inflation
    const futureGoalValue = amountRequiredToday * 
      Math.pow(1 + yearlyInflation / 100, yearsLeft);

    // Step 2: Calculate future value of current investment
    const futureValueOfCurrent = currentInvestment * 
      Math.pow(1 + expectedReturn / 100, yearsLeft);

    // Step 3: Calculate additional amount needed
    const additionalAmountNeeded = futureGoalValue - futureValueOfCurrent;

    // Step 4: Calculate monthly SIP needed - Using precise financial formula
    let monthlySIP = 0;
    
    if (additionalAmountNeeded > 0) {
      // Convert annual return to effective monthly rate
      const monthlyRate = Math.pow(1 + expectedReturn / 100, 1/12) - 1;
      const totalMonths = yearsLeft * 12;
      
      // Future value factor for annuity
      const fvFactor = (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
      
      // Adjust for payment timing
      if (paymentType === "beginning") {
        // Beginning of month: Multiply by (1 + monthlyRate)
        monthlySIP = additionalAmountNeeded / (fvFactor * (1 + monthlyRate));
      } else {
        // End of month
        monthlySIP = additionalAmountNeeded / fvFactor;
      }
    }

    // Step 5: Calculate inflation-adjusted present value
    const realReturn = ((1 + expectedReturn/100) / (1 + yearlyInflation/100) - 1) * 100;

    setResults({
      futureGoalValue: Math.round(futureGoalValue),
      futureValueOfCurrent: Math.round(futureValueOfCurrent),
      additionalAmountNeeded: Math.max(0, Math.round(additionalAmountNeeded)),
      monthlySIP: Math.round(monthlySIP),
      yearsLeft: yearsLeft,
      realReturn: realReturn,
      inflationMultiplier: Math.pow(1 + yearlyInflation/100, yearsLeft),
      paymentType: paymentType,
      monthlyRate: Math.pow(1 + expectedReturn / 100, 1/12) - 1,
    });
  };

  // Alternative formula using financial calculator approach
  const calculatePMTDirectly = (fv, rate, nper) => {
    const monthlyRate = Math.pow(1 + rate, 1/12) - 1;
    const totalMonths = nper * 12;
    
    if (paymentType === "beginning") {
      // PMT for beginning of period
      return fv * monthlyRate / ((Math.pow(1 + monthlyRate, totalMonths) - 1) * (1 + monthlyRate));
    } else {
      // PMT for end of period
      return fv * monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }
  };

  const generateGrowthData = () => {
    const { amountRequiredToday, yearsLeft, yearlyInflation, expectedReturn, currentInvestment } = formData;
    const labels = [];
    const goalValues = [];
    const investmentValues = [];

    for (let year = 0; year <= yearsLeft; year++) {
      const goalValue = amountRequiredToday * Math.pow(1 + yearlyInflation / 100, year);
      const investmentValue = currentInvestment * Math.pow(1 + expectedReturn / 100, year);
      
      labels.push(`Year ${year}`);
      goalValues.push(goalValue);
      investmentValues.push(investmentValue);
    }

    return { labels, goalValues, investmentValues };
  };

  const generateInflationData = () => {
    const { amountRequiredToday, yearsLeft, yearlyInflation } = formData;
    const labels = [];
    const values = [];

    for (let year = 0; year <= yearsLeft; year++) {
      const inflatedValue = amountRequiredToday * Math.pow(1 + yearlyInflation / 100, year);
      labels.push(`Year ${year}`);
      values.push(inflatedValue);
    }

    return { labels, values };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    if (num >= 10000000) {
      return (num / 10000000).toFixed(2) + " Cr";
    } else if (num >= 100000) {
      return (num / 100000).toFixed(1) + " L";
    }
    return new Intl.NumberFormat("en-IN").format(num);
  };

  const formatShortCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN").format(Math.round(amount));
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
          <Target className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            Goal Planning Calculator
          </h1>
          <Rocket className="w-10 h-10 text-purple-600" />
        </div>
        <p className="text-gray-600 text-center max-w-2xl">
          Calculate the future value of your financial goals and plan your investments accordingly
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3 border-b border-blue-100 pb-4">
            <Calculator className="w-7 h-7 text-blue-500" />
            Goal Parameters
          </h2>

          {/* Payment Type Toggle */}
          <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Investment Timing
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${paymentType === 'beginning' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                {paymentType === 'beginning' ? 'Beginning of Month' : 'End of Month'}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Choose when you'll make your monthly investments
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentType("beginning")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${paymentType === 'beginning' ? 'bg-green-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Sunrise className="w-4 h-4" />
                Beginning of Month
              </button>
              <button
                onClick={() => setPaymentType("end")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${paymentType === 'end' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Moon className="w-4 h-4" />
                End of Month
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Amount Required Today */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-500" />
                  Amount Required Today (₹)
                </label>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <IndianRupee className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-700 text-lg">
                    {formatNumber(formData.amountRequiredToday)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="amountRequiredToday"
                min="2500000"
                max="1000000000"
                step="100000"
                value={formData.amountRequiredToday}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">₹25 L</span>
                <span className="font-medium">₹100 Cr</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, amountRequiredToday: 2500000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹25 L
                </button>
                <button
                  onClick={() => setFormData({...formData, amountRequiredToday: 5000000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹50 L
                </button>
                <button
                  onClick={() => setFormData({...formData, amountRequiredToday: 10000000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹1 Cr
                </button>
                <button
                  onClick={() => setFormData({...formData, amountRequiredToday: 25000000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹2.5 Cr
                </button>
              </div>
            </div>

            {/* Years Left */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Years Left to Achieve Goal
                </label>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">
                    {formData.yearsLeft}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="yearsLeft"
                min="5"
                max="40"
                step="1"
                value={formData.yearsLeft}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">5 Years</span>
                <span className="font-medium">40 Years</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, yearsLeft: 5})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  5 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, yearsLeft: 10})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  10 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, yearsLeft: 15})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  15 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, yearsLeft: 20})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  20 Years
                </button>
              </div>
            </div>

            {/* Yearly Inflation */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-orange-500" />
                  Yearly Inflation Assumed (%)
                </label>
                <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-orange-600" />
                  <span className="font-bold text-orange-700 text-lg">
                    {formData.yearlyInflation}%
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="yearlyInflation"
                min="4"
                max="15"
                step="0.5"
                value={formData.yearlyInflation}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">4%</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, yearlyInflation: 4})}
                  className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  4%
                </button>
                <button
                  onClick={() => setFormData({...formData, yearlyInflation: 6})}
                  className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  6%
                </button>
                <button
                  onClick={() => setFormData({...formData, yearlyInflation: 7})}
                  className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  7%
                </button>
                <button
                  onClick={() => setFormData({...formData, yearlyInflation: 8})}
                  className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  8%
                </button>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  Returns Expected on Investment (%)
                </label>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">
                    {formData.expectedReturn}%
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="expectedReturn"
                min="6"
                max="20"
                step="0.5"
                value={formData.expectedReturn}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">6%</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 10})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  10%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 12})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  12%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 13})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  13%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 15})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  15%
                </button>
              </div>
            </div>

            {/* Current Investment */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-purple-500" />
                  Current Investment for Goal (₹)
                </label>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <IndianRupee className="w-4 h-4 text-purple-600" />
                  <span className="font-bold text-purple-700 text-lg">
                    {formatNumber(formData.currentInvestment)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="currentInvestment"
                min="0"
                max="100000000"
                step="100000"
                value={formData.currentInvestment}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">₹0</span>
                <span className="font-medium">₹10 Cr</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, currentInvestment: 0})}
                  className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                >
                  ₹0
                </button>
                <button
                  onClick={() => setFormData({...formData, currentInvestment: 2000000})}
                  className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                >
                  ₹20 L
                </button>
                <button
                  onClick={() => setFormData({...formData, currentInvestment: 5000000})}
                  className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                >
                  ₹50 L
                </button>
                <button
                  onClick={() => setFormData({...formData, currentInvestment: 10000000})}
                  className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition"
                >
                  ₹1 Cr
                </button>
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
                Goal Calculation Results
              </h2>

              <div className="space-y-8">
                {/* Goal Value Result */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Your Goal Value will be
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-700 mb-2">
                      ₹ {formatShortCurrency(results.futureGoalValue)}
                    </p>
                    <p className="text-gray-600 font-medium">
                      after {results.yearsLeft} years
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      (Today's ₹{formatNumber(formData.amountRequiredToday)} with {formData.yearlyInflation}% inflation)
                    </p>
                  </div>
                </motion.div>

                {/* Monthly Investment Required */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowUp className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Monthly Investment Required
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${paymentType === 'beginning' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {paymentType === 'beginning' ? 'Beginning of Month' : 'End of Month'}
                        </span>
                        <span className="text-xs text-gray-500">
                          • {(results.monthlyRate * 100).toFixed(3)}% monthly return
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700 mb-2">
                      ₹ {formatShortCurrency(results.monthlySIP)}
                    </p>
                    <p className="text-gray-600 font-medium">
                      to achieve this Goal
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      For {results.yearsLeft} years at {formData.expectedReturn}% returns
                    </p>
                  </div>
                </motion.div>

                {/* Current Investment Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200"
                >
                  <h4 className="font-semibold text-gray-700 mb-3">Current Investment Analysis</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Future Value of Current Investment</p>
                      <p className="text-lg font-bold text-purple-700 mt-1">
                        {formatCurrency(results.futureValueOfCurrent)}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Additional Amount Needed</p>
                      <p className="text-lg font-bold text-orange-700 mt-1">
                        {formatCurrency(results.additionalAmountNeeded)}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Inflation Multiplier</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {results.inflationMultiplier.toFixed(2)}x
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Real Return</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {results.realReturn.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Months of Investment</p>
                        <p className="text-lg font-semibold text-gray-800">
                          {results.yearsLeft * 12} months
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Payment Type</p>
                        <p className="text-lg font-semibold text-gray-800 capitalize">
                          {paymentType} of month
                        </p>
                      </div>
                    </div>
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
                  Adjust goal parameters
                </h3>
                <p className="text-gray-400">
                  Your goal calculation results will appear here
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Charts Section */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contribution Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-500" />
              Investment Contribution Breakdown
            </h3>
            {contributionChartData && (
              <div className="h-64">
                <Pie
                  data={contributionChartData}
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
                            const percentage = results.additionalAmountNeeded > 0 
                              ? ((value / results.futureGoalValue) * 100).toFixed(1)
                              : "100";
                            return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>

          {/* Growth Comparison Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-green-500" />
              Goal vs Investment Growth
            </h3>
            {growthChartData && (
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
                            return "₹" + value;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>

          {/* Inflation Impact Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-purple-500" />
              Inflation Impact on Your Goal
            </h3>
            {inflationChartData && (
              <div className="h-64">
                <Line
                  data={inflationChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            return `Value: ${formatCurrency(context.raw)}`;
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
                            return "₹" + value;
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Key Insights Section */}
      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-blue-100 pb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            Key Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Annual Inflation Impact</p>
              <p className="text-lg font-bold text-blue-700">
                ₹{formatShortCurrency((results.futureGoalValue - formData.amountRequiredToday) / results.yearsLeft)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Average annual increase due to inflation</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Investment Gap</p>
              <p className="text-lg font-bold text-green-700">
                {((results.additionalAmountNeeded / results.futureGoalValue) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Of goal not covered by current investment</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Monthly Rate</p>
              <p className="text-lg font-bold text-purple-700">
                {(results.monthlyRate * 100).toFixed(3)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Effective monthly return on investment</p>
            </div>
          </div>
          
          {/* Comparison of payment types */}
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-gray-700 mb-2">Payment Timing Impact</h4>
            <p className="text-sm text-gray-600">
              {paymentType === 'beginning' ? 
                "Investing at the beginning of the month reduces the monthly SIP amount because your money works for you for an extra month each year." :
                "Investing at the end of the month requires a slightly higher SIP amount compared to beginning-of-month investments."
              }
            </p>
          </div>
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

export default GoalCalculator;