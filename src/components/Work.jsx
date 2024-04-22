import React from 'react';

import toDo from '../assets/toDo.jpg';
import movieThree from '../assets/movieThree.jpg';
import weather from '../assets/weather.jpg';

function Work() {
  return (
    <div
      id="work"
      name="work"
      className="w-full md:h-screen text-gray-300  bg-[#0a192f]
    "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400">
            Work
          </p>
          <p className="py-8">Check my work!</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${toDo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React ToDo App
              </span>
              <div className="pt-8 text-center">
                <a href="https://bunn1.github.io/doReact/">
                  <button className="text-center rounded-lg px-4 py-3 m-2">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/bunn1/doReact">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${movieThree})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Movie App
              </span>
              <div className="pt-8 text-center">
                <a href="https://bunn1.github.io/movieappreact/">
                  <button className="text-center rounded-lg px-4 py-3 m-2">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/bunn1/movieappreact">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://bunn1.github.io/weather.react/">
                  <button className="text-center rounded-lg px-4 py-3 m-2">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/bunn1/weather.react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
