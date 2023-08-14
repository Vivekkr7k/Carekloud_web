import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <div className="max-w-md mx-auto mb-20" id='Contact'>
      <h1 className='text-7xl   font-bold block items-center justify-center text-center my-20'>  Contact  <span className='text-orange-700' >Us</span> <span className='text-orange-500' >by</span> </h1>
      {/* <form className=" shadow-md  px-8 pt-6 pb-8 mb-4 bg-blue-200 rounded-xl text-black">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form> */}
      <div>
        <button className='bg-black px-10 py-5 rounded-full w-full text-3xl text-white  font-bold hover:bg-black/50 hover:text-black transition-all duration-300 ease-in-out '> <span  className='mx-3'><FontAwesomeIcon icon={faEnvelope} /></span>  Email </button>
      </div>
    </div>
  );
};

export default ContactForm;
