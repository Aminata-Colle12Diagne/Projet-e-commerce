import React from 'react';
import mdent2 from '../assets/img/dent 2.jpg';
import mdent1 from '../assets/img/dent 1.jpg';
import './Dentifrice.css';
function Dentifrice(props) {
    return (
        <div>
            <div className="container" id='DENTIFRICES' style={{marginTop: "9rem"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                            <p>Dentifrices Solides</p>
                            <p>Dentifrices Gels</p>
                            <p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mdent2} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Les dentifrices gels</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mdent1} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Le dentifrice solide</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dentifrice;