
import * as React from 'react';

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
<div className='flex flex-col md:flex-row gap-5 xl:mt-10  lg:mt-9 md:mt-7 sm:mt-6 mt-4 md:gap-10 justify-center items-center md:items-start '>
{CardData.map((card, index) => (
  <div key={index} className="w-[272px] border-1 border-accent/10  shadow-xl shadow-primary/20  h-[349px] rounded-[20px] p-5 space-y-5">
    <img src={card.img} alt={card.title} className="w-12 bg-primary rounded-full h-12 lg:w-14 lg:h-14 xl:w-[58px] xl:h-[58px" />
    <h2 className="font-bold xl:text-lg">{card.title}</h2>
    {card.descriptions.map((desc, i) => (
      <p key={i} className="text-sm text-accent">{desc}</p>
    ))}
  </div>
))}
</div>


            </Container>
        </section>
    )
}

export default ProbSol
