import React from 'react';
import foodDistribution from '../assets/images/foodDistribution.jpg';
import webD from '../assets/images/webD.svg';
import fund from '../assets/images/fund.jpg';
import vente from '../assets/images/vente.jpg';
import mask from '../assets/images/mask.svg';
const Initiatives = () => {
    return (
        <div id="initiatives">
            <div className="container sectionContainer">
                <h1 className="sectionHeading">Our Initiatives</h1>
                <div className="row">
                    <div className="col-md-6 initiativeTile">
                        <div>
                        <div className="row">
                            <div className="col-4 initiativeTileImg">
                                <img src={foodDistribution}/>
                            </div>
                            <div className="col-8 initiativeTileDetail">
                                <h3 className="initiativeTileHeading">Food distribution</h3>
                                <p className="initiativeTileDesc">Concerned citizens who are focused ensuring that no one goes to sleep on an empty stomach </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 initiativeTile">
                        <div>
                        <div className="row">
                            <div className="col-4 initiativeTileImg">
                                <img src={vente} />
                            </div>
                            <div className="col-8 initiativeTileDetail">
                                <h3 className="initiativeTileHeading">Ventilators</h3>
                                <p className="initiativeTileDesc">Supporting the manufacturing of ventilators by sourcing parts and pipeline</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 initiativeTile">
                        <div>
                        <div className="row">
                            <div className="col-4 initiativeTileImg">
                                <img src={mask} />
                            </div>
                            <div className="col-8 initiativeTileDetail">
                                <h3 className="initiativeTileHeading">Marketing and Sales</h3>
                                <p className="initiativeTileDesc">Working on finding destinations for masks, PPEs and ventilators </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 initiativeTile">
                        <div>
                        <div className="row">
                            <div className="col-4 initiativeTileImg">
                                <img src={fund} />
                            </div>
                            <div className="col-8 initiativeTileDetail">
                                <h3 className="initiativeTileHeading">Fundraising </h3>
                                <p className="initiativeTileDesc">Tapping into alumni network and public funds to fuel initatives
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 initiativeTile">
                        <div>
                        <div className="row">
                            <div className="col-4 initiativeTileImg">
                                <img src={webD} />
                            </div>
                            <div className="col-8 initiativeTileDetail">
                                <h3 className="initiativeTileHeading">Web Development</h3>
                                <p className="initiativeTileDesc">Providing digital and analytics support to local administration
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>

                  
                    
                    
                </div>
            </div>
        </div>
    );
}
export default Initiatives;