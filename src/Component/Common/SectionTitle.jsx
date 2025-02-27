import React from 'react'
import { cn } from '../../ibl/utils'
import TextGrad from './TextGrad'

function SectionTitle({children,className,gradiant}) {
  return (
    <h1 className={cn("font-secondary  md:leading-10 lg:leading-[58.7px] font-bold text-2xl md:text-3xl lg:text-5xl ",className)}>{children} <TextGrad>{gradiant}</TextGrad></h1>
  )
}

export default SectionTitle