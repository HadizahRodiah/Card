import React from 'react';
import car from './assets/car.png';
import * as Icons from 'react-bootstrap-icons';

const Card = () => {
  return (
    <div className="bg-black w-screen overflow-x-hidden">
      <div className="flex bg-black flex-col justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center relative py-10">
          <div className="justify-between gap-4 flex absolute top-0 left-0 right-0 mt-4">
            <Icons.Circle width={30} height={30} className="text-white" />
            <Icons.Circle width={20} height={20} className="text-black" />
            <Icons.Circle width={30} height={30} className="text-black" />
            <Icons.Circle width={30} height={30} className="text-yellow-400" />
          </div>
          <h1 className="text-white font-bold text-2xl md:text-4xl mt-16">AlmasTech</h1>
          <span className="text-yellow-400 font-bold text-3xl md:text-5xl">Social Networking</span>
          <h1 className="text-white font-bold text-5xl md:text-6xl">Website</h1>
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="relative">
            <img src={car} className="w-80 h-auto blur-lg" alt="Background car" />
            <img src={car} className="absolute top-0 left-0 w-80" alt="Foreground car" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 space-y-6">
          <div className="flex justify-center items-center bg-black px-5 py-3 rounded-full shadow-md shadow-white">
            <a href="#" className="m-2">
              <Icons.TwitterX width={20} height={20} className="text-white" />
            </a>
            <a href="#" className="m-2">
              <Icons.Whatsapp width={20} height={20} className="text-white" />
            </a>
            <a href="#" className="m-2">
              <Icons.Linkedin width={20} height={20} className="text-white" />
            </a>
            <a href="#" className="m-2">
              <Icons.Facebook width={20} height={20} className="text-white" />
            </a>
            <a href="#" className="m-2">
              <Icons.Instagram width={20} height={20} className="text-white" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-black p-3 font-bold shadow-lg shadow-black rounded-lg flex items-center space-x-2">
              <Icons.LightningChargeFill width={20} height={20} />
              <span>Get Started</span>
            </a>
            <a href="#" className="bg-white text-black p-3 font-bold shadow-lg shadow-black rounded-lg">
              Reviews
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-20 mx-4">
          <div className="text-white bg-black border rounded-md shadow-md shadow-white border-yellow-400 p-10 m-4 hidden md:block">
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
          </div>
          <div className="text-white bg-black border rounded-md shadow-md shadow-white border-yellow-400 p-10 m-4 hidden md:block">
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
            <p>Write a lot about something</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
