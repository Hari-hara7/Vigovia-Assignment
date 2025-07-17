'use client'

import React from 'react'
import Image from 'next/image'

const activityData = [
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Nonstop Sightseeing",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  },
  {
    city: "Rio De Janeiro",
    activity: "Sydney Harbour Cruise & Tonnage Zoo",
    type: "Activity Standard",
    timeRequired: "2-3 Hours"
  }
]

export default function ThirdPage() {
  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
      
        <div className="bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Activity <span className="text-purple-600">Table</span>
          </h2>
          
          <div className="flex gap-4">
         
            <div className="w-1/5 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-[#331F63] text-white px-4 py-3 font-medium text-sm text-center rounded-t-3xl">
                City
              </div>
              {activityData.map((activity, index) => (
                <div key={index} className={`px-4 py-3 text-sm text-gray-700 bg-[#FAF1FF] border-b last:border-b-0 border-gray-100 ${index === activityData.length - 1 ? 'rounded-b-3xl' : ''}`}>
                  {activity.city}
                </div>
              ))}
            </div>

           
            <div className="w-2/5 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-[#331F63] text-white text-center px-4 py-3 font-medium text-sm rounded-t-3xl">
                Activity
              </div>
              {activityData.map((activity, index) => (
                <div key={index} className={`px-4 py-3 text-sm text-gray-700 bg-[#FAF1FF] border-b last:border-b-0 border-gray-100 ${index === activityData.length - 1 ? 'rounded-b-3xl' : ''}`}>
                  {activity.activity}
                </div>
              ))}
            </div>

            
            <div className="w-1/5 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-[#331F63] text-white px-4 py-3 font-medium text-sm text-center rounded-t-3xl">
                Type
              </div>
              {activityData.map((activity, index) => (
                <div key={index} className={`px-4 py-3 text-sm text-gray-700 bg-[#FAF1FF] border-b last:border-b-0 border-gray-100 ${index === activityData.length - 1 ? 'rounded-b-3xl' : ''}`}>
                  {activity.type}
                </div>
              ))}
            </div>

           
            <div className="w-1/5 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-[#331F63] text-white px-4 py-3 font-medium text-sm text-center rounded-t-3xl">
                Time Required
              </div>
              {activityData.map((activity, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 text-sm text-gray-700 bg-[#FAF1FF] border-b last:border-b-0 border-gray-100 ${index === activityData.length - 1 ? 'rounded-b-3xl' : ''}`}
                >
                  {activity.timeRequired}
                </div>
              ))}
            </div>

          </div>
        </div>

     
        <div className="bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Terms and <span className="text-purple-600">Conditions</span>
          </h2>
          
          <div className="text-blue-600 text-sm">
            <a href="#" className="underline hover:text-blue-800 cursor-pointer">
              View all terms and conditions
            </a>
          </div>
        </div>
      </div>

    
      <footer className="py-6 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side - Address */}
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
  )
}
