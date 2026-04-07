import React from "react";
import CreateBlogs from "./CreateBlogs";
import BlogList from "./BlogList";



const Blog = () => {
  return (
    <div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white -mt-7 rounded-t-2xl shadow">
        <CreateBlogs />
      </div>
      <div className="lg:mx-6 mx-2 lg:px-4 px-2 py-2 bg-white mt-4 mb-8 rounded-b-2xl shadow-md">
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
