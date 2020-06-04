import React from "react";
import foodDistribution from "../assets/images/foodDistribution.jpg";
import webD from "../assets/images/web development.svg";
import fund from "../assets/images/fund.jpg";
import vente from "../assets/images/vente.jpg";
import mask from "../assets/images/market.png";
const Initiatives = () => {
  return (
    <div id="initiatives">
      <div className="container sectionContainer">
        <h1
          className="sectionHeading"
          style={{ marginBottom: " 20px", marginTop: "0" }}
        >
          Our Initiatives
        </h1>
        <div className="row">
          {/* <div className="col-md-1 initiativeTile"></div> */}
          <div className="col-md-5 initiativeTile">
            <div>
              <div className="row">
                <div className="col-4 initiativeTileImg">
                  <img alt='food' src={foodDistribution} />
                </div>
                <div className="col-8 initiativeTileDetail">
                  <h3 className="initiativeTileHeading">Food distribution</h3>
                  <p className="initiativeTileDesc">
                    Concerned citizens who are focused ensuring that no one goes
                    to sleep on an empty stomach{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 initiativeTile"></div>
          <div className="col-md-5 initiativeTile">
            <div>
              <div className="row">
                <div className="col-4 initiativeTileImg">
                  <img alt='ventilators' src={vente} />
                </div>
                <div className="col-8 initiativeTileDetail">
                  <h3 className="initiativeTileHeading">Ventilators</h3>
                  <p className="initiativeTileDesc">
                    Supporting the manufacturing of ventilators by sourcing
                    parts and pipeline
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1 initiativeTile"></div> */}
          <div className="col-md-5 initiativeTile">
            <div>
              <div className="row">
                <div className="col-4 initiativeTileImg">
                  <img
                    src={mask}
                    alt='market'
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-8 initiativeTileDetail">
                  <h3 className="initiativeTileHeading">Marketing and Sales</h3>
                  <p className="initiativeTileDesc">
                    Working on finding destinations for masks, PPEs and
                    ventilators{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 initiativeTile"></div>
          <div className="col-md-5 initiativeTile">
            <div>
              <div className="row">
                <div className="col-4 initiativeTileImg">
                  <img alt='fund' src={fund} />
                </div>
                <div className="col-8 initiativeTileDetail">
                  <h3 className="initiativeTileHeading">Fundraising </h3>
                  <p className="initiativeTileDesc">
                    Tapping into alumni network and public funds to fuel
                    initatives
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-2 initiativeTile"></div> */}
          <div className="col-md-5 initiativeTile">
            <div>
              <div className="row">
                <div className="col-4 initiativeTileImg">
                  <img src={webD} style={{width:'95%',marginLeft:'10px'}} alt="web dev"/>
                </div>
                <div className="col-8 initiativeTileDetail">
                  <h3 className="initiativeTileHeading">Web Development</h3>
                  <p className="initiativeTileDesc">
                    Providing digital and analytics support to local
                    administration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Initiatives;
