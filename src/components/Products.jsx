import React, { useState, useEffect } from 'react';
import image1 from "../images/modern-living-room-interior-design.avif";
import image2 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.avif";
import image3 from "../images/velvet-interior-classic-cushion-relax.avif";
import image6 from "../Productimages/top-view-boards-mdf-material.avif";
import image7 from "../Productimages/digital-art-interior-lamp-design.avif";
import image8 from "../Productimages/handcrafted-wooden-decorative-lamp.avif";
import image9 from "../Productimages/handcrafted-wooden-decorative-vase.avif";
import image10 from "../Productimages/mirror-vases-background-zoom-calls.avif";
import image12 from "../Productimages/man-accessories-makeup.avif";
import image15 from "../images/interior-design-with-photoframes-plants.avif";
import image16 from "../images/still-life-shoe-rack-indoors.avif";
import image17 from "../images/room-interior-design.avif";
import image18 from "../images/realistic-interior-design-with-furniture.avif";
import image19 from "../images/coffee-cup-table.avif";
import image20 from "../images/beautiful-girl-standing-room-looking-mirror.avif";

const Shimmer = ({ width = '100%', height = '100px' }) => (
  <div
    style={{ width, height }}
    className="bg-gray-300 animate-pulse rounded-md"
  ></div>
);

const ShimmerText = ({ width = '100%' }) => (
  <div className={`h-6 ${width} bg-gray-300 animate-pulse rounded`}></div>
);

const ShimmerImage = ({ width = '100%', height = '200px' }) => (
  <div
    className={`bg-gray-300 animate-pulse rounded-lg`}
    style={{ width, height }}
  ></div>
);

const ProductSection = ({ title, products, loading }) => (
  <>
    <div className="text-center text-3xl md:text-4xl font-bold tracking-widest my-4">
      {loading ? <ShimmerText width="50%" /> : title}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {loading ? (
        Array(4)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <ShimmerImage width="100%" height="250px" />
              <ShimmerText width="60%" />
              <ShimmerText width="40%" />
            </div>
          ))
      ) : (
        products.map((product, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="w-full h-[250px] md:h-[330px] object-cover mb-4"
              src={product.image}
              alt={product.alt}
              loading="lazy"
            />
            <h1 className="tracking-wider text-gray-400 text-lg">{product.name}</h1>
            <h1 className="text-gray-400">${product.price}</h1>
          </div>
        ))
      )}
    </div>
  </>
);

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulate loading completion
    }, 3000); // Simulate a 3-second delay
  }, []);

  return (
    <>
      <div className="relative">
        <img className="w-full h-[500px] md:h-[700px] object-cover opacity-100" src={image1} alt="banner" loading="lazy" />
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center px-4 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest">
            YOU CAN BOOK AND BUY WHATEVER YOU WANT
          </h1>
          <p className="my-4 md:my-6 text-lg md:text-2xl text-white tracking-wider">
            Every Shape, Size, Colour, and Style
          </p>
        </div>
      </div>

      <div className="text-center text-3xl md:text-4xl font-bold tracking-widest text-gray-500 mb-4 mt-10">
        OUR PRODUCTS
      </div>
      <hr className="border-gray-300 mx-auto w-3/4 mb-8" />

      {/* Sections */}
      <ProductSection
        title="FOR YOUR KITCHEN"
        products={[
          { image: image6, name: "WALL DESIGNS", price: 600, alt: "Wall Designs" },
          { image: image7, name: "CAMEO LAMP", price: 900, alt: "Cameo Lamp" },
          { image: image8, name: "VERSAL CHE LAMP", price: 750, alt: "Versal Che Lamp" },
          { image: image9, name: "WOODEN THINGS", price: 1300, alt: "Wooden Things" },
        ]}
        loading={loading}
      />

      <ProductSection
        title="FOR YOUR BEDROOM"
        products={[
          { image: image10, name: "BETHANIE FLOOR MIRROR", price: 1299, alt: "Bethanie Floor Mirror" },
          { image: image12, name: "COFFEE TABLE", price: 850, alt: "Coffee Table" },
          { image: image2, name: "LIGHTNING DESIGN", price: 1199, alt: "Lightning Design" },
          { image: image3, name: "OMAHA SVIWEL CHAIR", price: 1099, alt: "Omaha Swivel Chair" },
        ]}
        loading={loading}
      />

      <ProductSection
        title="FOR YOUR WALLS LIGHTNING"
        products={[
          { image: image15, name: "WILLOW SINGLE SEATER SOFA", price: 600, alt: "Willow Single Seater Sofa" },
          { image: image16, name: "SIDE TABLE", price: 900, alt: "Side Table" },
          { image: image17, name: "DINING TABLE", price: 750, alt: "Dining Table" },
          { image: image18, name: "CHARLOTTE SOFA", price: 1300, alt: "Charlotte Sofa" },
        ]}
        loading={loading}
      />

      <ProductSection
        title="FOR YOUR WALLS"
        products={[
          { image: image20, name: "BETHANIE FLOOR MIRROR", price: 1299, alt: "Bethanie Floor Mirror" },
          { image: image19, name: "COFFEE TABLE", price: 850, alt: "Coffee Table" },
          { image: image2, name: "LIGHTNING DESIGN", price: 1199, alt: "Lightning Design" },
          { image: image3, name: "OMAHA SVIWEL CHAIR", price: 1099, alt: "Omaha Swivel Chair" },
        ]}
        loading={loading}
      />

      <ProductSection
        title="FOR YOUR LIVING ROOMS"
        products={[
          { image: image15, name: "WILLOW SINGLE SEATER SOFA", price: 600, alt: "Willow Single Seater Sofa" },
          { image: image16, name: "SIDE TABLE", price: 900, alt: "Side Table" },
          { image: image17, name: "DINING TABLE", price: 750, alt: "Dining Table" },
          { image: image18, name: "CHARLOTTE SOFA", price: 1300, alt: "Charlotte Sofa" },
        ]}
        loading={loading}
      />

      <div className="text-center">
        <h1 className="tracking-wider text-3xl text-gray-500 my-4">FOLLOW US ON SOCIAL MEDIA</h1>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://twitter.com" className="fa fa-twitter text-3xl text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer" />
          <a href="https://facebook.com" className="fa fa-facebook text-3xl text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer" />
          <a href="https://youtube.com" className="fa fa-youtube text-3xl text-red-500 hover:text-red-700" target="_blank" rel="noopener noreferrer" />
          <a href="https://instagram.com" className="fa fa-instagram text-3xl text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer" />
          <a href="https://pinterest.com" className="fa fa-pinterest text-3xl text-red-600 hover:text-red-800" target="_blank" rel="noopener noreferrer" />
        </div>
      </div>
    </>
  );
};

export default Products;
