import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import TextGrad from "../Common/TextGrad";
import Container from "../Common/Container";
import { reviews } from "../db/DataVase";
import Star from "./Star";
import { cn } from "../../ibl/utils";

function Reviews() {

 
    const [active, setActive] = useState(1);
  

    return (
        <section className="md:my-[150px] my-20 py-10 md:py-20 bg-[#F6F6F6]">
            <SectionTitle className="text-center">
                Reviews From <TextGrad>Our Client</TextGrad>
            </SectionTitle>

            <Container className="pt-10 flex flex-col md:flex-row gap-16 md:gap-18 md:mx-5 lg:mx-0 lg:gap-[93px] items-center justify-between">
              
                  {/* Left Side Indicator */}
                  <div className="space-y-5 absolute left-3 sm:left-5 md:left-3 lg:left-8  rounded-[20px] bg-[#E2DED8]">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-[5px] h-19 sm:h-21 md:h-22 lg:h-[97px] rounded-[20px] transition-all",
                                active === index ? "bg-primary" : ""
                            )}
                        />
                    ))}
                </div>

                {/* Left - Review List */}
                <div className="gap-5 w-[90%] flex   flex-col rounded-[20px] md:w-[491px]">
                    {reviews.map((review, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`flex cursor-pointer justify-start border-primary border-[1px] rounded-[20px] py-1 px-1 md:px-3 gap-[13px] items-center transition-all ${active === index ? "bg-primary text-white" : "bg-white"
                                }`}
                        >
                            <img src={review.image} className="rounded-full w-16 sm:w-18 md:w-20 lg:w-22 h-auto" alt={review.name} />
                            <div className="font-semibold text-base">
                                <h4>{review.name}</h4>
                                <p>{review.type}</p>
                            </div>
                        </button>
                    ))}
                </div>

              
               
                {/* Right - Active Review Details */}
<div className="w-full flex-1/2 flex flex-col gap-4 md:gap-7 justify-center md:justify-start transition-all opacity-100">
    <h3 className="font-bold text-xl sm:text-[25px] md:text-[27px] lg:text-[30px]">
        {reviews[active].review.title}
    </h3>
    <div className="flex justify-start items-center gap-1">
        {Array.from({ length: reviews[active].review.stars }).map((_, index) => (
            <Star key={index} />
        ))}
    </div>
    <p className=" text-sm  md:text-base text-accent max-w-[500px]">
        {reviews[active].review.details}
    </p>
</div>

            </Container>
        </section>
    );
}

export default Reviews;
