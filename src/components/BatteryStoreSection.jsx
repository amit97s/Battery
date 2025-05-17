import React from 'react';
import { cm, sqi } from '../assets';

const BatteryStoreSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="md:w-1/2 max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Online Battery Store - Car & Inverter Batteries Online
        </h2>
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            My battery shop is one of the leading <strong>online battery stores in India</strong> which provides instant delivery of batteries of all types. Whether you need to <strong>buy car batteries online</strong> or you are looking for <strong>inverter battery</strong>, just browse our web-portal and select the type of battery you require, then choose your car manufacturer, select the model of your car and then you will be able to choose all the <strong>brands of car batteries</strong> we have on our store.
          </p>
          <p>
            Choose it by few simple clicks of your mouse and order them online by filling your complete details. You can also opt for cash on delivery and pay for your car or inverter battery once it reaches and get installed properly. We firmly believe in 100% customer satisfaction and thus we make every possible effort to keep you happy.
          </p>
          <p>We have all the major brands of inverter and car batteries avail …</p>
        </div>
        <button className="mt-10 px-10 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
          READ MORE
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative group">
          <img
            src={sqi}
            alt="Battery and Inverter"
            className="w-full max-w-2xl rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default BatteryStoreSection;