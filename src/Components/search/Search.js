import React, { useState } from 'react';
import './Search.css';
import data from "../../TemplateData.json";
function Search(props) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='container-fluid searchrow' style={{marginTop: "-2rem", height:"10rem"}}>
            <div className="templateContainer">
                <div className='searchInput_Container'style={{paddingTop: "6rem"}}>
                    <input id="searchInput" type="text" placeholder='Search here' onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
              
            </div>
        </div>
    );
}

export default Search;
