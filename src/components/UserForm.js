import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Submission successful!');
      setName('');
      setSocialMediaHandle('');
      setImages([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdminRedirect = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-lg p-10 max-w-lg mx-auto"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          Submit Your Info
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-200"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="socialMediaHandle"
            >
              Social Media Handle
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-200"
              id="socialMediaHandle"
              type="text"
              value={socialMediaHandle}
              onChange={(e) => setSocialMediaHandle(e.target.value)}
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="images"
            >
              Upload Images
            </label>
            <input
              className="w-full px-4 py-3 text-gray-100 bg-purple-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              id="images"
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </motion.button>
        </form>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full py-3 px-4 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-lg transition duration-300 shadow-lg"
          onClick={handleAdminRedirect}
        >
          Go to Admin Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UserForm;
