import React, { useState, useEffect } from 'react';
import { cropRecommendation } from '../../util/helper';

const CropRecommendation = () => {
  const [inputs, setInputs] = useState({
    latitude: '',
    longitude: '',
    pH: '',
    nitrogen: '',
    phosphorus: '',
    potassium: ''
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setInputs({
          ...inputs,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)
    const recommendation = await cropRecommendation(inputs);
    console.log(recommendation); // You can handle the recommendation result as needed
  };

  return (
    <div className="p-8 border rounded-3xl shadow-xl bg-white dark:bg-gray-800 w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Crop Recommendation</h2>

      {/* Latitude and Longitude */}
      <div className="flex flex-col mb-5">
        <label htmlFor="latitude" className="text-sm font-medium text-gray-700 dark:text-gray-300">Latitude</label>
        <input
          type="text"
          name="latitude"
          value={inputs.latitude}
          onChange={handleInputChange}
          placeholder="Auto-filled if location permission is given"
          className="mt-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-primary-light-950 focus:border-primary-light-950"
          readOnly
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="longitude" className="text-sm font-medium text-gray-700 dark:text-gray-300">Longitude</label>
        <input
          type="text"
          name="longitude"
          value={inputs.longitude}
          onChange={handleInputChange}
          placeholder="Auto-filled if location permission is given"
          className="mt-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-primary-light-950 focus:border-primary-light-950"
          readOnly
        />
      </div>

      {/* pH Value */}
      <div className="flex flex-col mb-5">
        <label htmlFor="pH" className="text-sm font-medium text-gray-700 dark:text-gray-300">pH Level</label>
        <input
          type="text"
          name="pH"
          value={inputs.pH}
          onChange={handleInputChange}
          placeholder="Enter soil pH level"
          className="mt-2 p-3 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-primary-light-950 focus:border-primary-light-950"
        />
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

      <button
        onClick={handleSubmit}
        className="w-full bg-primary-light-950 text-white py-3 px-8 rounded-full hover:from-primary-light-800 hover:to-primary-dark-800 transition duration-300 shadow-md"
      >
        Get Recommendation
      </button>
    </div>
  );
};

export default CropRecommendation;
