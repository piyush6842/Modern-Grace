import React, { useState, useEffect } from 'react';
import image1 from "../Images/homepageimg.avif";
import image2 from "../Images/scenery-designers-work.avif";
import image3 from "../Images/view-essentials-pottery-studio.avif";
import image4 from "../Images/cozy-lively-home-interior-design.avif";
import { Link } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

const About = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for the images and content (can be replaced with actual logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading for 1.5 seconds
    return () => clearTimeout(timer); // cleanup timeout on component unmount
  }, []);

  return (
    <>
      <div className='relative'>
        {loading ? (
          <ContentLoader
            speed={2}
            width="100%"
            height={700}
            viewBox="0 0 100% 700"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="100%" height="700" />
          </ContentLoader>
        ) : (
          <img className='w-full h-[700px] opacity-80 object-cover' src={image1} alt="about-img" />
        )}
        <div className='absolute top-32 left-1/4 md:left-1/3 lg:left-[270px]'>
          <h1 className='font-bold text-4xl sm:text-3xl md:text-5xl text-white tracking-wider'>
            YOUR DREAM INTERIOR STARTS HERE
          </h1>
        </div>
      </div>

      <div className='text-center my-8 px-4'>
        {loading ? (
          <ContentLoader
            speed={2}
            width="100%"
            height={50}
            viewBox="0 0 100% 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="40" />
          </ContentLoader>
        ) : (
          <h1 className='tracking-wide text-xl sm:text-lg md:text-2xl text-gray-500'>
            The Modern Grace's interior styling service is designed to take the stress out of furnishing your home. Because sometimes you just need an expert eye to help you put the perfect look together.
          </h1>
        )}
      </div>

      <div className='font-bold text-center text-black text-4xl sm:text-3xl md:text-5xl tracking-wider my-6'>
        HOW IT WORKS
      </div>

      <div className='flex flex-wrap justify-center gap-8'>
        {loading ? (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <ContentLoader
              speed={2}
              width="100%"
              height={400}
              viewBox="0 0 100% 400"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="8" ry="8" width="100%" height="300" />
              <rect x="20" y="320" rx="4" ry="4" width="60%" height="30" />
              <rect x="20" y="360" rx="4" ry="4" width="80%" height="20" />
            </ContentLoader>
          </div>
        ) : (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <img className='w-full h-[300px] object-cover' src={image2} alt="about-img" />
            <h1 className='my-4 text-2xl font-bold tracking-wide text-gray-400 text-center'>ENGAGE</h1>
            <p className='text-center text-lg text-gray-600 mx-6'>
              Book your free interior design consultation online at your preferred FG store. Bring photos of your home, room measurements and any other inspiration, into store to meet with your interior designer. Alternatively, you can book an In-Home Consultation for $399 and one of our designers will visit your home.
            </p>
          </div>
        )}

        {loading ? (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <ContentLoader
              speed={2}
              width="100%"
              height={400}
              viewBox="0 0 100% 400"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="8" ry="8" width="100%" height="300" />
              <rect x="20" y="320" rx="4" ry="4" width="60%" height="30" />
              <rect x="20" y="360" rx="4" ry="4" width="80%" height="20" />
            </ContentLoader>
          </div>
        ) : (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <img className='w-full h-[300px] object-cover' src={image3} alt="about-img" />
            <h1 className='my-4 text-2xl font-bold tracking-wide text-gray-400 text-center'>ENVISION</h1>
            <p className='text-center text-lg text-gray-600 mx-6'>
              We'll sit down and talk through your vision, budget and lifestyle, to determine how we can best meet your needs. Then we'll walk through the showroom and show you your options, helping you to select each piece, from furniture and decor to the finishing touches, step by step.
            </p>
          </div>
        )}

        {loading ? (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <ContentLoader
              speed={2}
              width="100%"
              height={400}
              viewBox="0 0 100% 400"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="8" ry="8" width="100%" height="300" />
              <rect x="20" y="320" rx="4" ry="4" width="60%" height="30" />
              <rect x="20" y="360" rx="4" ry="4" width="80%" height="20" />
            </ContentLoader>
          </div>
        ) : (
          <div className='w-full sm:w-1/2 lg:w-1/3'>
            <img className='w-full h-[300px] object-cover' src={image4} alt="about-img" />
            <h1 className='my-4 text-2xl font-bold tracking-wide text-gray-400 text-center'>ENJOY</h1>
            <p className='text-center text-lg text-gray-600 mx-6'>
              Love what we come up with? We'll put your order through and take care of the rest, finishing with our renowned white glove delivery service.
            </p>
          </div>
        )}
      </div>

      <div className='text-center my-8'>
        <Link to='/contact' className='px-12 py-3 bg-black text-white hover:opacity-90 rounded-md transition duration-200'>
          <span className='hidden sm:inline'>CONTACT US TO BOOK YOUR OWN CONSULTANT</span>
          <span className='inline sm:hidden'>Contact Us</span>
        </Link>
      </div>

      <div className='text-center'>
        <h1 className='tracking-wider text-3xl text-gray-500 my-4'>
          FOLLOW US ON SOCIAL MEDIA
        </h1>
        <div className='flex justify-center space-x-6 mb-4'>
          <a href="https://twitter.com" className="fa fa-twitter text-3xl text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://facebook.com" className="fa fa-facebook text-3xl text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://youtube.com" className="fa fa-youtube text-3xl text-red-500 hover:text-red-700" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://instagram.com" className="fa fa-instagram text-3xl text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://pinterest.com" className="fa fa-pinterest text-3xl text-red-600 hover:text-red-800" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </>
  );
}

export default About;
