import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      console.log(response.data);
      
      navigate('/');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact">
    <footer className="bg-richChocolate py-14">
    </footer>
    <div className="flex justify-center">
      <div className="mt-8 bg-richChocolate py-8 px-4 w-50">
        <h2 className="text-xl font-semibold text-creamyVanilla mb-4">Leave a Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-creamyVanilla">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-creamyVanilla">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-creamyVanilla">Your Feedback:</label>
            <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="4" placeholder="Your feedback" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="bg-richChocolate text-white py-2 px-4 rounded-md hover:bg-warmBeige">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default ContactUs;
