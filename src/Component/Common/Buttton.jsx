import React from "react";
import { twMerge } from "tailwind-merge"; 

import { cn } from "../../ibl/utils"; // Use this instead of twMerge

function Button({ children, style ,className}) {
  return (
    <button
      className={cn(
        "md:py-4 py-2 px-4 md:px-[25px] cursor-pointer text-sm md:text-base opacity-100 hover:opacity-80  transition-all duration-300 font-bold text-white rounded-full",className
        
      )}
      style={style} 
    >
      {children}
    </button>
  );
}

export default Button;
