'use client';
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { detectDisease } from "../../util/helper"; // Import the helper function

export default function DiseaseDetection() {
    const [image, setImage] = useState(null);
    const [diseaseName, setDiseaseName] = useState("");
    const [diseaseDescription, setDiseaseDescription] = useState("Detailed description of the disease based on the analysis.");
    const [causes, setCauses] = useState([]);
    const [prevention, setPrevention] = useState([]);
    // const [cure, setCure] = useState("Detailed information on cure.");
    const [recommendedProducts, setRecommendedProducts] = useState([
        { name: "Product 1", description: "Product 1 description." },
        { name: "Product 2", description: "Product 2 description." },
        { name: "Product 3", description: "Product 3 description." }
    ]);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));

            try {
                // Use the helper function to send the image to the backend
                const data = await detectDisease(file);
                
                // Update state variables based on the response data
                setDiseaseName(data.disease_name || "Unknown Disease");
                setDiseaseDescription(data.description || "No description available.");
                setCauses(data.causes ? Object.values(data.causes) : ["No cause information available."]);
                setPrevention(data.prevent ? Object.values(data.prevent) : ["No prevention steps available."]);
                setCure(data.cure || "No cure information available.");
                setRecommendedProducts(data.recommended_products || []);
            } catch (error) {
                console.error('Failed to detect disease:', error);
                alert('Failed to detect disease. Please try again.');
            }
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
                                    <ul className="list-disc list-inside text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {causes.map((cause, index) => (
                                            <li key={index}>{cause}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Prevention */}
                                <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        Prevention
                                    </h3>
                                    <ul className="list-disc list-inside text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {prevention.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Cure */}
                                {/* <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                        Cure
                                    </h3>
                                    <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                        {cure}
                                    </p>
                                </div> */}
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
                            <div className="grid md:grid-cols-2 gap-12">
                                {recommendedProducts.map((product, index) => (
                                    <div key={index} className="bg-neutral-100 p-8 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-dark-900">
                                            {product.name}
                                        </h3>
                                        <p className="text-base font-md text-neutral-700 dark:text-neutral-dark-700">
                                            {product.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
