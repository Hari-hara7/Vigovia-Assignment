'use client';

import Image from 'next/image';
import {
  FaPlaneDeparture,
  FaHotel,
  FaUmbrellaBeach,
  FaBus,
  FaTrain,
  FaCar,
} from 'react-icons/fa';

const itinerary = [
  {
    day: 'Day 1',
    date: '27th November',
    title: 'Arrival In Singapore & City Exploration',
    image: '/image1.jpg',
    activities: {
      Morning: ['Arrive In Singapore. Transfer From Airport To Hotel.'],
      Afternoon: [
        'Check Into Your Hotel.',
        'Visit Marina Bay Sands Sky Park (2-3 Hours).',
        'Optional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.',
      ],
      Evening: [
        'Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)',
      ],
    },
  },
  {
    day: 'Day 2',
    date: '28th November',
    title: 'City Tour & Adventure',
    image: '/image2.jpg',//my-app/public/image2.jpg
    activities: {
      Morning: ['Breakfast at hotel. Visit Universal Studios.'],
      Afternoon: ['Explore Sentosa Island.', 'Lunch at local restaurant.'],
      Evening: ['Enjoy light show at Marina Bay.'],
    },
  },
  {
    day: 'Day 3',
    date: '29th November',
    title: 'Leisure & Shopping',
    image: '/image3.jpg',//my-app/public/image3.jpg
    activities: {
      Morning: ['Free time or optional activities.'],
      Afternoon: ['Visit Orchard Road for shopping.'],
      Evening: ['Return to hotel and rest.'],
    },
  },
  {
    day: 'Day 4',
    date: '27th November',
    title: ' Arrival In Singapore & City Exploration',
    image: '/image4.jpg',//my-app/public/image4.jpgx
    activities: {
      Morning: ['Arrive in Singapore. Transfer From Airport To Hotel.'],
      Afternoon: ['Check Into Your Hotel.'],
      Evening: ['Explore Gardens By The Bay, Including Super Tree Grove (3-4) Hours'],
    },
  },
];

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="text-center py-6">
  <div className="flex justify-center">
    <Image
      src="/logo.png"
      alt="Vigovia Logo"
      width={160}
      height={50}
      className="object-contain"
      priority
    />
  </div>
</header>


     
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl mx-4 md:mx-16 shadow-md text-center">
        <h2 className="text-2xl font-semibold">Hi, Rahul!</h2>
        <p className="text-lg font-medium">Singapore Itinerary</p>
        <p className="text-sm">6 Days 5 Nights</p>
        <div className="flex justify-center gap-4 mt-3 text-lg">
          <FaPlaneDeparture />
          <FaHotel />
          <FaUmbrellaBeach />
          <FaBus />
          <FaTrain />
          <FaCar />
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-5 border rounded-xl overflow-hidden mx-4 md:mx-16 mt-6 text-sm font-medium text-center">
        {[
          ['Departure From', 'Kolkata'],
          ['Departure', '09/06/2025'],
          ['Arrival', '15/06/2025'],
          ['Destination', 'Singapore'],
          ['No. Of Travellers', '4'],
        ].map(([label, value], i) => (
          <div
            key={i}
            className="border-r border-b last:border-r-0 md:last:border-b-0 p-2"
          >
            <p className="text-xs text-gray-500">{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>

   
      <section className="mx-4 md:mx-16 mt-10 space-y-10">
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row gap-6 border-b pb-6"
          >
            {/* Day Pill */}
            <div className="absolute -left-6 md:-left-12 top-20">
              <div className="bg-purple-800 text-white rotate-[-90deg] px-10 w-50 text-center py-1 rounded-full shadow text-sm font-semibold">
                {item.day}
              </div>
            </div>

          
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt="Itinerary Day"
                  fill
                  className="rounded-full border-4 border-white shadow object-cover"
                />
              </div>
              <p className="font-bold mt-3 text-sm">{item.date}</p>
              <p className="text-xs text-gray-600 text-center">{item.title}</p>
            </div>

              <div className="w-full md:w-3/4 flex items-start gap-4 mt-4">
            <div className="relative w-6 flex flex-col items-center pt-2">
            
              <div className="absolute top-4 h-full w-0.5 bg-blue-600"></div>
              
              {['Morning', 'Afternoon', 'Evening'].map((label, i) => (
                <div key={i} className="flex flex-col items-center z-10 mb-12">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-600"></div>
                </div>
              ))}
            </div>
              <div className="space-y-4">
                {Object.entries(item.activities).map(([time, details], idx) => (
                  <div key={idx}>
                    <p className="font-semibold">{time}</p>
                    <ul className="list-disc ml-5 text-sm mt-1 text-gray-700">
                      {details.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}


        <footer className=" py-6 px-4 md:px-16">
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
      </section>

     


    </main>
    
  );
}
