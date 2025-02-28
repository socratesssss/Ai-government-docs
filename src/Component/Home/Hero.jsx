import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Buttton'

function Hero() {
  return (
    <section className='pt-2 md:pt-20 lg:pt-20 xl:pt-35 '>
<Container className={'flex flex-col-reverse md:flex-row justify-center md:justify-end pr-0 items-center gap-5 md:gap-0'}>
    {/* left */}
    <div className='space-y-5 md:space-y-7'>
        <h1 className='font-secondary font-bold text-2xl md:4xl   lg:text-6xl md:leading-15 lg:leading-19 max-w-[593px]'>
        Simplify your real estate document analysis

        </h1>
        <p className='font-semibold text-base md:text-lg lg:text-xl max-w-[450px] xl:max-w-[593px]'>
        Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs
        </p>
        
        <Button style={{background: "var(--background-primary)"}}>Get Started Today</Button>


</div>
{/* right */}
<div>
    <img className='xl:w-[740px] md:w-[550px] w-[80%] mx-auto' src="HeroBG.png" alt="Hero image" />

</div>
</Container>
    </section>
  )
}

export default Hero