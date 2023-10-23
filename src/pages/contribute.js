import Navbar from "../../components/Navbar";
import React from "react";
import LargeBtn from '../../components/LargeBtn'


const Contribute = () => {
    return ( 
        <div className="main">
            <Navbar/>
             <div className="flex md:flex-row sm:flex-col w-5/5 sm:justify-between items-center sm:mt-16 flex-col mb-0">
             <div className="px-10 sm:pt-20 pt-32 flex flex-col gap-4 h-3/4 mb-32 mt-0" id="body">
                
                <p className="max-w-xl mx-auto text-center sm:text-4xl text-2xl leading-snug fade-up">Would You like to contribute to the drive?</p>
               
                <div className="flex md:flex-row justify-evenly items-center mt-2 md:ml-64 sm:ml-24 md:w-3/5 sm:flex-row sm:mr-16 flex-col">
                    <img src="./images/students.png" className="sm:w-5/5 rounded-lg fade-up md:w-2/5 mb-8"/>
                    <p className="mt-1.5 fade-up md:w-2/5">If you've got any past test or exam questions that aren't already in the drive and you'd like to share them to benefit others, please feel free to send them in PDF or picture format to the email or WhatsApp number using the links below. Together, we can make studying easier!</p>
                </div>
                <div id="heroBtns" className='fade flex justify-center gap-7 '>
                    <LargeBtn href="mailto:ojoore35@gmail.com" text="Gmail"/>
                    <LargeBtn href="https://wa.me/+2348081405577" text="WhatsApp"/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contribute;
