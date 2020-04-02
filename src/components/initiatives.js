import React from 'react';
import foodDistribution from '../assets/images/foodDistribution.jpg';
import webD from '../assets/images/webD.svg';
import fund from '../assets/images/fund.svg';
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
                                <p className="initiativeTileDesc">-To Migrant Workers (Central & South Delhi) <br/>
                                -To Daily Wage Workers / Needy Groups (Vadodara Region)
                                </p>
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
                                <p className="initiativeTileDesc">low-cost ventilator based on open source designs around the world
                                </p>
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
                                <h3 className="initiativeTileHeading">Masks /Sanitizers /Health equipments</h3>
                                <p className="initiativeTileDesc">-Integrated Face Shield + N95 Mask Manufacturing <br/>
                                -Ozone Disinfection System
                                </p>
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
                                <h3 className="initiativeTileHeading">Fundraising for social initiatives</h3>
                                <p className="initiativeTileDesc">
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
                                <h3 className="initiativeTileHeading">Web Development efforts</h3>
                                <p className="initiativeTileDesc">-Post on Social Media<br/>
                                -Content Preparation <br/>
                                -Promotions/Ads on Facebook/Insta
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