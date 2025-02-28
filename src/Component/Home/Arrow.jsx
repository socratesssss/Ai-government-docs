import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Arrow(params) {
  return (
    <>
   <button className='lg:w-10 lg:h-10 md:w-6 md:h-6 flex justify-center items-center drop-shadow-lg text-white active:bg-primary p-2 md:p-5 rounded-full' 
        style={{ background: 'var(--background-primary)' }}>
  <ArrowBackIosIcon sx={{
    fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 },
  }} className='' {...params} />
</button>

<button className='bg-white lg:w-10 lg:h-10 md:w-6 md:h-6 flex justify-center items-center drop-shadow-lg p-2 md:p-5 active:text-white active:bg-primary text-primary rounded-full'>
  <ArrowForwardIosIcon sx={{
    fontSize: { xs: 20, sm: 25, md: 30, lg: 35, xl: 40 },
  }} className='' {...params} />
</button>
    
    </>
  )
}

export default Arrow