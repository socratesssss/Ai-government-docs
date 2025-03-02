import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Buttton'

function Note() {
    return (
        <section className='mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] px.2.5'>
            <Container className="py-10">
                <div style={{ background: 'var(--background-primary2)' }} className='rounded-[20px] flex justify-between py-14 pr-16 pl-10'>
                    <div className="flex  items-center  justify-between space-y-5">
                        <div className='w-1/2 text-start'>
                            <h2 className="text-4xl font-bold   py-5 text-[#FFFFFF]">Ready to Simplify Your Document Management?</h2>
                            <p className="text-lg  leading-[20px] text-[#FFFFFF]">Sign up today and experience the power of AI-driven legal documentation.</p>

                        </div>



                        <div className='w-1/2 flex justify-end'>
                            <Button className='bg-white text-secondary min-w-fit'>Get Started Now</Button>

                        </div>
                    </div>
                </div>

            </Container>


        </section>
    )
}

export default Note