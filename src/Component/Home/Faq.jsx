import React, { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import Container from '../Common/Container';
import TextGrad from '../Common/TextGrad';
import { faqData } from '../db/DataVase';
import FaqCard from './FaqCard';

function Faq() {
    const [active, setActive] = useState(1); // Default: No active FAQ

    return (
        <section className="mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] relative">
            <Container className="max-w-[982px] relative z-10 ">
                <SectionTitle>
                    Frequently <TextGrad>Asked Questions</TextGrad>
                </SectionTitle>
                <div className="pt-10 space-y-5">
                    {faqData.map((data, index) => (
                        <FaqCard 
                            key={index} 
                            {...data} 
                            onClick={() => setActive(prev => (prev === index ? null : index))}  
                            active={active === index} 
                        />
                    ))}
                </div>
            </Container>
            <img src="/Vector4.png" alt="Faq bg line" className="lg:h-[590px] top-10 h-full md:top-10 lg:-top-20 lg:-left-5  absolute " />
        </section>
    );
}

export default Faq;