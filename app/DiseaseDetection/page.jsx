'use client';
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function DiseaseDetection() {
    const [image, setImage] = useState(null);
    const [cropName, setCropName] = useState("");
    const [diseaseName, setDiseaseName] = useState("");
    const [diseaseDescription, setDiseaseDescription] = useState("Detailed description of the disease based on the analysis.");
    const [cause, setCause] = useState("Detailed explanation of the cause of the disease based on the image and the crop name provided.");
    const [prevention, setPrevention] = useState("Steps to prevent the disease from spreading or occurring in the future.");
    const [cure, setCure] = useState("Remedies or treatments available to cure the disease.");
    const [recommendedProducts, setRecommendedProducts] = useState([
        { name: "Product 1", description: "Product 1 description." },
        { name: "Product 2", description: "Product 2 description." },
        { name: "Product 3", description: "Product 3 description." }
    ]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            // This is where you would integrate with the ML model
            // and update state variables with data returned from the backend.
        }
    };

    return (
        <>
            <Layout>
                {/* Hero Section */}
                <section className="py-16 lg:py-24">
                    <div className="container px-4 text-center">
                        <h1 className="heading-2 max-w-7xl mb-8 mx-auto text-neutral-950 dark:text-neutral-dark-950">
                            <span className="font-light">Crop</span> Disease Detection
                        </h1>
                        <p className="text-lg font-md text-neutral-950 dark:text-neutral-dark-950 mb-16 max-w-2xl mx-auto">
                            Upload an image of your crop to detect diseases and get valuable insights on how to manage them.
                        </p>
                        <Link href="#detection-section" className="btn bg-primary-light-950 dark:bg-primary-dark-950 hover:bg-primary-light-800 dark:hover:bg-primary-dark-800 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950">
                            Get Started
                        </Link>
                    </div>
                </section>

                {/* Detection Section */}
                <section id="detection-section" className="py-16 lg:py-24">
                    <div className="container px-4">
                        <div className="md:w-3/4 lg:w-1/2 mx-auto text-center">
                            <h2 className="heading-2 max-w-7xl mb-8 text-neutral-950 dark:text-neutral-dark-950">
                                Upload Your Crop Image
                            </h2>
                            <div className="mb-8">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    id="imageUpload"
                                />
                                <label htmlFor="imageUpload" className="cursor-pointer border-2 border-dashed border-neutral-400 rounded-lg p-8 inline-block w-full bg-neutral-100 hover:bg-neutral-200">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt="Uploaded Crop"
                                            className="rounded-lg w-full h-auto"
                                        />
                                    ) : (
                                        <span className="text-neutral-600">
                                            Drag & Drop or Click to Upload
                                        </span>
                                    )}
                                </label>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Crop Name"
                                value={cropName}
                                onChange={(e) => setCropName(e.target.value)}
                                className="mb-4 w-full p-4 text-base font-md text-neutral-950 border border-neutral-300 rounded-lg"
                            />
                            <input
                                type="text"
                                placeholder="Enter Disease Name (if known)"
                                value={diseaseName}
                                onChange={(e) => setDiseaseName(e.target.value)}
                                className="w-full p-4 text-base font-md text-neutral-950 border border-neutral-300 rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Disease Information Section */}
                <section className="py-16 lg:py-24 bg-neutral-50">
                    <div className="container px-4">
                        <div className="md:w-3/4 lg:w-1/2 mx-auto text-center">
                            <h2 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950">
                                Disease Information
                            </h2>
                            <div className="grid gap-12">
                                {/* Disease Name and Description */}
                                <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        {diseaseName || "Disease Name"}
                                    </h3>
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {diseaseDescription}
                                    </p>
                                </div>

                                {/* Cause */}
                                <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        Cause
                                    </h3>
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {cause}
                                    </p>
                                </div>

                                {/* Prevention */}
                                <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        Prevention
                                    </h3>
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {prevention}
                                    </p>
                                </div>

                                {/* Cure */}
                                <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        Cure
                                    </h3>
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {cure}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommended Products Section */}
                <section className="py-16 lg:py-24 bg-neutral-50">
                    <div className="container px-4">
                        <div className="md:w-3/4 lg:w-1/2 mx-auto text-center">
                            <h2 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950">
                                Recommended Products
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {recommendedProducts.length ? recommendedProducts.map((product, index) => (
                                    <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                        <h6 className="text-lg font-bold text-neutral-900 dark:text-neutral-dark-900 mb-1">{product.name}</h6>
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-dark-700">{product.description}</p>
                                    </div>
                                )) : (
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        No recommended products available for this disease.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* References Section */}
                <section className="pb-12 lg:pb-24 bg-neutral-100">
                    <div className="container px-4">
                        <h2 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950 text-center">
                            References
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            <div className="bg-neutral-50 p-8 rounded-lg shadow-md text-center">
                                <img src="/assets/imgs/avatar/avatar-03.png" alt="Expert 1" className="rounded-full size-16 mb-4 mx-auto" />
                                <h6 className="text-lg font-bold text-neutral-900 dark:text-neutral-dark-900 mb-1">Dr. John D</h6>
                                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-dark-700">Agriculture Expert</p>
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-dark-500">Phone: (239) 555-0108</p>
                            </div>
                            <div className="bg-neutral-50 p-8 rounded-lg shadow-md text-center">
                                <img src="/assets/imgs/avatar/avatar-04.png" alt="Expert 2" className="rounded-full size-16 mb-4 mx-auto" />
                                <h6 className="text-lg font-bold text-neutral-900 dark:text-neutral-dark-900 mb-1">Dr. Jane S</h6>
                                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-dark-700">Plant Pathologist</p>
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-dark-500">Phone: (239) 555-0130</p>
                            </div>
                            <div className="bg-neutral-50 p-8 rounded-lg shadow-md text-center">
                                <img src="/assets/imgs/avatar/avatar-05.png" alt="Expert 3" className="rounded-full size-16 mb-4 mx-auto" />
                                <h6 className="text-lg font-bold text-neutral-900 dark:text-neutral-dark-900 mb-1">Dr. Emily R</h6>
                                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-dark-700">Crop Consultant</p>
                                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-dark-500">Phone: (239) 555-0150</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
