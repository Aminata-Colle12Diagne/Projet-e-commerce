import React from 'react';
import mdeodorants1 from '../assets/img/deodorant1.jpg';
import './Deodorant.css';

function Deodorant(props) {
    return (
        <div>
            <div className="container" id='DEODORANTS' style={{marginTop: "9rem"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                            <p>Deodorants Solides</p>
                            <p>Deodorants Roll-on</p>
                            <p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mdeodorants1} alt="" style={{width: "20rem", height: "14rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Solides Efficacite 48H</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mdeodorants1} alt="" style={{width: "20rem", height: "14rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Nouveaux Roll-on Fraicheur 24h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deodorant;