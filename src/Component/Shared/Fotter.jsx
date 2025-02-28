import React from 'react';
import Container from '../Common/Container';
import {navItems} from '../db/DataVase';
import { SocialIcon } from '../db/DataVase';

const Footer = () => {
    
    return (
        <footer className='pt-5 lg:pt-24 '>
            <Container>
{/* upperFooter */}
                <div className='flex justify-between items-center gap-2.5 py-5'>
                    <h1 className='font-secondary  lg:text-3xl text-xl sm:text-2xl xl:text-4xl font-bold'>AI GoverningDocs</h1>
                    <div className='hidden lg:flex justify-center items-center xl:gap-4 gap-3'>
                        {navItems.map(({ name, link }, index) => (
                                      <a
                                        key={index}
                                        href={link}
                                        className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer"
                                      >
                                        {name}
                                      </a>
                                    ))}
                      
                    </div>
                    <div className='flex justify-center items-center gap-2.5 '>
                        {
                            SocialIcon.map(({url,img},index)=>(
                                <img key={index} src={img} alt='socialIcon' className='size-9 xl:w-8 xl:h-8 cursor-pointer'/>
                            ))
                        }
                        
                    </div>
                   
                </div>
                {/* BottomFooter */}
               <div className='md:mt-12 mt-5 my-element lg:mt-27'>
               <p className='text-lg lg:py-7 text-center leading-[18px] text-[#111111]'>Ai GoverningDocs 2024. All Rights Reserved.</p>
               </div>
            </Container>
            
        </footer>
    );
};

export default Footer;