
import * as React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Container from '../Common/Container';
import ProbSolHead from './ProbSolHead';
import {CardData} from '../db/DataVase';

function ProbSol() {
    return (
        <section className='pt-20'>
            <Container>

                {/* Head+ arrow */}

                <ProbSolHead />


                {/* card */}
                <div className='grid grid-cols-1  sm:grid-cols-12 gap-5 xl:py-10 lg:py-9 md:py-7 sm:py-6 py-4 md:gap-10 justify-start items-center  overflow-auto'>
{CardData.map((card, index) => (
  <div key={index} className="col-span-12 cursor-pointer sm:col-span-6 md:col-span-4 lg:col-span-3 border hover:bg-primary hover:text-white border-accent/10 shadow-xl shadow-primary/10 h-[280px] md:h-[349px] rounded-[20px] p-5 space-y-5 flex flex-col  ">
    <img src={card.img} alt={card.title} className="w-12 h-12 size-12 bg-primary p-2 rounded-full lg:w-14 lg:h-14 xl:w-[58px] xl:h-[58px]" />
    <h2 className="font-bold text-lg ">{card.title}</h2>
    {card.descriptions.map((desc, i) => (
      <p key={i} className='text-sm' >{desc}</p>
    ))}
  </div>
))}

</div>



            </Container>
        </section>
    )
}

export default ProbSol
