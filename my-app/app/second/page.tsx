'use client';

import Image from 'next/image';
import React from 'react';

const flightData = [
  {
    date: "Thu 10 Jan'24",
    airline: 'Fly Air India',
    route: 'From Delhi (DEL) To Singapore (SIN).',
  },
  {
    date: "Thu 10 Jan'24",
    airline: 'Fly Air India',
    route: 'From Delhi (DEL) To Singapore (SIN).',
  },
  {
    date: "Thu 10 Jan'24",
    airline: 'Fly Air India',
    route: 'From Delhi (DEL) To Singapore (SIN).',
  },
  {
    date: "Thu 10 Jan'24",
    airline: 'Fly Air India',
    route: 'From Delhi (DEL) To Singapore (SIN).',
  },
];

const hotelData = [
  {
    city: 'Singapore',
    checkIn: '24/02/2024',
    checkOut: '24/02/2024',
    nights: 2,
    hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
  },
  {
    city: 'Singapore',
    checkIn: '24/02/2024',
    checkOut: '24/02/2024',
    nights: 2,
    hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
  },
  {
    city: 'Singapore',
    checkIn: '24/02/2024',
    checkOut: '24/02/2024',
    nights: 2,
    hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
  },
  {
    city: 'Singapore',
    checkIn: '24/02/2024',
    checkOut: '24/02/2024',
    nights: 2,
    hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
  },
  {
    city: 'Singapore',
    checkIn: '24/02/2024',
    checkOut: '24/02/2024',
    nights: 2,
    hotelName: 'Super Townhouse Oak Vashi Formerly Blue Diamond',
  },
];

export default function SecondPage() {
  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Flight <span className="text-purple-600">Summary</span>
          </h2>

          <div className="space-y-3">
            {flightData.map((flight, index) => (
              <div
                key={index}
                className="flex items-stretch bg-white rounded-lg border border-black overflow-hidden shadow-sm"
              >
                <div
                  className="relative bg-purple-100 border-r border-black flex items-center justify-center"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
                  }}
                >
                  <span className="text-sm font-medium text-gray-700 px-6 py-4">
                    {flight.date}
                  </span>
                </div>

                <div className="flex-1 px-6 py-4 bg-white flex items-center">
                  <span className="font-semibold text-gray-800">
                    {flight.airline}
                  </span>
                  <span className="text-gray-600 ml-2">{flight.route}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Note: All Flights Include Meals, Seat Choice (Excluding XL), And 20kg/25kg Checked Baggage.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-black font-semibold mb-6 text-left">
            Hotel <span className="text-purple-600">Bookings</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-3">
            {/* City */}
            <table className="w-full md:w-[15%] border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#331F63] text-white text-center">
                  <th className="px-6 py-3 rounded-tl-2xl">City</th>
                </tr>
              </thead>
              <tbody>
                {hotelData.map((row, i) => (
                  <tr
                    key={i}
                    className={`bg-[#FAF1FF] text-gray-800 text-center ${
                      i === hotelData.length - 1 ? 'rounded-bl-2xl' : ''
                    }`}
                  >
                    <td className="px-6 py-5">{row.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>

           
            <table className="w-full md:w-[18%] border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#331F63] text-white text-center">
                  <th className="px-6 py-3">Check In</th>
                </tr>
              </thead>
              <tbody>
                {hotelData.map((row, i) => (
                  <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                    <td className="px-6 py-5">{row.checkIn}</td>
                  </tr>
                ))}
              </tbody>
            </table>

           
            <table className="w-full md:w-[18%] border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#331F63] text-white text-center">
                  <th className="px-6 py-3">Check Out</th>
                </tr>
              </thead>
              <tbody>
                {hotelData.map((row, i) => (
                  <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                    <td className="px-6 py-5">{row.checkOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>

           
            <table className="w-full md:w-[10%] border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#331F63] text-white text-center">
                  <th className="px-6 py-3">Nights</th>
                </tr>
              </thead>
              <tbody>
                {hotelData.map((row, i) => (
                  <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                    <td className="px-6 py-5">{row.nights}</td>
                  </tr>
                ))}
              </tbody>
            </table>

           
            <table className="w-full md:w-[39%] border-collapse rounded-2xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-[#331F63] text-white text-center">
                  <th className="px-6 py-3 rounded-tr-2xl">Hotel Name</th>
                </tr>
              </thead>
              <tbody>
                {hotelData.map((row, i) => (
                  <tr
                    key={i}
                    className={`bg-[#FAF1FF] text-gray-800 text-center ${
                      i === hotelData.length - 1 ? 'rounded-br-2xl' : ''
                    }`}
                  >
                    <td className="px-6 py-5">{row.hotelName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-xs text-gray-600 space-y-1">
            <p>1. All Hotels Are Tentative And Can Be Replaced With Similar</p>
            <p>2. Breakfast Included For All Hotel Stays.</p>
            <p>3. All Hotels Will Be 4* And Above Category</p>
            <p>4. A maximum occupancy of 2 people/room is allowed in most hotels.</p>
          </div>
        </div>
      </div>

      
      <footer className="border-t py-6 px-4 md:px-16 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-sm text-gray-800">
            <p className="font-semibold">Vigovia Tech Pvt. Ltd</p>
            <p>Registered Office: Hd-109 Cinnabar Hills,</p>
            <p>Links Business Park, Karnataka, India.</p>
          </div>
          <div className="text-sm text-gray-800">
            <p>
              <span className="font-semibold">Phone:</span> +91-99X9999999
            </p>
            <p>
              <span className="font-semibold">Email ID:</span> Contact@Vigovia.Com
            </p>
          </div>
          <div className="w-28">
            <Image
              src="/logo.png"
              alt="Vigovia Logo"
              width={150}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
