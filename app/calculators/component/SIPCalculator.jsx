"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  IndianRupee,
  Calendar,
  Percent,
  Target,
  Zap,
  ArrowUp,
  LineChart,
  Wallet,
  Coins,
  Landmark,
  DollarSign,
  PieChart,
  BarChart3,
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

const SIPCalculator = () => {
  const [formData, setFormData] = useState({
    monthlySIP: 5000,
    sipPeriod: 10,
    expectedReturn: 12,
  });

  const [results, setResults] = useState(null);
  const [growthChartData, setGrowthChartData] = useState(null);
  const [yearlyChartData, setYearlyChartData] = useState(null);
  const [contributionChartData, setContributionChartData] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateResults();
  }, [formData]);

  useEffect(() => {
    if (results) {
      // Growth Chart Data
      const growthData = generateGrowthData();
      setGrowthChartData({
        labels: growthData.labels,
        datasets: [
          {
            label: "Investment Value",
            data: growthData.values,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
        ],
      });

      // Yearly Breakdown Chart
      const yearlyData = generateYearlyData();
      setYearlyChartData({
        labels: yearlyData.labels,
        datasets: [
          {
            label: "Principal",
            data: yearlyData.principalValues,
            backgroundColor: "rgba(59, 130, 246, 0.8)",
            borderColor: "#2563eb",
            borderWidth: 1,
          },
          {
            label: "Returns",
            data: yearlyData.returnValues,
            backgroundColor: "rgba(16, 185, 129, 0.8)",
            borderColor: "#059669",
            borderWidth: 1,
          },
        ],
      });

      // Contribution Chart Data
      setContributionChartData({
        labels: ["Total Invested", "Wealth Gained"],
        datasets: [
          {
            data: [results.totalInvested, results.estimatedReturns],
            backgroundColor: ["#3b82f6", "#10b981"],
            borderColor: ["#2563eb", "#059669"],
            borderWidth: 2,
          },
        ],
      });
    }
  }, [results]);

  // Calculate monthly rate
  const calculateMonthlyRate = (annualRate) => {
    return Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  };

  const calculateResults = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const { monthlySIP, sipPeriod, expectedReturn } = formData;

      // Calculate monthly rate
      const monthlyRate = calculateMonthlyRate(expectedReturn);
      const totalMonths = sipPeriod * 12;

      // Calculate future value of SIP (beginning of period)
      const futureValue = calculateFutureValue(
        monthlyRate,
        totalMonths,
        -monthlySIP,
        0,
        1
      );

      const totalInvested = monthlySIP * totalMonths;
      const estimatedReturns = futureValue - totalInvested;

      setResults({
        totalInvested,
        estimatedReturns,
        totalValue: futureValue,
        sipPeriod: formData.sipPeriod,
        expectedReturn: formData.expectedReturn,
      });
      setIsCalculating(false);
    }, 300);
  };

  // Future Value calculation for SIP (beginning of period)
  const calculateFutureValue = (rate, nper, pmt, pv, type) => {
    if (rate === 0) {
      return -pmt * nper - pv;
    }

    const factor = Math.pow(1 + rate, nper);
    let fv;

    if (type === 1) {
      // Payments at beginning of period
      fv = -pmt * (1 + rate) * ((factor - 1) / rate) - pv * factor;
    } else {
      // Payments at end of period
      fv = -pmt * ((factor - 1) / rate) - pv * factor;
    }

    return Math.abs(fv);
  };

  // Generate growth data
  const generateGrowthData = () => {
    const { monthlySIP, sipPeriod, expectedReturn } = formData;
    const labels = [];
    const values = [];
    const monthlyRate = calculateMonthlyRate(expectedReturn);

    for (let year = 1; year <= sipPeriod; year++) {
      const months = year * 12;
      const fv = calculateFutureValue(monthlyRate, months, -monthlySIP, 0, 1);
      labels.push(`Year ${year}`);
      values.push(fv);
    }

    return { labels, values };
  };

  // Generate yearly breakdown data
  const generateYearlyData = () => {
    const { monthlySIP, sipPeriod, expectedReturn } = formData;
    const labels = [];
    const principalValues = [];
    const returnValues = [];
    const monthlyRate = calculateMonthlyRate(expectedReturn);

    for (let year = 1; year <= sipPeriod; year++) {
      const months = year * 12;
      const fv = calculateFutureValue(monthlyRate, months, -monthlySIP, 0, 1);
      const totalInvested = monthlySIP * months;
      const returns = fv - totalInvested;

      labels.push(`Year ${year}`);
      principalValues.push(totalInvested);
      returnValues.push(returns);
    }

    return { labels, principalValues, returnValues };
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
      return (num / 10000000).toFixed(1) + " Cr";
    } else if (num >= 100000) {
      return (num / 100000).toFixed(1) + " L";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + " K";
    }
    return new Intl.NumberFormat("en-IN").format(num);
  };

  const formatShortCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN").format(Math.round(amount));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-2xl">
      <motion.div
        className="flex flex-col items-center justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <TrendingUp className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            SIP Investment Calculator
          </h1>
          <LineChart className="w-10 h-10 text-green-600" />
        </div>
        <p className="text-gray-600 text-center max-w-2xl">
          Calculate your Systematic Investment Plan (SIP) returns and visualize your wealth growth
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
            SIP Parameters
          </h2>

          <div className="space-y-8">
            {/* Monthly SIP Amount */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-500" />
                  Monthly Investment Amount (₹)
                </label>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <IndianRupee className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-700 text-lg">
                    {formatNumber(formData.monthlySIP)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="monthlySIP"
                min="500"
                max="10000000"
                step="500"
                value={formData.monthlySIP}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">₹500</span>
                <span className="font-medium">₹1 Cr</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, monthlySIP: 5000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹5,000
                </button>
                <button
                  onClick={() => setFormData({...formData, monthlySIP: 10000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹10,000
                </button>
                <button
                  onClick={() => setFormData({...formData, monthlySIP: 25000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹25,000
                </button>
                <button
                  onClick={() => setFormData({...formData, monthlySIP: 50000})}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                >
                  ₹50,000
                </button>
              </div>
            </div>

            {/* SIP Period */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Investment Period (Years)
                </label>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="font-bold text-green-700 text-lg">
                    {formData.sipPeriod}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="sipPeriod"
                min="1"
                max="40"
                step="1"
                value={formData.sipPeriod}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">1 Year</span>
                <span className="font-medium">40 Years</span>
              </div>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setFormData({...formData, sipPeriod: 5})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  5 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, sipPeriod: 10})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  10 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, sipPeriod: 15})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  15 Years
                </button>
                <button
                  onClick={() => setFormData({...formData, sipPeriod: 20})}
                  className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                >
                  20 Years
                </button>
              </div>
            </div>

            {/* Expected Return */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  Expected Annual Return (%)
                </label>
                <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-orange-600" />
                  <span className="font-bold text-orange-700 text-lg">
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
                className="w-full h-3 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">6%</span>
                <span className="font-medium">20%</span>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-3">
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 8})}
                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  8%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 10})}
                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  10%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 12})}
                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  12%
                </button>
                <button
                  onClick={() => setFormData({...formData, expectedReturn: 15})}
                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition"
                >
                  15%
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
                Investment Results
              </h2>

              <div className="space-y-8">
                {/* Total Value Result */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <IndianRupee className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Total Investment Value
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-700 mb-2">
                      {formatShortCurrency(results.totalValue)}
                    </p>
                    <p className="text-gray-600 font-medium">
                      After {results.sipPeriod} years
                    </p>
                  </div>
                </motion.div>

                {/* Breakdown Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                  >
                    <p className="text-sm text-gray-600 font-medium">
                      Total Invested
                    </p>
                    <p className="text-xl font-bold text-blue-700 mt-1">
                      {formatCurrency(results.totalInvested)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ₹{formatShortCurrency(formData.monthlySIP)} × {results.sipPeriod * 12} months
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 bg-green-50 rounded-lg border border-green-200"
                  >
                    <p className="text-sm text-gray-600 font-medium">
                      Wealth Gained
                    </p>
                    <p className="text-xl font-bold text-green-700 mt-1">
                      {formatCurrency(results.estimatedReturns)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      From {formData.expectedReturn}% annual returns
                    </p>
                  </motion.div>
                </div>

                {/* ROI Card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm opacity-90">Return on Investment</p>
                      <p className="text-3xl font-bold mt-1">
                        {((results.estimatedReturns / results.totalInvested) * 100).toFixed(1)}%
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-90">Multiple</p>
                      <p className="text-3xl font-bold mt-1">
                        {(results.totalValue / results.totalInvested).toFixed(1)}x
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Monthly Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Investment</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {formatCurrency(formData.monthlySIP)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Annual Investment</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {formatCurrency(formData.monthlySIP * 12)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Total Months</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {results.sipPeriod * 12} months
                    </p>
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
                <Calculator className="w-16 h-16 mx-auto text-blue-300 mb-6" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Adjust SIP parameters
                </h3>
                <p className="text-gray-400">
                  Your investment results will appear here
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
              Investment Breakdown
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
                            const percentage = ((value / results.totalValue) * 100).toFixed(1);
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

          {/* Growth Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-green-500" />
              Investment Growth Over Time
            </h3>
            {growthChartData && (
              <div className="h-64">
                <Line
                  data={growthChartData}
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

          {/* Yearly Breakdown Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              Yearly Breakdown (Principal vs Returns)
            </h3>
            {yearlyChartData && (
              <div className="h-64">
                <Bar
                  data={yearlyChartData}
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
                      x: {
                        stacked: true,
                      },
                      y: {
                        stacked: true,
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
              <p className="text-sm text-gray-600 mb-2">Monthly Growth</p>
              <p className="text-lg font-bold text-blue-700">
                ₹{formatShortCurrency((results.totalValue - results.totalInvested) / (results.sipPeriod * 12))}
              </p>
              <p className="text-xs text-gray-500 mt-1">Average monthly wealth creation</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Annual Growth</p>
              <p className="text-lg font-bold text-green-700">
                ₹{formatShortCurrency((results.totalValue - results.totalInvested) / results.sipPeriod)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Average annual returns</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Compounding Effect</p>
              <p className="text-lg font-bold text-purple-700">
                {(results.estimatedReturns / results.totalInvested * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Of your investment is from compounding</p>
            </div>
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

export default SIPCalculator;