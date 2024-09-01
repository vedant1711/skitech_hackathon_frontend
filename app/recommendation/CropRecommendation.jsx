import React, { useState } from 'react';

const CropRecommendation = () => {
  const [inputs, setInputs] = useState({
    weather: '',
    soilType: '',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  return (
    <div className="p-8 border rounded-3xl shadow-xl bg-white dark:bg-gray-800 w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Crop Recommendation</h2>

      {/* Weather Data */}
      <div className="flex flex-col mb-5">
        <label htmlFor="weather" className="text-sm font-medium text-gray-700 dark:text-gray-300">Weather Data</label>
        <input
          type="text"
          name="weather"
          value={inputs.weather}
          onChange={handleInputChange}
          placeholder="Enter weather data"
          className="mt-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-primary-light-950 focus:border-primary-light-950"
        />
      </div>

      {/* Soil Type */}
      <div className="flex flex-col mb-5">
        <label htmlFor="soilType" className="text-sm font-medium text-gray-700 dark:text-gray-300">Soil Type</label>
        <select
          name="soilType"
          value={inputs.soilType}
          onChange={handleInputChange}
          className="mt-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-primary-light-950 focus:border-primary-light-950"
        >
          <option value="">Select Soil Type</option>
          <option value="loamy">Loamy</option>
          <option value="sandy">Sandy</option>
          <option value="clay">Clay</option>
        </select>
      </div>

      {/* NPK Values */}
      <div className="mb-5">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">NPK Values</label>
        <div className="flex space-x-3 mt-3">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-300">N:</span>
            <input
              type="text"
              name="nitrogen"
              value={inputs.nitrogen}
              onChange={handleInputChange}
              className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 w-20 focus:ring-primary-light-950 focus:border-primary-light-950"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-300">P:</span>
            <input
              type="text"
              name="phosphorus"
              value={inputs.phosphorus}
              onChange={handleInputChange}
              className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 w-20 focus:ring-primary-light-950 focus:border-primary-light-950"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-300">K:</span>
            <input
              type="text"
              name="potassium"
              value={inputs.potassium}
              onChange={handleInputChange}
              className="p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 w-20 focus:ring-primary-light-950 focus:border-primary-light-950"
            />
          </div>
        </div>
      </div>

      <button className="w-full bg-primary-light-950 text-white py-3 px-8 rounded-full hover:from-primary-light-800 hover:to-primary-dark-800 transition duration-300 shadow-md">
        Get Recommendation
      </button>
    </div>
  );
};

export default CropRecommendation;
