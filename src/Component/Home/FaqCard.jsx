import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FaqCard({ question, answer, onClick, active }) {
  return (
    <div className="shadow-md shadow-[#02B6DC26] rounded-[20px] bg-white p-4 md:p-6 lg:p-7 transition-all">
      {/* Button Section */}
      <button 
        onClick={onClick} 
        className="inline-flex w-full justify-between z-50  items-center gap-5"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-secondary">
          {question}
        </h2>
        <div 
          className={`text-primary transform transition-transform duration-300 ${active ? 'rotate-180' : ''}`}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </div>
      </button>

      {/* Answer Section (Hidden unless active) */}
      {active && (
        <p className="text-accent pt-3 sm:pt-4 md:pt-5 text-sm sm:text-base md:text-lg">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqCard;
