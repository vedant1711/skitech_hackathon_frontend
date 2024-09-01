"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { toast } from "sonner";
import { onUpload } from "../../components/tailwind/image-upload";
import { addBlog } from "../../util/helper"; // Import the helper function


export default function CreatePost() {
  const user = 2;
  const router = useRouter();
  const [title, setTitle] = useState("Untitled Blog");
  const [contentHtml, setContentHtml] = useState("<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body><h2>Introducing OranetAI</h2><p><span style=\"color: rgb(255, 255, 255)\">Our mission is to harness the power of AI to solve complex business challenges &amp; decision-makers with data-driven insights, and enhance user experiences across digital platforms. </span></p><h3>You can even add your code snippets</h3><pre><code data-highlighted=\"yes\" class=\"hljs language-python\"><span class=\"hljs-keyword\">def</span> <span class=\"hljs-title function_\">welcome_user</span>(<span class=\"hljs-params\">name</span>):\n    <span class=\"hljs-built_in\">print</span>(<span class=\"hljs-string\">f\"Welcome, <span class=\"hljs-subst\">{name}</span>, to OranetAI!\"</span>)\n\n<span class=\"hljs-comment\"># Example usage</span>\nuser_name = <span class=\"hljs-built_in\">input</span>(<span class=\"hljs-string\">\"Please enter your name: \"</span>)\nwelcome_user(user_name)</code></pre><h3>Features</h3><ol class=\"list-decimal list-outside leading-3 -mt-2 tight\" data-tight=\"true\"><li class=\"leading-normal -mb-2\"><p>Slash menu &amp; bubble menu</p></li><li class=\"leading-normal -mb-2\"><p>AI autocomplete (type <code class=\"rounded-md bg-muted px-1.5 py-1 font-mono font-medium\" spellcheck=\"false\">++</code> to activate, or select from slash menu)</p></li><li class=\"leading-normal -mb-2\"><p>Image uploads (drag &amp; drop / copy &amp; paste, or select from slash menu) </p></li><li class=\"leading-normal -mb-2\"><p>Add tweets from the command slash menu:</p></li><li class=\"leading-normal -mb-2\"><p></p><div data-twitter=\"\" src=\"https://x.com/Vedant_Somani17/status/1827390315294290070\"></div></li><li class=\"leading-normal -mb-2\"><p>Mathematical symbols with LaTeX expression:</p><ol class=\"list-decimal list-outside leading-3 -mt-2 tight\" data-tight=\"true\"><li class=\"leading-normal -mb-2\"><p><span latex=\"E = mc^2\" data-type=\"math\">E = mc^2</span></p></li><li class=\"leading-normal -mb-2\"><p><span latex=\"a^2 = \\sqrt{b^2 + c^2}\" data-type=\"math\">a^2 = \\sqrt{b^2 + c^2}</span></p></li><li class=\"leading-normal -mb-2\"><p><span latex=\"\\hat{f} (\\xi)=\\int_{-\\infty}^{\\infty}f(x)e^{-2\\pi ix\\xi}dx\" data-type=\"math\">\\hat{f} (\\xi)=\\int_{-\\infty}^{\\infty}f(x)e^{-2\\pi ix\\xi}dx</span></p></li><li class=\"leading-normal -mb-2\"><p><span latex=\"A=\\begin{bmatrix}a&amp;b\\\\c&amp;d \\end{bmatrix}\" data-type=\"math\">A=\\begin{bmatrix}a&amp;b\\\\c&amp;d \\end{bmatrix}</span></p></li><li class=\"leading-normal -mb-2\"><p><span latex=\"\\sum_{i=0}^n x_i\" data-type=\"math\">\\sum_{i=0}^n x_i</span></p></li></ol></li></ol><hr class=\"mt-4 mb-6 border-t border-muted-foreground\" /><h3>Learn more</h3><ul class=\"not-prose pl-2 \" data-type=\"taskList\"><li class=\"flex gap-2 items-start my-4\" data-checked=\"false\" data-type=\"taskItem\"><label><input type=\"checkbox\" /><span></span></label><div><p>Star us on <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer\" href=\"https://github.com/steven-tey/novel\">GitHub</a></p></div></li><li class=\"flex gap-2 items-start my-4\" data-checked=\"false\" data-type=\"taskItem\"><label><input type=\"checkbox\" /><span></span></label><div><p>Install the <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer\" href=\"https://www.npmjs.com/package/novel\">NPM package</a></p></div></li><li class=\"flex gap-2 items-start my-4\" data-checked=\"false\" data-type=\"taskItem\"><label><input type=\"checkbox\" /><span></span></label><div><p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer\" href=\"https://vercel.com/templates/next.js/novel\">Deploy your own</a> to Vercel</p></div></li></ul></body></html>"
);
  const [contentJson, setContentJson] = useState({
    "type": "doc",
    "content": [
      {
        "type": "heading",
        "attrs": {
          "level": 2
        },
        "content": [
          {
            "type": "text",
            "text": "Introducing OranetAI"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "marks": [
              {
                "type": "textStyle",
                "attrs": {
                  "color": "rgb(255, 255, 255)"
                }
              }
            ],
            "text": "Our mission is to harness the power of AI to solve complex business challenges & decision-makers with data-driven insights, and enhance user experiences across digital platforms."
          }
        ]
      },
      {
        "type": "heading",
        "attrs": {
          "level": 3
        },
        "content": [
          {
            "type": "text",
            "text": "You can even add your code snippets"
          }
        ]
      },
      {
        "type": "codeBlock",
        "attrs": {
          "language": null
        },
        "content": [
          {
            "type": "text",
            "text": "def welcome_user(name):\n    print(f\"Welcome, {name}, to OranetAI!\")\n\n# Example usage\nuser_name = input(\"Please enter your name: \")\nwelcome_user(user_name)"
          }
        ]
      },
      {
        "type": "heading",
        "attrs": {
          "level": 3
        },
        "content": [
          {
            "type": "text",
            "text": "Features"
          }
        ]
      },
      {
        "type": "orderedList",
        "attrs": {
          "tight": true,
          "start": 1
        },
        "content": [
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Slash menu & bubble menu"
                  }
                ]
              }
            ]
          },
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "AI autocomplete (type "
                  },
                  {
                    "type": "text",
                    "marks": [
                      {
                        "type": "code"
                      }
                    ],
                    "text": "++"
                  },
                  {
                    "type": "text",
                    "text": " to activate, or select from slash menu)"
                  }
                ]
              }
            ]
          },
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Image uploads (drag & drop / copy & paste, or select from slash menu)"
                  }
                ]
              }
            ]
          },
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Add tweets from the command slash menu:"
                  }
                ]
              }
            ]
          },
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph"
              },
              {
                "type": "twitter",
                "attrs": {
                  "src": "https://x.com/Vedant_Somani17/status/1827390315294290070"
                }
              }
            ]
          },
          {
            "type": "listItem",
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Mathematical symbols with LaTeX expression:"
                  }
                ]
              },
              {
                "type": "orderedList",
                "attrs": {
                  "tight": true,
                  "start": 1
                },
                "content": [
                  {
                    "type": "listItem",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "math",
                            "attrs": {
                              "latex": "E = mc^2"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "listItem",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "math",
                            "attrs": {
                              "latex": "a^2 = \\sqrt{b^2 + c^2}"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "listItem",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "math",
                            "attrs": {
                              "latex": "\\hat{f} (\\xi)=\\int_{-\\infty}^{\\infty}f(x)e^{-2\\pi ix\\xi}dx"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "listItem",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "math",
                            "attrs": {
                              "latex": "A=\\begin{bmatrix}a&b\\\\c&d \\end{bmatrix}"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "listItem",
                    "content": [
                      {
                        "type": "paragraph",
                        "content": [
                          {
                            "type": "math",
                            "attrs": {
                              "latex": "\\sum_{i=0}^n x_i"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "horizontalRule"
      },
      {
        "type": "heading",
        "attrs": {
          "level": 3
        },
        "content": [
          {
            "type": "text",
            "text": "Learn more"
          }
        ]
      },
      {
        "type": "taskList",
        "content": [
          {
            "type": "taskItem",
            "attrs": {
              "checked": false
            },
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Star us on "
                  },
                  {
                    "type": "text",
                    "marks": [
                      {
                        "type": "link",
                        "attrs": {
                          "href": "https://github.com/steven-tey/novel",
                          "target": "_blank",
                          "rel": "noopener noreferrer nofollow",
                          "class": "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
                        }
                      }
                    ],
                    "text": "GitHub"
                  }
                ]
              }
            ]
          },
          {
            "type": "taskItem",
            "attrs": {
              "checked": false
            },
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "text": "Install the "
                  },
                  {
                    "type": "text",
                    "marks": [
                      {
                        "type": "link",
                        "attrs": {
                          "href": "https://www.npmjs.com/package/novel",
                          "target": "_blank",
                          "rel": "noopener noreferrer nofollow",
                          "class": "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
                        }
                      }
                    ],
                    "text": "NPM package"
                  }
                ]
              }
            ]
          },
          {
            "type": "taskItem",
            "attrs": {
              "checked": false
            },
            "content": [
              {
                "type": "paragraph",
                "content": [
                  {
                    "type": "text",
                    "marks": [
                      {
                        "type": "link",
                        "attrs": {
                          "href": "https://vercel.com/templates/next.js/novel",
                          "target": "_blank",
                          "rel": "noopener noreferrer nofollow",
                          "class": "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer"
                        }
                      }
                    ],
                    "text": "Deploy your own"
                  },
                  {
                    "type": "text",
                    "text": " to Vercel"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  
  );
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [titleImage, setTitleImage] = useState("");
  const [metaTitle, setMetaTitle] = useState(
    "Meta Title For SEO Optimization of Your Blog"
  );
  const [metaDescription, setMetaDescription] = useState(
    "Meta Description For SEO Optimization of Your Blog"
  );
  const [slug, setSlug] = useState("untitled-blog");
  const [isUploading, setIsUploading] = useState(false); // State to track image upload status

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setIsUploading(true); // Set uploading state to true
        toast.loading("Uploading image...");
        const url = await onUpload(file);
        setTitleImage(url);
        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.error("Failed to upload image:", error);
        toast.error("Failed to upload image.");
      } finally {
        setIsUploading(false); // Set uploading state to false
      }
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault()
    console.log("handleAddBlog called"); // Debugging log

    const blogData = {
      user,
      title,
      contentHtml,
      contentJson,
      contentMarkdown,
      titleImage,
      metaTitle,
      metaDescription,
      tags,
      slug,
    };

    console.log("Blog Data:", blogData);

    try {
      const addedBlog = await addBlog(blogData); // Use the helper function
      console.log("Blog added:", addedBlog);
      toast.success("Blog added successfully!");
      // router.push(`/editBlog/${addedBlog.slug}`); // Redirect to blogs page or any other route
    } catch (error) {
      console.error("Failed to add blog:", error);
      if (error.response && error.response.data && error.response.data.slug) {
        toast.error(`Slug not available.`);
      } else {
        toast.error("Failed to add blog.");
      }
    }
  };




  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To display the selected image
  const [formData, setFormData] = useState({
    title: "",
    tags: "",
    content: "",
    image: null,
  });
  const [tagInput, setTagInput] = useState(""); // New state to handle tag input
  const [tags, setTags] = useState([]); // New state to store tags

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
              <form className="flex flex-col gap-6" onSubmit={handleAddBlog}>
                {/* Title Input */}
                <input
                  type="text"
                  placeholder="Title"
                  required
                  value={title}
                  className="border-2 p-3 rounded-md focus:outline-none focus:border-blue-500"
                  onChange={(e) => setTitle(e.target.value)}

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
              placeholder="Choose File"
              className="border p-2 w-full rounded bg-gray-700 text-white placeholder-gray-400"
              onChange={handleImageChange}
              disabled={isUploading} // Disable the file input during upload
            />
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Selected preview"
                    className="w-full h-72 object-cover mt-4 rounded-md"
                  />
                )}

                {/* Publish Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-light-950 shadow-md text-white bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-md hover:bg-gradient-to-l transition duration-200"
                >
                  Write Blog
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
