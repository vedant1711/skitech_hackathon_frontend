import React, { useState } from 'react';
import { fertilizerRecommendation } from '../../util/helper';

const FertilizerRecommendation = () => {
  const [cropName, setCropName] = useState(''); // New state for crop name
  const [plotSize, setPlotSize] = useState(1.0); // Default plot size
  const [unit, setUnit] = useState('Acre'); // Default unit
  const [nutrientValues, setNutrientValues] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });
  const [fertilizerCombinations, setFertilizerCombinations] = useState([]);

  const handleCropNameChange = (e) => {
    setCropName(e.target.value);
  };

  const handlePlotSizeChange = (value) => {
    setPlotSize(value);
  };

  const handleNutrientChange = (name, value) => {
    setNutrientValues({
      ...nutrientValues,
      [name]: value
    });
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleCalculate = async () => {
    // Convert plot size to hectares if necessary
    let sizeInHectares = plotSize;
    if (unit === 'Acre') {
      sizeInHectares = plotSize * 0.404686; // 1 Acre = 0.404686 Hectares
    } else if (unit === 'Gunta') {
      sizeInHectares = plotSize * 0.010117; // 1 Gunta = 0.010117 Hectares
    }

    const body = {
      cropName: cropName,
      plotSize: sizeInHectares,
      nutrientValues: nutrientValues,
    };

    // Call the fertilizerRecommendation helper function
    const recommendations = await fertilizerRecommendation({ body });
    console.log(recommendations.data);

    // Update the state with fetched recommendations
    setFertilizerCombinations(recommendations.data);
  };

  return (
    <div className="p-6 border rounded-3xl shadow-xl bg-white dark:bg-gray-800 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Fertilizer Recommendation</h2>

      {/* Crop Name Section */}
      <div className="mb-6">
        <label className="text-md text-gray-700 dark:text-gray-300">Crop Name</label>
        <input
          type="text"
          value={cropName}
          onChange={handleCropNameChange}
          className="mt-2 p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white w-full"
          placeholder="Enter crop name"
        />
      </div>

      {/* Nutrient Quantities Section */}
      <div className="mb-6">
        <label className="text-md text-gray-700 dark:text-gray-300">Nutrient Quantities</label>
        <div className="flex space-x-4 mt-3">
          <div className="flex items-center">
            <span className="mr-2 font-medium">N:</span>
            <input
              type="number"
              value={nutrientValues.nitrogen}
              onChange={(e) => handleNutrientChange('nitrogen', e.target.value)}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white w-20"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-medium">P:</span>
            <input
              type="number"
              value={nutrientValues.phosphorus}
              onChange={(e) => handleNutrientChange('phosphorus', e.target.value)}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white w-20"
            />
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-medium">K:</span>
            <input
              type="number"
              value={nutrientValues.potassium}
              onChange={(e) => handleNutrientChange('potassium', e.target.value)}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white w-20"
            />
          </div>
        </div>
      </div>

      {/* Plot Size Section */}
      <div className="mt-4 mb-6">
        <label className="text-md text-gray-700 dark:text-gray-300">Unit</label>
        <div className="flex space-x-6 mt-2">
          <label className="flex items-center text-gray-600 dark:text-gray-300">
            <input
              type="radio"
              value="Acre"
              checked={unit === 'Acre'}
              onChange={handleUnitChange}
              className="mr-2"
            />
            Acre
          </label>
          <label className="flex items-center text-gray-600 dark:text-gray-300">
            <input
              type="radio"
              value="Hectare"
              checked={unit === 'Hectare'}
              onChange={handleUnitChange}
              className="mr-2"
            />
            Hectare
          </label>
          <label className="flex items-center text-gray-600 dark:text-gray-300">
            <input
              type="radio"
              value="Gunta"
              checked={unit === 'Gunta'}
              onChange={handleUnitChange}
              className="mr-2"
            />
            Gunta
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-md text-gray-700 dark:text-gray-300">Plot Size</label>
        <div className="flex items-center mt-2">
          <button
            onClick={() => handlePlotSizeChange(plotSize - 0.5)}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            -
          </button>
          <input
            type="number"
            value={plotSize}
            onChange={(e) => handlePlotSizeChange(parseFloat(e.target.value))}
            className="mx-4 p-2 border rounded-lg text-center w-24 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <button
            onClick={() => handlePlotSizeChange(plotSize + 0.5)}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-primary-light-950 text-white py-3 px-6 rounded-full transition duration-300"
      >
        Calculate
      </button>

      {/* Recommendation Results */}
      {fertilizerCombinations.length > 0 && (
        <div className="mt-8">
          <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-4">
            Choose your preferred fertilizer combination:
          </h4>
          <div className="space-y-6">
            {fertilizerCombinations.map((combination, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-primary-light-100 hover:shadow-md transition-shadow duration-300"
              >
                {/* Display each fertilizer and its amount */}
                <ul>
                  {Object.entries(combination).map(([fertilizer, amount]) => (
                    <li key={fertilizer} className="flex justify-between text-gray-800 dark:text-gray-100">
                      <span>{fertilizer}</span>
                      <span>{amount} kg</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FertilizerRecommendation;
