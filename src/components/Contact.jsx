import React from "react";
import Sidenav from "./templates/Sidenav";

const Contact = () => {
  return (
    <div className="w-full flex">
      <Sidenav />
      <div className="w-[80%] h-[100vh] bg-[#121212] overflow-auto text-gray-200 px-8 md:px-20 py-12 leading-relaxed flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-zinc-500 mb-6">
            Get in Touch ✉️
          </h1>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hello? Fill out the form below, and we'll get back to you as soon as possible!
          </p>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1E1E1E] text-gray-200 p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1E1E1E] text-gray-200 p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm">Your Message</label>
              <textarea
                placeholder="Type your message..."
                rows="5"
                className="w-full bg-[#1E1E1E] text-gray-200 p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-[#6556CD] transition"
            >
              Send Message
            </button>
          </form>
          <div className="text-center mt-12">
            <p className="text-gray-400"> Email: support@moviemirror.com</p>
            <p className="text-gray-400"> Location: Film City, Sector-16A, Noida</p>
            <p className="text-gray-400"> Phone: +91 98765 XXXXX</p>
          </div>
        </div>
        <footer className="text-center text-gray-500 text-sm mt-12 py-4 border-t border-gray-700">
          © {new Date().getFullYear()} Movie Mirror. All rights reserved. Made by <span className="text-gray-300 font-semibold">Vansh Singh</span>.
        </footer>
      </div>
    </div>
  );
};

export default Contact;
