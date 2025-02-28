import React from 'react'
import { cn } from '../../ibl/utils'

function Container({children,className}) {
  return (
    <div className={cn('w-full  max-w-screen-xl mx-auto px-2.5 xl:px-15',className)}>{children}</div>
  )
}

export default Container