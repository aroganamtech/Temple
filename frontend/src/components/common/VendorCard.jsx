import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorCard = ({ title, description, icon, route }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
      
      {/* Animated Golden Top Border */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#8B6B23] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
      
      {/* Icon Circle with Hover Rotation */}
      <div className="w-20 h-20 bg-[#FFF9E6] rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:bg-[#D4AF37] group-hover:rotate-[360deg] transition-all duration-700 border border-transparent group-hover:border-[#8B6B23]">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3 group-hover:text-[#8B6B23] transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <button 
        onClick={() => navigate(route)}
        className="w-full py-3 bg-[#4A2C2A] text-[#D4AF37] rounded-xl font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#4A2C2A] border-2 border-[#4A2C2A] transition-all duration-300 shadow-md transform active:scale-95"
      >
        View Details
      </button>
    </div>
  );
};

export default VendorCard;