import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import ContentLoader from 'react-content-loader';

const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d77.04877752371227!3d28.412198075281953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp";
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    emailjs
      .sendForm('service_zgt5mwd', 'template_ca3eueg', form.current, {
        publicKey: 'I5OM_QDIwWNhSv7Lg',
      })
      .then(
        () => {
          setLoading(false); // Set loading state to false
          toast.success('Message sent successfully!');
          form.current.reset(); // Reset the form
        },
        (error) => {
          setLoading(false);
          toast.error('There was an issue. Please try again later.');
          console.log('Error:', error.text);
        }
      );
  };

  return (
    <>
      <div className="flex flex-wrap bg-gray-100 p-4">
        {/* Map */}
        <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
          <iframe
            className="w-full h-64 sm:h-80 lg:h-[600px] border-0"
            src={map}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
          {loading ? (
            <div className="space-y-4">
              {/* Shimmer effect for the form fields */}
              <ContentLoader
                speed={2}
                width={600}
                height={400}
                viewBox="0 0 600 400"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="10" rx="4" ry="4" width="100%" height="40" />
                <rect x="0" y="70" rx="4" ry="4" width="100%" height="40" />
                <rect x="0" y="130" rx="4" ry="4" width="100%" height="80" />
                <rect x="0" y="230" rx="4" ry="4" width="100%" height="40" />
              </ContentLoader>
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                  placeholder="Enter Your Name"
                  type="text"
                  name="from_name"
                  id="name"
                />
              </div>
              <div>
                <input
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                  placeholder="Enter Your Email"
                  type="email"
                  name="from_email"
                  id="email"
                />
              </div>
              <div>
                <textarea
                  className="w-full p-3 border-2 border-gray-300 rounded-md"
                  placeholder="Type Your Message"
                  name="message"
                  id="message"
                />
              </div>
              <div>
                <input
                  className="bg-blue-600 text-white py-3 px-6 text-lg cursor-pointer rounded-md w-full hover:bg-blue-700 transition-colors"
                  type="submit"
                  value="Send"
                  name="message"
                />
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-8 mb-4">
        <h1 className="tracking-wider text-3xl text-gray-600 my-4">FOLLOW US ON SOCIAL MEDIA</h1>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="text-3xl text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://facebook.com" className="text-3xl text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://youtube.com" className="text-3xl text-red-500 hover:text-red-700" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="https://instagram.com" className="text-3xl text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://pinterest.com" className="text-3xl text-red-600 hover:text-red-800" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-pinterest"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
