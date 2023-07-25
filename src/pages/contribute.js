import Navbar from "../../components/Navbar";
import React from "react";
import LargeBtn from '../../components/LargeBtn'

const Contribute = () => {
    return ( 
        <div className="main">
            <div className="body">
                <Navbar/>
                <div className="heading falling-element">
                    <h1>Would You like to contribute to the drive?</h1>
                </div>
                <div className="contribute falling-element">
                    <LargeBtn href="mailto:ojoore35@gmail.com" text="Gmail"/>
                    <LargeBtn href="https://wa.me/+2348081405577" text="WhatsApp" className="btn falling-element"/>
                </div>
            </div>
        </div>
     );
}
 
export default Contribute;