import React, { useState } from 'react';
import './Search.css';
import data from "../../TemplateData.json";
function Search(props) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='container-fluid searchrow'>
            <div className="templateContainer" style={{marginTop: "9rem"}}>
                <div className='searchInput_Container'>
                    <input id="searchInput" type="text" placeholder='Search here' onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
                <div className="template_Container">
                    {
                        data
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                                return null; // Ajout d'une clause return null pour éviter un avertissement
                            })
                            .map((val) => (
                                <div className="template" key={val.id}>
                                    <img src={val.image} alt="" />
                                    <h3>{val.title}</h3>
                                    <p className='price'>${val.price}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
