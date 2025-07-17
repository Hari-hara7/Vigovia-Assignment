'use client';

import React from 'react';
import Image from 'next/image';

const paymentData = [
  {
    installment: 'Installment 1',
    amount: '₹1,50,000',
    dueDate: 'Initial Payment',
  },
  {
    installment: 'Installment 2',
    amount: '₹1,50,000',
    dueDate: 'Post Visa Approval',
  },
  {
    installment: 'Installment 3',
    amount: 'Remaining',
    dueDate: '20 Days Before Departure',
  },
];

export default function FourthPage() {
  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Payment Plan Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Payment <span className="text-purple-600">Plan</span>
          </h2>

          {/* Total Amount and TCS */}
          <div className="space-y-3 mb-6">
            {[
              {
                label: 'Total Amount',
                value: '₹ 9,00,000',
                note: 'For 5 Pax (Inclusive Of GST)',
              },
              {
                label: 'TCS',
                value: 'Not Collected',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-stretch bg-white rounded-lg border border-black-300 overflow-hidden shadow-sm"
              >
                <div
                  className="w-[180px] bg-purple-100 border-r border-black flex items-center justify-center"
                  style={{
                    clipPath:
                      'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
                  }}
                >
                  <span className="text-sm font-medium text-gray-700 px-4 py-4">
                    {item.label}
                  </span>
                </div>

                <div className="flex-1 px-6 py-4 bg-white flex items-center gap-2">
                  <span className="font-semibold text-gray-800">
                    {item.value}
                  </span>
                  {item.note && (
                    <span className="text-gray-600">{item.note}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Installments Table */}
          <div className="flex flex-col md:flex-row justify-center gap-6 px-1">
            {[
              { header: 'Installment', key: 'installment', width: '25%' },
              { header: 'Amount', key: 'amount', width: '25%' },
              { header: 'Due Date', key: 'dueDate', width: '35%' },
            ].map((col, idx) => (
              <table
                key={idx}
                className={`w-full md:w-[${col.width}] border-collapse rounded-2xl overflow-hidden shadow-md`}
              >
                <thead>
                  <tr className="bg-[#331F63] text-white text-center">
                    <th className="px-6 py-3">{col.header}</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.map((payment, i) => (
                    <tr
                      key={i}
                      className="bg-[#FAF1FF] text-gray-800 text-center"
                    >
                      <td className="px-6 py-5">{payment[col.key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>

        {/* Visa Details Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Visa <span className="text-purple-600">Details</span>
          </h2>

          <div className="bg-white rounded-lg border border-black p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Visa Type :</p>
                <p className="text-gray-600">Tourist</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Validity:</p>
                <p className="text-gray-600">30 Days</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Processing Date :
                </p>
                <p className="text-gray-600">14/06/2025</p>
              </div>
            </div>
          </div>
        </div>
<div className="border-t border-blsck my-10 w-full" />
        {/* CTA */}
        <div className="text-center py-8 mb-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            PLAN. PACK. GO!
          </h3>
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold px-20 py-3 rounded-full transition-colors duration-200 shadow-lg">
            Book Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-6 px-4 md:px-16">
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
              <span className="font-semibold">Email ID:</span>{' '}
              Contact@Vigovia.Com
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
    </div>
  );
}
