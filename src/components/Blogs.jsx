import React, { useState } from "react";
import BlogCard from "../layouts/BlogCard";
import Button from "../layouts/Button";
import blogs from "../data/blogs";
import BlogModal from "./BlogModal";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Get the first 3 blogs for display
  const displayedBlogs = blogs.slice(0, 3);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Medical Posts
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Stay informed with the latest research, health tips, and medical breakthroughs
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="More Articles" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 pt-14">
        {displayedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            img={blog.image}
            title={blog.title}
            description={blog.summary}
            onClick={() => handleBlogClick(blog)}
          />
        ))}
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={closeModal} />
      )}
    </div>
  );
};

export default Blogs;

