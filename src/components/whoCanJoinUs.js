import React from 'react';
import whyDoThis from '../assets/images/whyDoThis.png';
const WhoCanJoinUs=()=>{
    return(
        <div id="whoCanJoinUs">
            <div className=" container sectionContainer">
                <div className="row">
                    <div className="col-md-6 sectionImg">
                    <div ><img src={whyDoThis}/></div>
                    </div>
                    <div className="col-md-6">
                    <h1 className="sectionHeading">Who can join us?</h1>
                        <p className="sectionPara">Anyone who wants to, you don’t have to be from IIT  Bombay to do this. It is just our belief that we will tap the IIT Bombay network before tapping other bigger networks. It helps streamline things.</p>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhoCanJoinUs;