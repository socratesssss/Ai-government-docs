import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import TextGrad from '../Common/TextGrad'
import Arrow from './Arrow'


function ProbSolHead() {
  return (
    <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6'>
       <SectionTitle>Problem & <TextGrad>Solution</TextGrad></SectionTitle>

       <div className='flex justify-center item-center gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
        <Arrow/>
       
        
       </div>
    </div>
  )
}

export default ProbSolHead