import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I find joy in developing software that improves people's lives.
              I'm experienced in creating tailored solutions for individuals,
              small businesses, and large corporations alike. Just imagine
              having a skilled software specialist available whenever you need
              assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
