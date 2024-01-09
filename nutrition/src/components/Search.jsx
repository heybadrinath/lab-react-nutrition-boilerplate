import React from "react";
function Search(props) {
    let {setSearch} = props
    return (
        <>
            <p className="search">Search</p>
            <input type="text" placeholder="Type anything here" onChange={(e) => setSearch(e.target.value)}/>
        </>
    )
}
export  default Search