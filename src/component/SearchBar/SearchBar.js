import React, { useState } from 'react';


const SearchBar = () => {
    const [filter, setFilter] = useState("");
    const emojipedia = [
        { name: 'Wikipedia'},
        { name: 'umbrella'},
        { name: 'bowl'},
    ]
    
    return (
        <div>
            <h1>
                <span>Search</span>
            </h1>

           
            <div>
                <input
                    type="text"
                    id="myInput"
                    onChange={e => setFilter(e.target.value)}
                    placeholder="Search for names.."
                    style={{boxShadow: '3px 3px 10px 3px #dddddd'}}
                />

                <div>
                        {filter.length > 0 ? emojipedia.filter(emoji => emoji.name.includes(filter)).map(m => <h2>{m.name}</h2>) : <p></p>}       
                </div>
            </div>
           
        </div>
    );
};

export default SearchBar;