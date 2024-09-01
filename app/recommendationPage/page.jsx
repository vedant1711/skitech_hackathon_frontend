'use client';
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import CropRecommendation from '../recommendation/CropRecommendation';
import FertilizerRecommendation from '../recommendation/FertilizerRecommendation';

const RecommendationPage = () => {
  const [activeTab, setActiveTab] = useState('crop');

  const renderContent = () => {
    if (activeTab === 'crop') {
      return <CropRecommendation />;
    } else {
      return <FertilizerRecommendation />;
    }
  };

  return (
    <Layout>
      <section className="relative py-10 lg:py-12 lg:mb-5">
        <div className="container">
        <h1 className="heading-2 max-w-7xl mb-8 mx-auto text-center text-neutral-950 dark:text-neutral-dark-950">
                            Recommendations
                        </h1>
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className={`py-3 px-6 rounded-full ${activeTab === 'crop' ? 'bg-primary-light-950 text-white' : 'bg-neutral-0 dark:bg-neutral-dark-0'}`}
              onClick={() => setActiveTab('crop')}
            >
              Crop Recommendation
            </button>
            <button
              className={`py-3 px-6 rounded-full ${activeTab === 'fertilizer' ? 'bg-primary-light-950 text-white' : 'bg-neutral-0 dark:bg-neutral-dark-0'}`}
              onClick={() => setActiveTab('fertilizer')}
            >
              Fertilizer Recommendation
            </button>
          </div>

          <div className="flex justify-center">
            {renderContent()}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecommendationPage;
