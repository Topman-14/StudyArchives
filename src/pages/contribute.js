import Navbar from "../../components/Navbar";
import React from "react";
import LargeBtn from '../../components/LargeBtn'


const Contribute = () => {
    return ( 
        <div className="main">
            <Navbar/>
            <div className="flex sm:flex-row w-5/5 sm:justify-between items-center sm:mt-16 flex-col mb-0">
                <div className="flex sm:flex-col justify-between items-center mt-16 ml-16 sm:w-2/5 flex-col mr-16">
                    <img src="../collab.png" className="sm:w-5/5 rounded-lg"/>
                    <p className="mt-1.5">If you have access to any relevant past test or exam question, and would like to add it to the drive, kindly forward a copy of it in either Pdf or Picture(png/jpg) format to the email or whatsapp number.</p>
                </div>
                <div className="px-10 sm:pt-20 pt-32 flex flex-col gap-4 h-3/4 mb-32 mt-0" id="body">
                    {/* body px-10 sm:pt-20 pt-32  flex flex-col justify-between gap-4 h-2/5 w-4/5 */}
                
                    <p className="max-w-xl mx-auto text-center sm:text-4xl text-2xl leading-snug fade-up">Would You like to contribute to the drive?</p>
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