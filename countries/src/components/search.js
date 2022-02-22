import React from "react";

const Search = ({currentQuery, handleQueryChange}) =>
    <div>
        find countries <input value={currentQuery} onChange={handleQueryChange} />
    </div>

export default Search