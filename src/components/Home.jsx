import React, { useState, useEffect } from 'react';
import image1 from "../images/homeimg.avif";
import image2 from "../images/room-house-decorated-with-brazilian-folklore-design.avif";
import image3 from "../images/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.avif";
import image4 from "../images/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.avif";
import image5 from "../images/interior-design-with-photoframes-plants.avif";
import image6 from "../images/still-life-shoe-rack-indoors.avif";
import image7 from "../images/room-interior-design.avif";
import image8 from "../images/realistic-interior-design-with-furniture.avif";
import image9 from "../images/beautiful-girl-standing-room-looking-mirror.avif";
import image10 from "../images/coffee-cup-table.avif";
import image11 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.avif";
import image12 from "../images/velvet-interior-classic-cushion-relax.avif";
import video1 from "../images/homevideo.mp4";
import { Link } from 'react-router-dom';
import { ShimmerImage,ShimmerText,Shimmer } from './Shimmer';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 3000); // Simulate a 3-second delay
  }, []);

  return (
    <>
      <div className='relative'>
        {loading ? (
          <ShimmerImage width="100%" height="700px" />
        ) : (
          <img className='w-screen h-[700px] opacity-100 object-cover' src={image1} alt="Interior design" />
        )}
        <div className='absolute top-40 left-24 sm:left-10 md:left-24'>
          <h1 className='text-4xl font-bold text-black'>
            MODERN GRACE DESIGN WELCOMES YOU
          </h1>
          <p className='text-gray-700 text-xl sm:text-base'>
            Every Shape, Size, Colour, and Style
          </p>
          <h1 className='text-gray-700 text-lg mb-10 sm:text-sm'>
            Whatever it is that you're looking for, we've got what you need.
          </h1>
          <button className='bg-transparent border-2 border-white rounded-xl px-6 py-2 text-gray-500 ml-10 hover:bg-black hover:text-white sm:ml-0'>
            EXPLORE MORE
          </button>
        </div>
      </div>

      <div className='my-8'>
        <h1 className='text-3xl text-center font-bold mb-3 tracking-widest'>
          WELCOME TO THE MODERN GRACE DESIGNS
        </h1>
        <p className='text-center text-gray-500 text-lg'>
          Your one-stop shop for stylish furniture and decor, delivering the latest trends exclusively to Perth.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row sm:px-10 lg:px-20 lg:space-x-10 lg:justify-between'>
        {/* Living Image */}
        <div className='relative mb-8 sm:mb-0 lg:mx-4'>
          {loading ? (
            <ShimmerImage width="100%" height="450px" />
          ) : (
            <img className='w-full h-[450px] mx-auto' src={image2} alt="Living Room" />
          )}
          <div className='absolute top-60 left-8 sm:left-32 text-white'>
            <h1 className='font-bold text-3xl mb-6 text-gray-700'>LIVING</h1>
            <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>
              VIEW PRODUCTS
            </Link>
          </div>
        </div>

        {/* Dining Image */}
        <div className='relative mb-8 sm:mb-0 lg:mx-4'>
          {loading ? (
            <ShimmerImage width="100%" height="450px" />
          ) : (
            <img className='w-full h-[450px] mx-auto' src={image3} alt="Dining Room" />
          )}
          <div className='absolute top-60 left-8 sm:left-32 text-white'>
            <h1 className='font-bold text-3xl mb-6 text-gray-700'>DINING</h1>
            <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>
              VIEW PRODUCTS
            </Link>
          </div>
        </div>

        {/* Bedroom Image */}
        <div className='relative lg:mx-4'>
          {loading ? (
            <ShimmerImage width="100%" height="450px" />
          ) : (
            <img className='w-full h-[450px] mx-auto' src={image4} alt="Bedroom" />
          )}
          <div className='absolute top-60 left-8 sm:left-32 text-white'>
            <h1 className='font-bold text-3xl mb-6 text-gray-700'>BEDROOM</h1>
            <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>
              VIEW PRODUCTS
            </Link>
          </div>
        </div>
      </div>

      <div className='flex mt-16 flex-col sm:flex-row ml-8'>
        <div className='ml-8 sm:ml-0'>
          <h1 className='font-medium text-3xl w-full sm:w-[80%] mb-6'>
            IMAGINE THE POTENTIAL OF YOUR INTERIOR
          </h1>
          <p className='text-gray-400 mb-16 w-full sm:w-[75%] text-2xl hidden sm:block'>
            The Modern Grace Design mission is to help turn your dream interior into a reality. Our team of talented stylists share a passion to create beautiful spaces for you to call home. Because life is too short not to love where you live.
          </p>

          <Link to='/contact' className='py-2 px-8 sm:ml-20 bg-black text-white text-xl border hover:opacity-75'>
            CONTACT US
          </Link>
        </div>
        <div className='mr-8 mt-8 sm:mt-0 w-full sm:w-[2000px]'>
          {loading ? (
            <ShimmerImage width="100%" height="400px" />
          ) : (
            <video src={video1} type='mp4' autoPlay muted loop className='w-full h-auto'></video>
          )}
        </div>
      </div>

      <div className='text-center my-10'>
        <h1 className='text-gray-400 text-xl tracking-widest'>
          BROWSE OUR FEATURED PRODUCTS
        </h1>
        <h1 className='font-bold text-3xl'>
          TRENDING PRODUCTS
        </h1>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10'>
        {loading ? (
          Array(8).fill().map((_, index) => (
            <div key={index} className='text-center'>
              <ShimmerImage width="100%" height="200px" />
              <ShimmerText width="80%" />
              <ShimmerText width="40%" />
            </div>
          ))
        ) : (
          [{ img: image5, title: 'WILLOW SINGLE SEATER SOFA', price: 600 },
           { img: image6, title: 'SIDE TABLE', price: 900 },
           { img: image7, title: 'DINING TABLE', price: 750 },
           { img: image8, title: 'CHARLOTTE SOFA', price: 1300 },
           { img: image9, title: 'BETHANIE FLOOR MIRROR', price: 1299 },
           { img: image10, title: 'COFFEE TABLE', price: 850 },
           { img: image11, title: 'LIGHTNING DESIGN', price: 1199 },
           { img: image12, title: 'OMAHA SWIVEL CHAIR', price: 1099 }
          ].map((product, index) => (
            <div key={index} className='text-center'>
              <img className='w-full h-64 object-cover' src={product.img} alt="Product" />
              <h1 className='tracking-wider text-gray-400 mt-4'>{product.title}</h1>
              <h1 className='text-gray-400'>${product.price}</h1>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
