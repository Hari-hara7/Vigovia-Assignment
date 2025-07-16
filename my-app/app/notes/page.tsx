'use client';
import Image from 'next/image';

export default function ImportantNotes() {
  const data = [
    {
      point: 'Airlines Standard Policy',
      detail:
        'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      point: 'Flight/Hotel Cancellation',
      detail:
        'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      point: 'Trip Insurance',
      detail:
        'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      point: 'Hotel Check-In & Check Out',
      detail:
        'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
    {
      point: 'Visa Rejection',
      detail:
        'In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost.',
    },
  ];

  const serviceData = [
    {
      service: 'Flight Tickets And Hotel Vouchers',
      detail: 'Delivered 3 Days Post Full Payment',
    },
    {
      service: 'Web Check-In',
      detail: 'Boarding Pass Delivery Via Email/WhatsApp',
    },
    {
      service: 'Support',
      detail: 'Chat Support – Response Time: 4 Hours',
    },
    {
      service: 'Cancellation Support',
      detail: 'Provided',
    },
    {
      service: 'Trip Support',
      detail: 'Response Time: 5 Minutes',
    },
  ];

  const inclusionData = [
    {
      category: 'Flight',
      count: 2,
      details: 'All Flights Mentioned',
      status: 'Awaiting Confirmation',
    },
    {
      category: 'Tourist Tax',
      count: 2,
      details:
        'Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Novotel (Gold Coast), Holiday Inn (Melbourne)',
      status: 'Awaiting Confirmation',
    },
    {
      category: 'Hotel',
      count: 2,
      details: 'Airport To Hotel - Hotel To Attractions - Day Trips If Any',
      status: 'Included',
    },
  ];

  return (
    <section className="px-4 md:px-20 py-12 font-sans bg-white">
      {/* Notes Section */}
      <h2 className="text-black text-xl font-semibold mb-6 text-left px-25">
        Important <span className="text-purple-600">Notes</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <table className="w-full md:w-[25%] border-collapse rounded-2xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#331F63] text-white text-center">
              <th className="px-6 py-3">Point</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                <td className="px-6 py-5">{row.point}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="w-full md:w-[60%] border-collapse rounded-2xl overflow-hidden shadow-md">
          <thead>
            <tr className="bg-[#331F63] text-white text-center">
              <th className="px-6 py-3">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                <td className="px-6 py-5">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scope of Service */}
      <div className="mt-16">
        <h2 className="text-xl text-black font-semibold mb-6 text-left px-25">
          Scope Of <span className="text-purple-600">Service</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <table className="w-full md:w-[25%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3">Service</th>
              </tr>
            </thead>
            <tbody>
              {serviceData.map((row, i) => (
                <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                  <td className="px-6 py-5">{row.service}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full md:w-[60%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {serviceData.map((row, i) => (
                <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                  <td className="px-6 py-5">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inclusion Summary */}
      <div className="mt-16">
        <h2 className="text-xl text-black font-semibold mb-6 text-left px-25">
          Inclusion <span className="text-purple-600">Summary</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <table className="w-full md:w-[20%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3 rounded-tl-2xl">Category</th>
              </tr>
            </thead>
            <tbody>
              {inclusionData.map((row, i) => (
                <tr
                  key={i}
                  className={`bg-[#FAF1FF] text-gray-800 text-center ${
                    i === inclusionData.length - 1 ? 'rounded-bl-2xl' : ''
                  }`}
                >
                  <td className="px-6 py-5">{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full md:w-[10%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3">Count</th>
              </tr>
            </thead>
            <tbody>
              {inclusionData.map((row, i) => (
                <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                  <td className="px-6 py-5">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full md:w-[35%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {inclusionData.map((row, i) => (
                <tr key={i} className="bg-[#FAF1FF] text-gray-800 text-center">
                  <td className="px-6 py-5">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full md:w-[20%] border-collapse rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#331F63] text-white text-center">
                <th className="px-6 py-3 rounded-tr-2xl">Status / Comments</th>
              </tr>
            </thead>
            <tbody>
              {inclusionData.map((row, i) => (
                <tr
                  key={i}
                  className={`bg-[#FAF1FF] text-gray-800 text-center ${
                    i === inclusionData.length - 1 ? 'rounded-br-2xl' : ''
                  }`}
                >
                  <td className="px-6 py-5">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

         {/* Footer Section */}
      
      </div>

        <footer className="border-t py-6 px-4 md:px-16 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Left Side - Address */}
            <div className="text-sm text-gray-800">
              <p className="font-semibold">Vigovia Tech Pvt. Ltd</p>
              <p>Registered Office: Hd-109 Cinnabar Hills,</p>
              <p>Links Business Park, Karnataka, India.</p>
            </div>
        
            {/* Center - Contact Info */}
            <div className="text-sm text-gray-800">
              <p>
                <span className="font-semibold">Phone:</span> +91-99X9999999
              </p>
              <p>
                <span className="font-semibold">Email ID:</span> Contact@Vigovia.Com
              </p>
            </div>
        
            {/* Right - Logo */}
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
    
  );
}
