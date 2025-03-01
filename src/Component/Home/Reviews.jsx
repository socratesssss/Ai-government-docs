import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import TextGrad from "../Common/TextGrad";
import Container from "../Common/Container";
import { reviews } from "../db/DataVase";
import Star from "./Star";
import { cn } from "../../ibl/utils";

function Reviews() {

 
    const [active, setActive] = useState(0);
  

    return (
        <section className="my-[150px] py-20 bg-[#F6F6F6]">
            <SectionTitle className="text-center">
                Reviews From <TextGrad>Our Client</TextGrad>
            </SectionTitle>

            <Container className="pt-10 flex gap-[93px] items-center justify-between">
              
                 {/* Left Side Indicator */}
                 <div className="space-y-5 absolute  rounded-[20px] bg-[#E2DED8]">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-[5px] h-[97px] rounded-[20px] transition-all",
                                active === index ? "bg-primary" : ""
                            )}
                        />
                    ))}
                </div>

                {/* Left - Review List */}
                <div className="gap-5 flex ml-3 md:ml-6 flex-col rounded-[20px] w-[491px]">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            onClick={() => setActive(index)}
                            className={`flex cursor-pointer justify-start border-primary border-[1px] rounded-[20px] py-1 px-3 gap-[13px] items-center transition-all ${active === index ? "bg-primary text-white" : "bg-white"
                                }`}
                        >
                            <img src={review.image} className="rounded-full" alt={review.name} />
                            <div className="font-semibold text-base">
                                <h4>{review.name}</h4>
                                <p>{review.type}</p>
                            </div>
                        </div>
                    ))}
                </div>

              
               
                {/* Right - Active Review Details */}
<div className="w-full flex-1/2 flex flex-col gap-7 transition-all opacity-100">
    <h3 className="font-bold text-[30px]">
        {reviews[active].review.title}
    </h3>
    <div className="flex justify-start items-center gap-1">
        {Array.from({ length: reviews[active].review.stars }).map((_, index) => (
            <Star key={index} />
        ))}
    </div>
    <p className="text-base text-accent max-w-[500px]">
        {reviews[active].review.details}
    </p>
</div>

            </Container>
        </section>
    );
}

export default Reviews;
