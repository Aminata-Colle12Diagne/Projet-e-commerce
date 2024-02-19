import React from 'react';
// import './Cheveux.css';
import mcheveux2 from "../assets/img/cheveux 2.jpg"
import mcheveux3 from "../assets/img/cheveux 3.jpg"

function Deodorant(props) {
    return (
      
            <div className="container" id='CHEVEUX' style={{marginTop: "9rem"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                            <p>Shampoings</p>
                            <p>Shampoings Solides</p>
                            <p>Après-Shampoing Solide</p>
                            <p>Huile Sèche</p>
                            <p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mcheveux2} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Produits Solides</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mcheveux3} alt="" style={{width: "20rem", height: "14rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Produits Liquides</p>
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Deodorant;