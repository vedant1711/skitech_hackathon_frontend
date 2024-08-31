'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Import Next.js Image component for icons

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(''); // New state for city name

  const defaultLatitude = 28.6139; // Delhi's latitude
  const defaultLongitude = 77.2090; // Delhi's longitude

  // Move fetchWeatherData outside useEffect
  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/3.0/onecall',
        {
          params: {
            lat,
            lon,
            lang: 'en',
            appid: 'eb8413e9530ac148b816b9a95521e004',
            units: 'metric',
          },
        }
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching weather data');
      setLoading(false);
    }
  };

  const fetchCityName = async (lat, lon) => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/geo/1.0/reverse', // OpenWeatherMap Reverse Geocoding API
        {
          params: {
            lat,
            lon,
            limit: 1, // Limit the results to 1
            appid: 'eb8413e9530ac148b816b9a95521e004',
          },
        }
      );
      if (response.data.length > 0) {
        setCity(response.data[0].name); // Set the city name
      } else {
        setCity('Unknown Location');
      }
    } catch (err) {
      setCity('Error fetching city name');
    }
  };


  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
            fetchWeatherData(latitude, longitude); // Now this function is defined
            fetchCityName(latitude, longitude); // Fetch city name

          },
          (error) => {
            // User denied location access or some other error occurred
            setLatitude(defaultLatitude);
            setLongitude(defaultLongitude);
            fetchWeatherData(defaultLatitude, defaultLongitude);
            fetchCityName(defaultLatitude, defaultLongitude); // Fetch city name for default location
            // setError('Using default location: Delhi, India.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  // Additional effect to handle cases where location permission changes
  useEffect(() => {
    const handlePermissionChange = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            if (latitude !== defaultLatitude && longitude !== defaultLongitude) {
              setLatitude(latitude);
              setLongitude(longitude);
              fetchWeatherData(latitude, longitude);
              fetchCityName(latitude, longitude); // Fetch city name on permission change
              setLoading(false);

            }
          },
          (error) => {
            // No action needed as default location is already set
          }
        );
      }
    };

    window.addEventListener('focus', handlePermissionChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('focus', handlePermissionChange);
    };
  }, [latitude, longitude]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">{error}</div>;
  if (!weatherData) return null;

  const { current, daily, hourly } = weatherData;

  // Function to format time
  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const formatDate = (timestamp) => new Date(timestamp * 1000).toLocaleDateString();

  // Placeholder function for actionable insights
  const getActionableInsights = () => {
    return [
      'Carry an umbrella today.',
      'Wear light clothing due to high humidity.',
      'Plan indoor activities during the afternoon due to rain chances.',
    ];
  };

  return (
    <div className="weather-dashboard p-4 md:m-8 dark:text-neutral-dark-950">
      <h3 className="heading-2 text-left mb-4 lg:mb-0">
        <span className="font-light">Weather </span>Forecast
      </h3>

      <p className="text-xl mb-4">{city}</p> {/* Display city name here */}
      <p className="text-sm mb-4">Latitude: {latitude}, Longitude: {longitude}</p>

      {/* Grid layout */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-5">
        {/* Current Weather Card */}
        <div className="bg-primary-light-950/25 rounded-lg shadow-md p-3 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
          <div className="flex flex-col md:flex-row items-center justify-between bg-primary-light-950/90 dark:bg-primary-dark-950/90 rounded-lg shadow-md">
            {/* Weather Icon and Temperature */}
            <div className="flex items-center">
              <Image 
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} 
                alt="Weather Icon"
                width={80}
                height={80}
              />
              <div className="ml-2 flex items-center">
                {/* Make temperature larger */}
                <p className="text-4xl font-bold">{current.temp}°C</p>
                {/* Add thermometer icon before temperature */}
                <Image
                  src="/assets/icons/thermometer.png"
                  alt="Thermometer Icon"
                  width={30}
                  height={30}
                  className=""
                />
              </div>
            </div>

            {/* Additional Weather Data */}
            <div className="ml-3 flex-1 grid grid-cols-2 gap-4 mt-4 md:mt-0">
              <div>
                <p className="text-sm">Humidity 
                  <Image 
                    src="/assets/icons/humidity.png" 
                    alt="Humidity Icon" 
                    width={20} 
                    height={20} 
                    className="inline ml-1"
                  /> :
                  <span className="font-bold">{current.humidity}%</span>
                </p>
                <p className="text-sm">Pressure: <span className="font-bold">{current.pressure}</span></p>
              </div>
              <div>
                <p className="text-sm">Wind 
                  <Image 
                    src="/assets/icons/storm.png" 
                    alt="Wind Icon" 
                    width={20} 
                    height={20} 
                    className="inline ml-1"
                  /> :
                  <span className="font-bold">{current.wind_speed} m/s</span>
                </p>
                <p className="text-sm">Weather: <span className="font-bold">{current.weather[0].description}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Actionable Insights Card */}
        <div className="bg-primary-light-950/25 rounded-lg shadow-md p-4 col-span-1 md:col-span-3">
          <h2 className="text-xl font-semibold mb-2">Actionable Insights</h2>
          <ul className="list-disc list-inside">
            {getActionableInsights().map((insight, index) => (
              <li key={index} className="text-lg">{insight}</li>
            ))}
          </ul>
        </div>

        {/* Combined Row for Hourly and Daily Forecasts */}
        <div className="col-span-1 md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Hourly Forecast */}
          <div className="bg-primary-light-950/25 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Hourly Forecast</h2>
            <div className="p-4 overflow-x-auto">
              <div className="flex space-x-4">
                {hourly.slice(0, 6).map((hour, index) => (
                  <div key={index} className="bg-primary-light-950/90 dark:bg-primary-dark-950/90 rounded-lg shadow-md p-4 min-w-[230px] flex flex-col items-center">
                    <p className="text-lg font-bold mb-2">{formatTime(hour.dt)}</p>
                    <div className="flex items-center justify-between mb-2">
                      <Image 
                        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} 
                        alt="Weather Icon"
                        width={100}
                        height={100}
                      />
                      <div className="flex items-center ml-2">
                        <p className="text-2xl font-bold">{hour.temp}°C</p>
                        {/* Add thermometer icon before temperature */}
                        <Image
                          src="/assets/icons/thermometer.png"
                          alt="Thermometer Icon"
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <p>Wind 
                          <Image 
                            src="/assets/icons/storm.png" 
                            alt="Wind Icon" 
                            width={20} 
                            height={20} 
                            className="inline ml-1"
                          /> :
                          <span className="font-bold">{hour.wind_speed} m/s</span>
                        </p>
                      </div>
                      <div>
                        <p>Weather: <span className="font-bold">{hour.weather[0].description}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Daily Forecast */}
          <div className="bg-primary-light-950/25 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Daily Forecast</h2>
            <div className="p-4 overflow-x-auto">
              <div className="flex space-x-4">
                {daily.slice(0, 7).map((day, index) => (
                  <div key={index} className="bg-primary-light-950/90 dark:bg-primary-dark-950/90 rounded-lg shadow-md p-4 min-w-[230px] flex flex-col items-center">
                    <p className="text-lg font-bold mb-2">{formatDate(day.dt)}</p>
                    <div className="flex items-center justify-between mb-2">
                      <Image 
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                        alt="Weather Icon"
                        width={100}
                        height={100}
                      />
                      <div className="flex items-center ml-2">
                        <p className="text-2xl font-bold">{day.temp.day}°C</p>
                        {/* Add thermometer icon before temperature */}
                        <Image
                          src="/assets/icons/thermometer.png"
                          alt="Thermometer Icon"
                          width={30}
                          height={30}
                          className="mr-2"
                        />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <p>Humidity 
                          <Image 
                            src="/assets/icons/humidity.png" 
                            alt="Humidity Icon" 
                            width={20} 
                            height={20} 
                            className="inline ml-1"
                          /> :
                          <span className="font-bold">{day.humidity}%</span>
                        </p>
                      </div>
                      <div>
                        <p>Weather: <span className="font-bold">{day.weather[0].description}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeatherDashboard;
