import React from "react";

const Search = ({currentQuery, handleQueryChange, searchHandler}) =>
    <div>
        find countries <input value={currentQuery} onChange={handleQueryChange} onKeyDown={searchHandler}/>
    </div>

export default Search 