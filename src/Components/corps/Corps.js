import React from 'react';
import mcorps1 from '../assets/img/corps1.jpg'
import mcorps2 from '../assets/img/corps2.jpg'
function Corps(props) {
    return (
        <div>
            <div className="container" id='CORPS' style={{marginTop: "9rem"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                            <p>Savons et Exfoliant</p>
<p>Solaire</p>
<p>Gels douche</p>
<p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mcorps1} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Baume corps Nourrissant</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mcorps2} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Duo Soins Mains & Lèvres</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Corps;