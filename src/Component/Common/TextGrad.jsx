import React from 'react'
import { cn } from '../../ibl/utils'

function TextGrad({children,style}) {
  return (
    <span className={cn("bg-gradient-to-b text-transparent bg-clip-text from-[#00D2FF] to-[#059DBE] ")} style={style}> {children}</span>
  )
}

export default TextGrad