import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';

const Testimonial = (props) => {
    let reviews=props.reviews;
    const [index,setIndex] = useState(0);

    function leftShiptHandler(){
           if (index - 1 < 0) {
            setIndex(reviews.length-1);
           } 
           else{
            setIndex(index-1);
           }
    }
    function rightShiptHandler(){
            if(index+1 >=  reviews.length){
                setIndex(0);
            }
            else{
                setIndex(index+1);
            }
    }
    function surpriseHandler(){
            let randomIndex=Math.floor(Math.random()*reviews.length);
            setIndex(randomIndex);
    }
    return (
        
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-10 pt-10 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]} />

            <div className="flex flex-col mx-auto">
                <div className="flex text-3xl mt-3 gap-2 mx-auto text-violet-400 ">
                    <button className="cursor-pointer hover:text-violet-500" onClick={leftShiptHandler}><FiChevronLeft/></button>
                    <button className="cursor-pointer hover:text-violet-500" onClick={rightShiptHandler}><FiChevronRight/></button>
                </div>

                <div className="flex flex-col mx-auto">
                    <button className="flex  bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 mb-2 rounded-md font-bold text-white text-lg "onClick={surpriseHandler}>
                        Surprise Me
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;