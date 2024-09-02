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
    console.log(body, "body");
const requestBody = {
    first_name: body.firstName,
    last_name: body.lastName,
    phone_number: body.contactNo,
    password: body.password
}
console.log(requestBody)

try {
    // const userId = localStorage.getItem("userId")
    const response = await axios.post(`${apiUrl}/blogs/signup/`, requestBody);
    return response;
} catch (error) {
    console.log("Error Signing up:", error);
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


export const signinUser = async (body) => {
    console.log(body);
const requestBody = {
    phone_number: body.phone_number,
    password: body.password
}
console.log(requestBody)

try {
    // const userId = localStorage.getItem("userId")
    const response = await axios.post(`${apiUrl}/blogs/signin/`, requestBody);
    return response;
} catch (error) {
    console.log("Error Sigining in:", error);
    return error;
}
};

export const fertilizerRecommendation = async ({body}) => {
    console.log(body);
    console.log(body.nutrientValues) 

const requestBody = {
    crop_name: body.cropName,
    farm_area: body.plotSize,
    n: parseFloat(body.nutrientValues.nitrogen),
    p: parseFloat(body.nutrientValues.phosphorus),
    k: parseFloat(body.nutrientValues.potassium),
}
console.log(requestBody);

try {
    // const userId = localStorage.getItem("userId")
    const response = await axios.post(`${apiUrl}/app/fertilizer-combinations/`, requestBody);
    return response;
} catch (error) {
    console.log("Error Sigining in:", error.response.data);
    return error;
}
};

export const cropRecommendation = async (inputs) => {
    console.log(inputs);
const requestBody = {
    lat: inputs.latitude,
    long: inputs.longitude,
    n: parseFloat(inputs.nitrogen),
    p: parseFloat(inputs.phosphorus),
    k: parseFloat(inputs.potassium),
    ph: parseFloat(inputs.pH),
}
console.log(requestBody);

try {
    // const userId = localStorage.getItem("userId")
    const response = await axios.post(`${apiUrl}/app/crop-recommendation/`, requestBody);
    console.log(response)
    return response;
} catch (error) {
    console.log("Error Sigining in:", error.response.data);
    return error;
}
};

// helpers/apiHelpers.js

export const detectDisease = async (file) => {
    console.log(file)
    try {
      const formData = new FormData();
      formData.append('image', file);

    // Inspect FormData contents
    for (let [key, value] of formData.entries()) {
        console.log(key, value);  // This will log each key-value pair
      }
  
      const response = await axios.post(`${apiUrl}/app/predict-disease/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data;
    } catch (error) {
        console.error('Error detecting disease:', error.response?.data || error.message);
        throw error;
    }
  };
