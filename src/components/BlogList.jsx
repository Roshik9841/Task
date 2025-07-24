import React, { useState ,useEffect} from 'react';
import { useBlog } from './BlogContext';
import AOS from 'aos';
import 'aos/dist/aos.css';


const BlogList = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  const { posts, loading, error, search, setSearch, page, setPage, totalPages, totalPosts } = useBlog();
  const [selectedPost, setSelectedPost] = useState(null);

  if (loading) return <div className="flex flex-wrap justify-center p-8"><p>Loading posts...</p></div>;
  if (error) return <div className="flex flex-wrap justify-center p-8"><p>Error: {error}</p></div>;

  return (
    <div>
      <div className="text-center my-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="p-2 w-64 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <div className="mt-2 text-gray-500 text-sm">
          Showing {posts.length} of {totalPosts} posts
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center p-8 sm:flex-col sm:items-center sm:p-2">
        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-lg p-6 max-w-xs min-w-[260px] flex-1 cursor-pointer transition-shadow duration-200"
            onClick={() => setSelectedPost(post)}
          >
            <h2 className="mb-2 text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700 text-base">{post.body.slice(0, 80)}...</p>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center my-8 gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded border border-gray-300 ${page === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100 cursor-pointer'}`}
        >
          Prev
        </button>
        <span className="self-center">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded border border-gray-300 ${page === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-white hover:bg-gray-100 cursor-pointer'}`}
        >
          Next
        </button>
      </div>
      {/* Modal for full post */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-lg max-w-[90vw] w-[400px] p-8 shadow-2xl relative cursor-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-bold">{selectedPost.title}</h2>
            <p className="text-gray-700 text-base">{selectedPost.body}</p>
          </div>
        </div>
      )}
      <div className="space-y-20 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Scroll Down</h1>

      <div data-aos="fade-up" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 1</h2>
        <p>Some content that fades in when scrolling into view.</p>
      </div>

      <div data-aos="fade-left" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 2</h2>
        <p>This one slides in from the left.</p>
      </div>

      <div data-aos="zoom-in" className="bg-white p-10 shadow-lg rounded">
        <h2 className="text-2xl font-semibold">Section 3</h2>
        <p>This one zooms in.</p>
      </div>
    </div>
 

    </div>
    
  );
};

export default BlogList; 




 
    