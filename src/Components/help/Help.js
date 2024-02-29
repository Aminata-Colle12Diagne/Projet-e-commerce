import React from 'react';
import './Hepl.css';
function Help(props) {
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
<div className="row">
    <p>Obtenir plus d'informations</p>
</div>

        </div>
    );
}

export default Help;