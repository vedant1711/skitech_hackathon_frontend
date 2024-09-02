'use client'
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import axios from 'axios';
import { fetchCitiesHelper } from '../../util/helper'; // Update the path accordingly

const commodities = [
  "Alasande Gram",
  "Almond (Badam)",
  "Alsandikai",
  "Amaranthus",
  "Amla (Nelli Kai)",
  "Amphophalus",
  "Apple",
  "Arecanut (Betelnut/Supari)",
  "Arhar (Tur/Red Gram) (Whole)",
  "Arhar Dal (Tur Dal)",
  "Ashgourd",
  "Bajra (Pearl Millet/Cumbu)",
  "Banana",
  "Banana - Green",
  "Barley (Jau)",
  "Beans",
  "Beetroot",
  "Bengal Gram Dal (Chana Dal)",
  "Bengal Gram (Gram) (Whole)",
  "Betal Leaves",
  "Bhindi (Ladies Finger)",
  "Bitter Gourd",
  "Black Gram (Urd Beans) (Whole)",
  "Black Gram Dal (Urd Dal)",
  "Black Pepper",
  "Bottle Gourd",
  "Brinjal",
  "Bunch Beans",
  "Buttery",
  "Cabbage",
  "Capsicum",
  "Cardamoms",
  "Carrot",
  "Cashewnuts",
  "Cauliflower",
  "Chapparad Avare",
  "Chikoos (Sapota)",
  "Chili Red",
  "Chilly Capsicum",
  "Chow Chow",
  "Cluster Beans",
  "Cock",
  "Coconut",
  "Coconut Oil",
  "Coconut Seed",
  "Colacasia",
  "Copra",
  "Coriander (Leaves)",
  "Coriander Seed",
  "Cotton",
  "Cowpea (Lobia/Karamani)",
  "Cowpea (Veg)",
  "Cucumber (Kheera)",
  "Cumin Seed (Jeera)",
  "Custard Apple (Sharifa)",
  "Drumstick",
  "Dry Chillies",
  "Duster Beans",
  "Elephant Yam (Suran)",
  "Field Pea",
  "Fig (Anjura/Anjeer)",
  "Firewood",
  "Fish",
  "Foxtail Millet (Navane)",
  "French Beans (Frasbean)",
  "Garlic",
  "Ghee",
  "Ginger (Dry)",
  "Ginger (Green)",
  "Goat",
  "Grapes",
  "Green Avare (W)",
  "Green Chilli",
  "Green Gram (Moong) (Whole)",
  "Green Gram Dal (Moong Dal)",
  "Green Peas",
  "Ground Nut Seed",
  "Groundnut",
  "Groundnut Pods (Raw)",
  "Guar",
  "Guar Seed (Cluster Beans Seed)",
  "Guava",
  "Gulli",
  "Gur (Jaggery)",
  "Hen",
  "Honge Seed",
  "Indian Beans (Seam)",
  "Jack Fruit",
  "Jamun (Narale Hannu)",
  "Jasmine",
  "Jowar (Sorghum)",
  "Jute",
  "Kabuli Chana (Chickpeas-White)",
  "Kakada",
  "Karbuja (Musk Melon)",
  "Kartali (Kantola)",
  "Knool Khol",
  "Kodo Millet (Varagu)",
  "Kulthi (Horse Gram)",
  "Kutki",
  "Leafy Vegetable",
  "Lemon",
  "Lentil (Masur) (Whole)",
  "Lime",
  "Linseed",
  "Little Gourd (Kundru)",
  "Long Melon (Kakri)",
  "Mahua",
  "Maize",
  "Mango",
  "Mango (Raw-Ripe)",
  "Marigold (Calcutta)",
  "Mushrooms",
  "Masur Dal",
  "Mataki",
  "Methi Seeds",
  "Methi (Leaves)",
  "Millets",
  "Mint (Pudina)",
  "Moath Dal",
  "Mousambi (Sweet Lime)",
  "Mustard",
  "Mustard Oil",
  "Onion",
  "Onion Green",
  "Orange",
  "Other Green and Fresh Vegetables",
  "Ox",
  "Paddy (Dhan) (Basmati)",
  "Paddy (Dhan) (Common)",
  "Papaya",
  "Papaya (Raw)",
  "Pear (Marasebu)",
  "Peas Wet",
  "Peas (Dry)",
  "Pigs",
  "Pineapple",
  "Plum",
  "Pointed Gourd (Parval)",
  "Pomegranate",
  "Potato",
  "Pumpkin",
  "Radish",
  "Ragi (Finger Millet)",
  "Rajgir",
  "Rayee",
  "Rice",
  "Ridge Gourd (Tori)",
  "Rose (Local)",
  "Round Gourd",
  "Sabu Dan",
  "Safflower",
  "Seemebadnekai",
  "Sesamum (Sesame, Gingelly, Til)",
  "Sheep",
  "Snake Gourd",
  "Soanf",
  "Soyabean",
  "Spinach",
  "Sponge Gourd",
  "Squash (Chappal Kadoo)",
  "Sugar",
  "Sunflower",
  "Suvarna Gadde",
  "Sweet Potato",
  "Sweet Pumpkin",
  "Tamarind Fruit",
  "Tamarind Seed",
  "Tapioca",
  "Tender Coconut",
  "Thondekai",
  "Tinda",
  "Tomato",
  "Tube Flower",
  "Tube Rose (Loose)",
  "Turmeric",
  "Turnip",
  "Water Melon",
  "Wheat",
  "White Peas",
  "White Pumpkin",
  "Wood",
  "Yam",
  "Yam (Ratalu)"
]

const statesOfIndia = [
  { key: "Andaman and Nicobar Islands", value: "AN" },
  { key: "Andhra Pradesh", value: "AP" },
  { key: "Arunachal Pradesh", value: "AR" },
  { key: "Assam", value: "AS" },
  { key: "Bihar", value: "BR" },
  { key: "Chandigarh", value: "CH" },
  { key: "Chhattisgarh", value: "CT" },
  { key: "Dadra and Nagar Haveli and Daman and Diu", value: "DH" },
  { key: "Delhi", value: "DL" },
  { key: "Goa", value: "GA" },
  { key: "Gujarat", value: "GJ" },
  { key: "Haryana", value: "HR" },
  { key: "Himachal Pradesh", value: "HP" },
  { key: "Jammu and Kashmir", value: "JK" },
  { key: "Jharkhand", value: "JH" },
  { key: "Karnataka", value: "KA" },
  { key: "Kerala", value: "KL" },
  { key: "Ladakh", value: "LA" },
  { key: "Lakshadweep", value: "LD" },
  { key: "Madhya Pradesh", value: "MP" },
  { key: "Maharashtra", value: "MH" },
  { key: "Manipur", value: "MN" },
  { key: "Meghalaya", value: "ML" },
  { key: "Mizoram", value: "MZ" },
  { key: "Nagaland", value: "NL" },
  { key: "Odisha", value: "OR" },
  { key: "Puducherry", value: "PY" },
  { key: "Punjab", value: "PB" },
  { key: "Rajasthan", value: "RJ" },
  { key: "Sikkim", value: "SK" },
  { key: "Tamil Nadu", value: "TN" },
  { key: "Telangana", value: "TG" },
  { key: "Tripura", value: "TR" },
  { key: "Uttar Pradesh", value: "UP" },
  { key: "Uttarakhand", value: "UK" },
  { key: "West Bengal", value: "WB" }
];


const CommodityPrice = () => {
  const [filters, setFilters] = useState({
    commodity: '',
    state: '',
    district: '',
  });

  const [marketData, setMarketData] = useState([]);
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading
  const [districts, setDistricts] = useState([]);
  const [errors, setErrors] = useState({});
  const apiKey = process.env.NEXT_PUBLIC_COMMODITY_API;

  // Function to fetch commodity data
  const fetchMarketData = async (filters) => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      const { commodity, state, district } = filters;
      let url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&limit=200`;

      console.log(state, district)

      // Add filters to URL
      if (commodity) url += `&filters[commodity]=${encodeURIComponent(commodity)}`;
      if (state) url += `&filters[state]=${encodeURIComponent(state)}`;
      if (district) url += `&filters[district]=${encodeURIComponent(district)}`;

      console.log(url, "url");
      const response = await axios.get(url);
      const data = response.data;
      console.log(data, "data");

      if (data && data.records) {
        setMarketData(data.records);
      } else {
        setMarketData([]);
      }

      if (data && (data.field || data.field_exposed)) {
        const fields = (data.field || data.field_exposed).map((field) => ({
          id: field.id,
          name: field.name,
        }));
        setFields(fields);
      }
    } catch (error) {
      console.error("Error fetching market data:", error);
      setMarketData([]);
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  // Function to fetch cities based on state
  const fetchCities = async (selectedState) => {
    try {
      const response = await fetchCitiesHelper(selectedState);
      console.log(JSON.stringify(response));
      return response;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  };

  // Handle state change and fetch corresponding cities/districts
  const handleStateChange = async (e) => {
    const selectedState = e.target.value;
    const stateKey = statesOfIndia.find(state => state.value === selectedState)?.key;
    console.log(stateKey)
    setFilters({ ...filters, state: stateKey });

    try {
      const response = await fetchCitiesHelper(selectedState);
      setDistricts(response); // Assuming response is an array of cities/districts
    } catch (error) {
      console.error('Error fetching cities:', error);
      setDistricts([]);
    }
  };

  // Handle input change for filters
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      ...(name === "state" && { district: '' }), // Clear district if the state changes
    }));

    if (name === "state") {
      handleStateChange(e); // Trigger state change handler
    }
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    const { value } = e.target;
    console.log("Selected value:", value); // Log the selected value
    console.log("Districts array:", districts); // Log the districts array
  
    const selectedDistrict = districts.find(district => String(district.id) === String(value))?.name;
    console.log("Selected district:", selectedDistrict); // Log the selected district
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      district: selectedDistrict || '',
    }));
  };

  // Handle search button click
  const handleSearch = () => {
    fetchMarketData(filters);
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    fetchMarketData({}); // Fetch data with no filters initially
  }, []);

  // Update districts when state changes
  useEffect(() => {
    if (!filters.state) {
      setDistricts([]);
    }
  }, [filters.state]);

  // Log marketData and fields after they are updated
  useEffect(() => {
    console.log(marketData, "Updated marketData");
    console.log(fields, "Updated fields");
  }, [marketData, fields]);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="heading-2 max-w-7xl mb-8 mx-auto text-neutral-950 dark:text-neutral-dark-950 text-center">
          <span className="font-light">Commodity</span> Market Price
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 mb-4 justify">
          <p className='p-2 text-xl font-semibold text-neutral-900 dark:text-neutral-dark-900'>
            SEARCH:
          </p>
          <div className="flex flex-col">
            <label htmlFor="commodity" className="text-lg font-medium text-neutral-700 dark:text-neutral-dark-700">Commodity</label>
            <select
              name="commodity"
              value={filters.commodity}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="">Select Commodity</option>
              {commodities.map((commodity) => (
                <option key={commodity} value={commodity}>{commodity}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-lg font-medium text-neutral-700 dark:text-neutral-dark-700">State</label>
            <select
              name="state"
              value={filters.state}
              onChange={handleInputChange}
              className="p-2 border rounded"
            >
              <option value="">Select State</option>
              {statesOfIndia.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.key}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="district" className="text-lg font-medium text-neutral-700 dark:text-neutral-dark-700">District</label>
            <select
              name="district"
              value={filters.district}
              onChange={handleDistrictChange}
              className="p-2 border rounded"
              disabled={!districts.length}
            >
              <option value="">{districts.length ? "Select District" : "Select State First"}</option>
              {districts.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name} {/* Adjust based on your object structure */}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="bg-primary-light-950 text-white p-2 rounded-2xl pl-6 pr-6 mt-6"
          >
            Go
          </button>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <div className="overflow-y-auto max-h-96">
              {loading ? ( // Show a loading indicator while fetching data
                <p>Loading data...</p>
              ) : (
                marketData.length > 0 ? (
                  <table className="min-w-full bg-white border border-gray-200 relative">
                    <thead className="bg-primary-light-950 sticky top-0 z-10">
                      <tr>
                        {fields.map((field, index) => (
                          <th
                            key={index}
                            className="py-2 px-4 border-b border-gray-200 text-left whitespace-nowrap"
                          >
                            {field.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          {fields.map((field, i) => (
                            <td
                              key={i}
                              className="py-2 px-4 border-b border-gray-200 text-left whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                              {data[field.id]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No data available for the selected filters.</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommodityPrice;
