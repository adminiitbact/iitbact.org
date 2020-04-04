import React from "react";
import whoImg from "../assets/images/whoImg.png";
const WhoAreWe = () => {
  return (
    <div id="WhoAreWe">
      <div className="container sectionContainer">
        <div className="row">
          <div className="col-md-7">
            <h1 className="sectionHeading">Who are we?</h1>
            <p className="sectionPara">
              We are a collective of concerned IIT Bombay alumni trying to make
              a dent in the fight against COVID_19.
              <br /> We belong to different walks of life: engineering,
              government administration, business and manufacturing.
              <br />
              We were brought together by our shared concern and desire to do
              something good for our country in these troubling times.{" "}
            </p>
          </div>
          <div className="col-md-5 sectionImg">
            <div>
              <img
                src={whoImg}
                class="responsive-img whoweare"
                alt=" who we are img"
                // style={{ marginTop: "4em", marginLeft: "4em", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoAreWe;
