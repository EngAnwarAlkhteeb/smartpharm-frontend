import React from 'react';
import { FaTimes, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
          <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Blog content */}
        <div className="p-6">
          {/* Blog metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <FaUser className="mr-2" />
              {blog.author}
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              {blog.date}
            </div>
            <div className="flex items-center">
              <FaTag className="mr-2" />
              {blog.category}
            </div>
          </div>

          {/* Blog content - rendered as markdown */}
          <div className="prose max-w-none">
            {blog.content.split('\n').map((paragraph, index) => {
              // Handle headers
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
              } else if (paragraph.startsWith('#### ')) {
                return <h4 key={index} className="text-lg font-bold mt-4 mb-2">{paragraph.substring(5)}</h4>;
              } else if (paragraph.startsWith('- ')) {
                // Handle list items
                return <li key={index} className="ml-6 mb-1">{paragraph.substring(2)}</li>;
              } else if (paragraph.trim() === '') {
                // Handle empty lines
                return <br key={index} />;
              } else {
                // Regular paragraphs
                return <p key={index} className="mb-4">{paragraph}</p>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;

