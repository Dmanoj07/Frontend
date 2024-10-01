// import React from 'react';
// import './Contact.css'; // Import the CSS file for custom styles

// const Contact = () => {
//   return (
//     <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
//       <div className="container mx-auto font-mono">
//         <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Contact Me</h2>
//         <form className="contact-form max-w-lg mx-auto p-6 border-2 border-green-600 rounded-lg">
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-2 text-green-400">Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
//               required 
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2 text-green-400">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
//               required 
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block mb-2 text-green-400">Message</label>
//             <textarea 
//               id="message" 
//               rows="4" 
//               className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
//               required
//             ></textarea>
//           </div>
//           <button 
//             className="w-full bg-green-900 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
//             onClick={() => window.location.href = "mailto:manoj123dhami@gmail.com?subject=Subject%20Here&body=Message%20Here"}
//           >
//             Send Message
//           </button>

//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/send', formData);
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto font-mono">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form max-w-lg mx-auto p-6 border-2 border-green-600 rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-green-400">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-green-400">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-green-400">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="4" 
              className="w-full p-2 border border-green-400 bg-transparent text-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-green-900 text-white px-2 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

