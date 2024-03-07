import React, { useState } from 'react';
import './Hepl.css';
import { Link } from 'react-router-dom';
function Help(props) {
  const [isGrid, setIsGrid] = useState(true);

  const toggleGrid = () => {
    setIsGrid(!isGrid, (prevColor) => (prevColor === '' ? '#00ff00' : ''));
  };

    return (
        <div className='container-fluid' style={{marginTop: "8rem"}}>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Respire</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div class="d-flex">
        <p>Boutique en ligne</p>
      </div>
    </div>
  </div>
</nav>

<div className="row rowhelpBonjour pt-10">
        <div className='comment text-center text-white' style={{marginTop: "3rem"}}>
            <h2>Bonjour, comment puis-je vous aider ?</h2>
        </div>
        <div className='comment ' style={{marginTop: "-1rem"}}>
        <input class="form-control " type="search" placeholder="Search" aria-label="Search" style={{width: "25rem"}}/>
        </div>
</div>
<div className="row" style={{marginTop: "3%"}}>
   <div className="butons d-flex">
   <p>Obtenir plus d'informations</p>
    {/* <div className='d-flex mesbutton'>
    <button className="button" onClick={toggleGrid}>Button 1</button>
      <button className="button" onClick={toggleGrid}>Button 2</button>
</div> */}
     <div className="btn-group ms-auto" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" onClick={toggleGrid} name="btnradio" id="btnradio1" autoComplete="off" checked={isGrid} />
      <label className={`btn ${isGrid ? 'active' : ''}`} htmlFor="btnradio1">
        <i className="fa-solid fa-list"></i>
      </label>

      <input type="radio" className="btn-check" onClick={toggleGrid} name="btnradio" id="btnradio2" autoComplete="off" checked={!isGrid} />
      <label className={`btn ${!isGrid ? 'active' : ''}`} htmlFor="btnradio2">
        <i className="fa-solid fa-bars"></i>
      </label>
    </div>


   </div>

</div>
<div className={`grid-container ${isGrid ? 'grid' : 'row'}`}style={{marginLeft: "2rem"}}>
<div className='col-md-4 colpremier ' style={{marginTop: "2rem", width: "20rem"}} >
<h5 class="category-h5" title="👌 GÉNÉRALITÉS">👌 GÉNÉRALITÉS</h5>
<footer class="category-footer "style={{marginTop: "2rem"}}>12 articles</footer>
</div>

<div className='col-md-4 colpremier ' style={{marginTop: "2rem", width: "20rem"}}>
<h5 class="ghc-category-title css-lik3jp e6mjq2q3" title="🚲 LIVRAISON">🚲 LIVRAISON</h5>
<footer class="category-footer "style={{marginTop: "2rem"}}>7 articles</footer>
</div>
<div className='col-md-4 colpremier ' style={{marginTop: "2rem", width: "20rem"}}>
<h5 class="category-title " title="💌 ABONNEMENT">💌 ABONNEMENT</h5>
<footer class="category-footer "style={{marginTop: "2rem"}}>10 articles</footer>
</div>
<div className='col-md-4 colpremier ' style={{marginTop: "2rem", width: "20rem"}}>
<h5 class="category-title " title="✨ PRODUITS">✨ PRODUITS</h5>
<footer class="category-footer "style={{marginTop: "2rem"}}>18 articles</footer>
</div>
</div>

<div className="row" style={{marginTop: "3%"}}>
  <h4 className='obt' style={{marginLeft: "2%"}}>Obtenir de l'aide</h4>
<div className='aide'>
<div className='aidenous'>
<i class="fa-solid fa-envelope" style={{color: "#007266"}}></i>
<span class="ghc-contact-card-title css-ny5p0o e1xzawqi3 " style={{marginLeft: "1rem"}}>Contactez-nous</span>
<svg className='fleche ms-auto' width="24" height="24" paddingLeft= "14rem" viewBox="0 0 24 24" fill="#6A6A6A" xmlns="http://www.w3.org/2000/svg" facing="right" class="e1xzawqi1 css-4g45qb e18qeao70"><path d="M9.29006 15.8805L13.1701 12.0005L9.29006 8.12047C8.90006 7.73047 8.90006 7.10047 9.29006 6.71047C9.68006 6.32047 10.3101 6.32047 10.7001 6.71047L15.2901 11.3005C15.6801 11.6905 15.6801 12.3205 15.2901 12.7105L10.7001 17.3005C10.3101 17.6905 9.68006 17.6905 9.29006 17.3005C8.91006 16.9105 8.90006 16.2705 9.29006 15.8805Z"></path></svg>
</div>
<hr/>
<div className='vide'>
  <div></div>
</div>
</div>
</div>
<div className="contact text-center">
<Link to="/contact">Contact</Link>
</div>

      </div>

      
    );
}

export default Help;