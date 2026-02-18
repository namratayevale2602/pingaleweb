"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  PieChart,
  TrendingUp,
  IndianRupee,
  Calendar,
  Percent,
  BarChart3,
  Target,
  Zap,
  ArrowUp,
  ArrowDown,
  Banknote,
  Coins,
  Wallet,
  Landmark,
} from "lucide-react";
import { Pie, Bar, Line } from "react-chartjs-2";
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

const SIPtoSWPCalculator = () => {
  const [formData, setFormData] = useState({
    monthlySIP: 5000,
    sipPeriod: 20,
    withdrawalPeriod: 20,
    sipReturn: 12,
    swpReturn: 8,
  });

  const [results, setResults] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [growthChartData, setGrowthChartData] = useState(null);
  const [withdrawalChartData, setWithdrawalChartData] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    calculateResults();
  }, [formData]);

  useEffect(() => {
    if (results) {
      // Pie Chart Data
      setPieChartData({
        labels: ["Total Invested", "Wealth Gained"],
        datasets: [
          {
            data: [results.investedAmount, results.estimatedReturn],
            backgroundColor: ["#3b82f6", "#10b981"],
            borderColor: ["#2563eb", "#059669"],
            borderWidth: 2,
          },
        ],
      });

      // Growth Chart Data (SIP Accumulation)
      const growthData = generateGrowthData();
      setGrowthChartData({
        labels: growthData.labels,
        datasets: [
          {
            label: "Accumulated Corpus",
            data: growthData.values,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
        ],
      });

      // Withdrawal Chart Data (SWP Phase)
      const withdrawalData = generateWithdrawalData();
      setWithdrawalChartData({
        labels: withdrawalData.labels,
        datasets: [
          {
            label: "Remaining Corpus",
            data: withdrawalData.corpusValues,
            borderColor: "#10b981",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderWidth: 3,
            fill: true,
          },
          {
            label: "Monthly Withdrawal",
            data: withdrawalData.withdrawalValues,
            borderColor: "#ef4444",
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
          },
        ],
      });
    }
  }, [results]);

  // Calculate monthly rate using Excel's method: (1 + annual rate)^(1/12) - 1
  const calculateMonthlyRate = (annualRate) => {
    return Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  };

  const calculateResults = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const { monthlySIP, sipPeriod, withdrawalPeriod, sipReturn, swpReturn } =
        formData;

      // Calculate monthly rates using Excel's method
      const rSipMonthly = calculateMonthlyRate(sipReturn);
      const sipMonths = sipPeriod * 12;

      // Future Value calculation for SIP (beginning of period)
      const futureValue = calculateFutureValue(
        rSipMonthly,
        sipMonths,
        -monthlySIP,
        0,
        1
      );

      const investedAmount = monthlySIP * sipMonths;
      const estimatedReturn = futureValue - investedAmount;

      // Calculate SWP monthly withdrawal
      const rSwpMonthly = calculateMonthlyRate(swpReturn);
      const withdrawalMonths = withdrawalPeriod * 12;
      const monthlyWithdrawal = calculateMonthlyWithdrawal(
        rSwpMonthly,
        withdrawalMonths,
        futureValue
      );

      setResults({
        investedAmount,
        estimatedReturn,
        totalValue: futureValue,
        swpMonthly: monthlyWithdrawal,
        sipPeriod: formData.sipPeriod,
        withdrawalPeriod: formData.withdrawalPeriod,
      });
      setIsCalculating(false);
    }, 300);
  };

  // Equivalent to Excel FV function
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

  // Equivalent to Excel PMT function for withdrawals
  const calculateMonthlyWithdrawal = (rate, nper, pv) => {
    if (rate === 0) {
      return pv / nper;
    }

    const factor = Math.pow(1 + rate, nper);
    const pmt = (pv * rate * factor) / (factor - 1);

    return pmt;
  };

  // Generate growth data for the accumulation phase
  const generateGrowthData = () => {
    const { monthlySIP, sipPeriod, sipReturn } = formData;
    const labels = [];
    const values = [];
    const rSipMonthly = calculateMonthlyRate(sipReturn);

    for (let year = 1; year <= sipPeriod; year++) {
      const months = year * 12;
      const fv = calculateFutureValue(rSipMonthly, months, -monthlySIP, 0, 1);
      labels.push(`Year ${year}`);
      values.push(fv);
    }

    return { labels, values };
  };

  // Generate data for the withdrawal phase
  const generateWithdrawalData = () => {
    const { withdrawalPeriod, swpReturn } = formData;
    const labels = [];
    const corpusValues = [];
    const withdrawalValues = [];
    const rSwpMonthly = calculateMonthlyRate(swpReturn);
    const withdrawalMonths = withdrawalPeriod * 12;
    const monthlyWithdrawal = results.swpMonthly;
    let remainingCorpus = results.totalValue;

    for (let year = 0; year <= withdrawalPeriod; year++) {
      const months = year * 12;
      labels.push(`Year ${year}`);
      corpusValues.push(remainingCorpus);
      withdrawalValues.push(monthlyWithdrawal);

      // Calculate remaining corpus after this year's withdrawals
      if (year < withdrawalPeriod) {
        for (let month = 0; month < 12; month++) {
          remainingCorpus =
            remainingCorpus * (1 + rSwpMonthly) - monthlyWithdrawal;
        }
      }
    }

    return { labels, corpusValues, withdrawalValues };
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
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl">
      <motion.div
        className="flex flex-col items-center justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <Landmark className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">
            SIP to SWP Calculator
          </h1>
          <Coins className="w-10 h-10 text-green-600" />
        </div>
        <p className="text-gray-600 text-center max-w-2xl">
          Calculate your Systematic Investment Plan (SIP) accumulation and Systematic Withdrawal Plan (SWP) distribution
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
            Investment Parameters
          </h2>

          <div className="space-y-8">
            {/* Monthly SIP Amount */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-500" />
                  Monthly SIP Amount (₹)
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
                min="5000"
                max="10000000"
                step="5000"
                value={formData.monthlySIP}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">₹5,000</span>
                <span className="font-medium">₹1 Cr</span>
              </div>
            </div>

            {/* SIP Period */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  SIP Period (Years)
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
                max="50"
                step="1"
                value={formData.sipPeriod}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">1 Year</span>
                <span className="font-medium">50 Years</span>
              </div>
            </div>

            {/* Withdrawal Period */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Withdrawal Period (Years)
                </label>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span className="font-bold text-purple-700 text-lg">
                    {formData.withdrawalPeriod}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="withdrawalPeriod"
                min="5"
                max="50"
                step="1"
                value={formData.withdrawalPeriod}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">5 Years</span>
                <span className="font-medium">50 Years</span>
              </div>
            </div>

            {/* SIP Return */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Assumed Return During SIP Period (%)
                </label>
                <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-orange-600" />
                  <span className="font-bold text-orange-700 text-lg">
                    {formData.sipReturn}%
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="sipReturn"
                min="4"
                max="18"
                step="0.5"
                value={formData.sipReturn}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">4%</span>
                <span className="font-medium">18%</span>
              </div>
            </div>

            {/* SWP Return */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-red-500" />
                  Assumed Return During Withdrawal Period (%)
                </label>
                <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                  <Percent className="w-4 h-4 text-red-600" />
                  <span className="font-bold text-red-700 text-lg">
                    {formData.swpReturn}%
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="swpReturn"
                min="4"
                max="18"
                step="0.5"
                value={formData.swpReturn}
                onChange={handleChange}
                className="w-full h-3 bg-gradient-to-r from-red-200 to-red-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span className="font-medium">4%</span>
                <span className="font-medium">18%</span>
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
                {/* Corpus Result */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Banknote className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Your Accumulated Corpus will be
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-700 mb-2">
                      {formatShortCurrency(results.totalValue)}
                    </p>
                    <p className="text-gray-600 font-medium">
                      after {results.sipPeriod} years
                    </p>
                  </div>
                </motion.div>

                {/* Withdrawal Result */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Coins className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      You will receive
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700 mb-2">
                      ₹ {formatShortCurrency(results.swpMonthly)} Monthly
                    </p>
                    <p className="text-gray-600 font-medium">
                      for {results.withdrawalPeriod} years
                    </p>
                  </div>
                </motion.div>

                {/* Additional Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Total Invested
                    </p>
                    <p className="text-xl font-bold text-blue-700 mt-1">
                      {formatCurrency(results.investedAmount)}
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 font-medium">
                      Wealth Gained
                    </p>
                    <p className="text-xl font-bold text-green-700 mt-1">
                      {formatCurrency(results.estimatedReturn)}
                    </p>
                  </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg"
                >
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    Investment Journey
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-3xl font-bold">{results.sipPeriod}</p>
                      <p className="text-sm opacity-90">SIP Years</p>
                    </div>
                    <div className="text-center">
                      <ArrowUp className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Accumulation</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold">{results.withdrawalPeriod}</p>
                      <p className="text-sm opacity-90">SWP Years</p>
                    </div>
                    <div className="text-center">
                      <ArrowDown className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">Withdrawal</p>
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
                <Calculator className="w-16 h-16 mx-auto text-blue-300 mb-6" />
                <h3 className="text-xl font-medium text-gray-500 mb-2">
                  Adjust parameters to calculate
                </h3>
                <p className="text-gray-400">
                  Your SIP to SWP plan will appear here
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
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-500" />
              Investment Breakdown
            </h3>
            {pieChartData && (
              <div className="h-64">
                <Pie
                  data={pieChartData}
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
                            return `${label}: ${formatCurrency(value)}`;
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
              <BarChart3 className="w-5 h-5 text-green-500" />
              Corpus Growth During SIP
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
                            return `Corpus: ${formatCurrency(context.raw)}`;
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

          {/* Withdrawal Chart */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              SWP Phase - Corpus & Withdrawals
            </h3>
            {withdrawalChartData && (
              <div className="h-64">
                <Line
                  data={withdrawalChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            const datasetLabel = context.dataset.label || "";
                            return `${datasetLabel}: ${formatCurrency(
                              context.raw
                            )}`;
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

export default SIPtoSWPCalculator;