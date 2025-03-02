import React from 'react'
import './App.css'
import ProbSol from './Component/Home/ProbSol'
import Nav from './Component/Shared/Nav'
import Fotter from './Component/Shared/Fotter'

import Hero from './Component/Home/Hero'
import Reviews from './Component/Home/Reviews'
import Brand from './Component/Home/Brand'
import Faq from './Component/Home/Faq'
import Note from './Component/Home/Note'



function App() {
  return (
    <main className='font-primary bg-[url(/hero-bg.svg)] bg-no-repeat min-h-svh bg-top '>



<Nav/>
<Hero/>
<ProbSol/>
<Reviews/>
<Brand/>
<Faq/>
<Note/>


<Fotter/>

    </main>
  )
}

export default App