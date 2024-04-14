import React from 'react';
// import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-400 my-2 sm:text-2xl">Hi, my name is:</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Niclas Bunn
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold my-2 text-[#8892b0]">
          I´m a web developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a web developer who currently is working with Javascript, Tailwind
          and React.
        </p>

        <div>
          <button>
            {' '}
            <a
              href="#work"
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
