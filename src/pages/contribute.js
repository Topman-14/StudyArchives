import Navbar from "../../components/Navbar";
import React from "react";


const Contribute = () => {
    return ( 
        <div className="main">
            <div className="body">
                <Navbar/>
                <div className="heading falling-element">
                    <h1>Would You like to contribute to the drive?</h1>
                </div>
                <div className="contribute">
                    <button className="btn falling-element">
                        <p>Gmail</p>
                        <a href="mailto:ojoore35@gmail.com" className="link" target="_blank">Ojoore35@gmail.com</a>
                    </button>
                    <button className="btn falling-element">
                        <p>Whatsapp</p>
                        <a href="https://wa.me/+2348081405577" className="link" target="_blank">08081405577</a>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Contribute;