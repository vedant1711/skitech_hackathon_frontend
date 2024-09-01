import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL



export const fetchUser = async (userID) => {
    try {
      // const userId = localStorage.getItem("userId")
      const response = await axios.get(`${apiUrl}/blogs/users/${userID}/`);
      return response;
    } catch (error) {
      console.log("Error fetching author details:", error);
      return error;
    }
  };

export const signupUser = async (body) => {
try {
    // const userId = localStorage.getItem("userId")
    const response = await axios.get(`${apiUrl}/blogs/signup/`, body);
    return response;
} catch (error) {
    console.log("Error fetching author details:", error);
    return error;
}
};

export const addBlog = async (blogData) => {

    const requestBody = {
        user: blogData.user,
        title: blogData.title,
        content_html: blogData.contentHtml,
        content_json: blogData.contentJson,
        content_markdown: blogData.contentMarkdown,
        title_image: blogData.titleImage,
        meta_title: blogData.metaTitle,
        meta_description: blogData.metaDescription,
        meta_keywords: blogData.metaKeywords,
        slug: blogData.slug,
      };
      
    console.log(requestBody)

  try {
    const response = await axios.post(`${apiUrl}/blogs/blogentry/`, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to add blog:", error.response.data);
    throw error;
  }
};

export const fetchCitiesHelper = async (selectedState) => {
  const API_KEY = process.env.NEXT_PUBLIC_LOCATION_API_KEY; // Your encoded API key
  const apiUrl = process.env.NEXT_PUBLIC_LOCATION_API_URL; // Your encoded API key

  try {
    const response = await axios.get(`${apiUrl}/${selectedState}/cities`,{
      headers: {
        'X-CSCAPI-KEY': `${API_KEY}`
      }
    });
    // console.log(JSON.stringify(response.data));
    // console.log('Cities fetched:', response.data); // Debugging line
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
