import React from "react";
import whyDoThis from "../assets/images/whyDoThis.png";
const WhoCanJoinUs = () => {
  return (
    <div id="whoCanJoinUs">
      <div className=" container sectionContainer">
        <div className="row">
          <div className="col-md-6 sectionImg">
            <div>
              <img
                className="whocanjoinusimg"
                // style={{ marginTop: "3em",width: 'auto' }}
                src={whyDoThis}
                alt="who can join us"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="sectionHeading">Who can join us?</h1>
            <p className="sectionPara">
              Anyone who wants to, you DON’T have to be from IIT Bombay to do
              this. We have named the group IIT B ACT because we believe that
              there is a lot of value we can extract out of tapping into the IIT
              Bombay network of students and alumni.
              <br />
              <br /> The skills we are currently looking for: web developers,
              software engineers, designers, marketing experts, supply-chain
              management experts, entrepreneurs, manufacturing enthusiasts,
              social workers, data scientists, economists, biomedical engineers,
              doctors and the list goes on and on.
              <br />
              <b>Everyone adds value to our collective!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoCanJoinUs;
