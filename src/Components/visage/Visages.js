import React from 'react';
import mvisage1 from '../assets/img/visage1.jpg';
import mvisage2 from '../assets/img/visage2.jpg';
function Visages(props) {
    return (
        <div>
            <div className="container" id='VISAGE' style={{marginTop: "9rem"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                           <p> Crèmes Visages</p>
                            <p>Nettoyants et Démaquillants</p>
<p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mvisage1} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Gamme visage</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mvisage2} alt="" style={{width: "20rem", height: "15rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Nettoyants et démaquillants</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Visages;