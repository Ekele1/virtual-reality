"use client"
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(
  () => import('react-slick').then((mod) => mod.default),
  { ssr: false }
);

// Import CSS separately
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PictureScroll = () => {
  const images = [
    '/vertical-1.jpg',
    '/vertical-2.jpg',
    '/vertical-3.jpg',
    '/vertical-4.jpg',
    '/vertical-5.jpg',
    '/vertical-6.jpg',
    '/vertical-7.jpg',
    '/vertical-8.jpg',
    '/vertical-9.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-full flex items-center justify-center pt-10 pb-20 bg-[#201823]'>
      <div className='w-[95%] max-w-6xl rounded-3xl glowing-pink-border p-3'>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className='px-2 focus:outline-none'>
              <div className='w-full h-[300px] relative'>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className='rounded-xl object-cover'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3} // Only prioritize first 3 images
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PictureScroll;