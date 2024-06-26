import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1500px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Jazib Ahmad
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Development Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My interesta are in Application & Games Development.
          My goal is to create innovative applications that impacts various industries and people's lives
          positively.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <Link to='Projects' smooth={true} duration={500}>
                <HiArrowNarrowRight className='ml-3 ' />
              </Link>

            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;