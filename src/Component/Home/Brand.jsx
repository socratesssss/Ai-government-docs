import React from 'react'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import TextGrad from '../Common/TextGrad'
import { Brandimg } from '../db/DataVase'

function Brand() {
    return (
        <section>
            <Container className=''>
                <div className='bg-[#E6F9FD] flex flex-col justify-center items-center py-[50px] rounded-[20px]'>
                    <SectionTitle>Our <TextGrad>Partners</TextGrad></SectionTitle>

                    {/* BrandLOGo */}
                    <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-7 mx-10 pt-10'>
                    {Brandimg.map((brand, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <img src={brand.img} alt={brand.name} className='lg:w-60 md:w-50 w-40 h-auto' />
                        </div>
                    ))}

                </div>

                </div>
              


            </Container>


        </section>
    )
}

export default Brand
