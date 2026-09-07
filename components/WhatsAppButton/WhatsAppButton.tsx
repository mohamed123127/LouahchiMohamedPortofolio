"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../../constants/contact";
export default function WhatsAppButton() {
  const handleContact = () => {
    const phoneNumber = contactInfo[1].value.replace(/\s/g, '');
    const message = "Hello I want to contact you";
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    )
  };
  return (
    <button
      onClick={handleContact}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center cursor-pointer"
    >
      {/* Outer Pulse Ring */}
      <span className="absolute inline-flex h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

      {/* Main WhatsApp Icon Button */}
      <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
        <FaWhatsapp size={26} className="drop-shadow-sm" />

        {/* Tooltip on Hover */}
        <span className="absolute right-full mr-3 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-x-2 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>
      </div>
    </button>
  );
}
