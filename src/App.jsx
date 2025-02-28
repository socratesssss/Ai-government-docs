import React from 'react'
import './App.css'
import ProbSol from './Component/Home/ProbSol'
import Nav from './Component/Shared/Nav'
import Fotter from './Component/Shared/Fotter'

import Hero from './Component/Home/Hero'



function App() {
  return (
    <main className='font-primary bg-[url(/hero-bg.svg)] bg-no-repeat min-h-svh bg-top '>



<Nav/>
<Hero/>
<ProbSol/>


<Fotter/>

    </main>
  )
}

export default App