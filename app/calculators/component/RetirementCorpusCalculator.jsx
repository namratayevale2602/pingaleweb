"use client";
import { useState, useEffect } from "react";

const RetirementCorpusCalculator = () => {
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

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

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

    // Validation
    if (retirementAge <= currentAge) {
      setResults({ error: "Retirement age must be greater than current age" });
      return;
    }

    if (lifeExpectancy <= retirementAge) {
      setResults({ error: "Life expectancy must be greater than retirement age" });
      return;
    }

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
      const monthlyRate = annualReturn / 12 / 100;
      const totalMonths = years * 12;
      
      if (monthlyRate === 0) {
        return futureValue / totalMonths;
      }
      
      const factor = (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
      return futureValue / factor;
    };

    const monthlySIP = calculateMonthlySIP(
      additionalCorpusNeeded,
      earningYearsReturn,
      yearsToRetirement
    );

    setResults({
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
      corpusNeeded: Math.round(corpusNeeded),
      futureValueOfCurrentWealth: Math.round(futureValueOfCurrentWealth),
      monthlySIP: Math.round(monthlySIP),
      additionalCorpusNeeded: Math.round(additionalCorpusNeeded),
      yearsToRetirement,
      retirementYears,
    });
  };

  useEffect(() => {
    calculateRetirementCorpus();
  }, [formData]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Retirement Corpus Calculator
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Plan your retirement savings with accurate inflation-adjusted calculations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Monthly Expense (₹)
              <span className="text-gray-500 text-xs ml-2">
                (20,000 - 10,00,000)
              </span>
            </label>
            <input
              type="range"
              name="currentMonthlyExpense"
              min="20000"
              max="1000000"
              step="1000"
              value={formData.currentMonthlyExpense}
              onChange={handleChange}
              className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>20K</span>
              <span>5L</span>
              <span>10L</span>
            </div>
            <input
              type="number"
              name="currentMonthlyExpense"
              value={formData.currentMonthlyExpense}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="20000"
              max="1000000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Future Inflation Assumed (%)
              <span className="text-gray-500 text-xs ml-2">
                (0% - 15%)
              </span>
            </label>
            <input
              type="range"
              name="futureInflation"
              min="0"
              max="15"
              step="0.1"
              value={formData.futureInflation}
              onChange={handleChange}
              className="w-full h-2 bg-red-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>6%</span>
              <span>15%</span>
            </div>
            <input
              type="number"
              name="futureInflation"
              value={formData.futureInflation}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="15"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Age (Years)
              <span className="text-gray-500 text-xs ml-2">
                (18 - 75)
              </span>
            </label>
            <input
              type="range"
              name="currentAge"
              min="18"
              max="75"
              step="1"
              value={formData.currentAge}
              onChange={handleChange}
              className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>18</span>
              <span>30</span>
              <span>75</span>
            </div>
            <input
              type="number"
              name="currentAge"
              value={formData.currentAge}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="18"
              max="75"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Retirement Age (Years)
              <span className="text-gray-500 text-xs ml-2">
                ({formData.currentAge + 1} - 100)
              </span>
            </label>
            <input
              type="range"
              name="retirementAge"
              min={formData.currentAge + 1}
              max="100"
              step="1"
              value={formData.retirementAge}
              onChange={handleChange}
              className="w-full h-2 bg-purple-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formData.currentAge + 1}</span>
              <span>60</span>
              <span>100</span>
            </div>
            <input
              type="number"
              name="retirementAge"
              value={formData.retirementAge}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min={formData.currentAge + 1}
              max="100"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Life Expectancy (Years)
              <span className="text-gray-500 text-xs ml-2">
                (40 - 100)
              </span>
            </label>
            <input
              type="range"
              name="lifeExpectancy"
              min="40"
              max="100"
              step="1"
              value={formData.lifeExpectancy}
              onChange={handleChange}
              className="w-full h-2 bg-yellow-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>40</span>
              <span>70</span>
              <span>100</span>
            </div>
            <input
              type="number"
              name="lifeExpectancy"
              value={formData.lifeExpectancy}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="40"
              max="100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Returns During Earning Years (%)
              <span className="text-gray-500 text-xs ml-2">
                (4% - 20%)
              </span>
            </label>
            <input
              type="range"
              name="earningYearsReturn"
              min="4"
              max="20"
              step="0.1"
              value={formData.earningYearsReturn}
              onChange={handleChange}
              className="w-full h-2 bg-teal-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>4%</span>
              <span>12%</span>
              <span>20%</span>
            </div>
            <input
              type="number"
              name="earningYearsReturn"
              value={formData.earningYearsReturn}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="4"
              max="20"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Returns During Retirement Years (%)
              <span className="text-gray-500 text-xs ml-2">
                (4% - 20%)
              </span>
            </label>
            <input
              type="range"
              name="retirementYearsReturn"
              min="4"
              max="20"
              step="0.1"
              value={formData.retirementYearsReturn}
              onChange={handleChange}
              className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>4%</span>
              <span>8%</span>
              <span>20%</span>
            </div>
            <input
              type="number"
              name="retirementYearsReturn"
              value={formData.retirementYearsReturn}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="4"
              max="20"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Wealth for Retirement (₹)
              <span className="text-gray-500 text-xs ml-2">
                (0 - 10 Cr)
              </span>
            </label>
            <input
              type="range"
              name="currentWealth"
              min="0"
              max="100000000"
              step="100000"
              value={formData.currentWealth}
              onChange={handleChange}
              className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>0</span>
              <span>15L</span>
              <span>10Cr</span>
            </div>
            <input
              type="number"
              name="currentWealth"
              value={formData.currentWealth}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="100000000"
            />
          </div>
        </div>
      </div>

      {results && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          {results.error ? (
            <div className="text-red-600 text-center font-semibold p-4 bg-red-50 rounded-lg">
              {results.error}
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Your Retirement Plan Results
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Years to Retirement</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {results.yearsToRetirement} years
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Retirement Years</p>
                  <p className="text-2xl font-bold text-green-700">
                    {results.retirementYears} years
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Monthly Expense at Retirement</p>
                  <p className="text-2xl font-bold text-purple-700">
                    ₹ {results.futureMonthlyExpense.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.futureInflation}% inflation adjusted
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-gray-600">Retirement Corpus Required</p>
                  <p className="text-2xl font-bold text-red-700">
                    ₹ {results.corpusNeeded.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    To sustain {results.retirementYears} years of retirement
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600">Future Value of Current Wealth</p>
                  <p className="text-2xl font-bold text-yellow-700">
                    ₹ {results.futureValueOfCurrentWealth.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Current ₹{formData.currentWealth.toLocaleString()} growing at {formData.earningYearsReturn}%
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-teal-50 rounded-lg">
                  <p className="text-sm text-gray-600">Additional Corpus Needed</p>
                  <p className="text-2xl font-bold text-teal-700">
                    ₹ {results.additionalCorpusNeeded.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    After accounting for current wealth
                  </p>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-sm text-gray-600">Monthly SIP Required</p>
                  <p className="text-2xl font-bold text-indigo-700">
                    ₹ {results.monthlySIP.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    For {results.yearsToRetirement} years at {formData.earningYearsReturn}% returns
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-3">Summary</h3>
                <p className="text-gray-600 text-sm">
                  To maintain your current lifestyle after retirement at age {formData.retirementAge}, 
                  you need a corpus of ₹ {results.corpusNeeded.toLocaleString()} by retirement. 
                  Starting with ₹ {formData.currentWealth.toLocaleString()} (which will grow to ₹ {results.futureValueOfCurrentWealth.toLocaleString()}), 
                  you need to invest ₹ {results.monthlySIP.toLocaleString()} monthly for {results.yearsToRetirement} years.
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500">
                  <div>Inflation: {formData.futureInflation}%</div>
                  <div>Earning Years Return: {formData.earningYearsReturn}%</div>
                  <div>Retirement Years Return: {formData.retirementYearsReturn}%</div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>Note: All calculations are approximate. Actual returns may vary. Consider consulting a financial advisor for detailed planning.</p>
      </div>
    </div>
  );
};

export default RetirementCorpusCalculator;