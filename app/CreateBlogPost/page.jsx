"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To display the selected image
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    content: "",
    image: null,
  });
  const [publishError, setPublishError] = useState(null);
  const [tagInput, setTagInput] = useState(""); // New state to handle tag input
  const [tags, setTags] = useState([]); // New state to store tags

  // Function to handle image selection and preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile)); // Display image preview
    }
  };

  // Function to handle tag addition
  const handleTagAddition = (e) => {
    e.preventDefault();
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Function to remove a tag
  const handleTagRemoval = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Dummy function to mimic form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setPublishError("Please select an image");
      return;
    }
    const updatedFormData = { ...formData, tags: tags.join(",") }; // Store tags as comma-separated values
    console.log("Form submitted", updatedFormData);
  };

  return (
    <>
      <Layout>
        <section className="py-8 lg:py-8 bg-gray-50">
          <div className="container px-4 text-center">
            <h1 className="heading-2 max-w-7xl mb-2 mx-auto text-neutral-950 dark:text-neutral-dark-950">
              <span className="font-light">Create</span> Blog Post
            </h1>
            <p className="text-lg font-md text-neutral-950 dark:text-neutral-dark-950 mb- max-w-2xl mx-auto">
              Share your thoughts with the world by creating a new blog post.{" "}
            </p>
            {/* <Link href="#create-post-section" className="btn bg-primary-light-950 dark:bg-primary-dark-950 hover:bg-primary-light-800 dark:hover:bg-primary-dark-800 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950">
    Get Started
</Link> */}
          </div>
        </section>

        <section id="create-post-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Title"
                  required
                  className="border-2 p-3 rounded-md focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />

                {/* Tags Input */}
                <div className="border-2 p-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      placeholder="Add a tag"
                      className="flex-1 p-2 border rounded-md focus:outline-none"
                      onChange={(e) => setTagInput(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={handleTagAddition}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                      Add Tag
                    </button>
                  </div>
                  {/* Display Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full flex items-center gap-2"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleTagRemoval(tag)}
                          className="text-red-500 font-bold"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* File Input */}
                <div className="flex flex-col sm:flex-row items-center gap-4 border-2 border-dashed border-gray-300 p-3 rounded-md">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="flex-1"
                  />
                  <button
                    type="button"
                    className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    disabled={!file}
                  >
                    {file ? "Image Selected" : "Select Title Image"}
                  </button>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Selected preview"
                    className="w-full h-72 object-cover mt-4 rounded-md"
                  />
                )}

                {/* Content Editor */}
                <textarea
                  placeholder="Write something..."
                  required
                  className="h-40 border-2 p-3 rounded-md focus:outline-none focus:border-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                />

                {/* Publish Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-light-950 shadow-md text-white bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-md hover:bg-gradient-to-l transition duration-200"
                >
                  Write Blog
                </button>

                {/* Error Alert */}
                {publishError && (
                  <div className="mt-5 bg-red-100 text-red-800 p-3 rounded-md">
                    {publishError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
