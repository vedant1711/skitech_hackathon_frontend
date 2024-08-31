'use client'
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";

const RecommendationPage = () => {
  const [inputs, setInputs] = useState({
    weather: '',
    soilType: '',
    npkValues: '',
    crop: '',
    deficiency: '',
    soilCondition: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleRecommendation = () => {
    // Logic to fetch recommendation based on inputs
    console.log('Fetching recommendations based on:', inputs);
  };

  return (
    <Layout>
      <section className="relative py-10 lg:py-12 lg:mb-8">
        <div className="container px-4">
          <h3 className="heading-2 text-neutral-950 dark:text-neutral-dark-950">
            <span className="font-light">Crop and Fertilizer</span> Recommendation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Weather Section */}
            <div className="p-6 border rounded-3xl shadow-lg bg-neutral-10 dark:bg-neutral-dark-0">
              <h2 className="text-xl font-semibold text-green-600 mb-4">Weather Data</h2>
              <div className="flex flex-col">
                <label htmlFor="weather" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">Weather Information</label>
                <input
                  type="text"
                  name="weather"
                  value={inputs.weather}
                  onChange={handleInputChange}
                  placeholder="Weather data"
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                />
              </div>
            </div>

            {/* Soil Type Section */}
            <div className="p-6 border rounded-3xl shadow-lg bg-neutral-10 dark:bg-neutral-dark-0">
              <h2 className="text-xl font-semibold text-green-600 mb-4">Soil Type and NPK Values</h2>
              <div className="flex flex-col mb-4">
                <label htmlFor="soilType" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">Soil Type</label>
                <select
                  name="soilType"
                  value={inputs.soilType}
                  onChange={handleInputChange}
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                >
                  <option value="">Select Soil Type</option>
                  <option value="loamy">Loamy</option>
                  <option value="sandy">Sandy</option>
                  <option value="clay">Clay</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="npkValues" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">NPK Values</label>
                <input
                  type="text"
                  name="npkValues"
                  value={inputs.npkValues}
                  onChange={handleInputChange}
                  placeholder="NPK Values (e.g., N: 10, P: 20, K: 15)"
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                />
              </div>
            </div>

            {/* Crop Section */}
            <div className="p-6 border rounded-3xl shadow-lg bg-neutral-10 dark:bg-neutral-dark-0">
              <h2 className="text-xl font-semibold text-green-600 mb-4">Crop Details</h2>
              <div className="flex flex-col">
                <label htmlFor="crop" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">Crop</label>
                <input
                  type="text"
                  name="crop"
                  value={inputs.crop}
                  onChange={handleInputChange}
                  placeholder="Enter crop name"
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                />
              </div>
            </div>

            {/* Fertilizer Recommendation Section */}
            <div className="p-6 border rounded-3xl shadow-lg bg-neutral-10 dark:bg-neutral-dark-0">
              <h2 className="text-xl font-semibold text-green-600 mb-4">Fertilizer Recommendation</h2>
              <div className="flex flex-col mb-4">
                <label htmlFor="deficiency" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">Deficiency in Soil</label>
                <input
                  type="text"
                  name="deficiency"
                  value={inputs.deficiency}
                  onChange={handleInputChange}
                  placeholder="Deficiency (e.g., Nitrogen deficiency)"
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="soilCondition" className="text-lg font-medium text-neutral-950 dark:text-neutral-dark-950">Soil Condition</label>
                <input
                  type="text"
                  name="soilCondition"
                  value={inputs.soilCondition}
                  onChange={handleInputChange}
                  placeholder="Soil condition"
                  className="p-4 border rounded-2xl mt-2 bg-neutral-0 dark:bg-neutral-dark-0"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleRecommendation}
              className="bg-primary-light-950 text-white py-3 px-8 rounded-full hover:bg-primary-dark-950 transition duration-300"
            >
              Get Recommendations
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecommendationPage;
