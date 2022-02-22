import React, {useState, useEffect} from "react";
import CountryDetail from "./components/details";
import CountryList from "./components/list";
import Find from "./components/search";
import axios from "axios";

function App() {
    const [countries, setCountries] = useState([])
    const [findQuery, setFindQuery] = useState('')

    useEffect( () => {
        axios.get("https://restcountries.com/v3.1/all")
            .then( response => setCountries(response.data))
    }, [] )

    const filterChangeHandler = event => setFindQuery( event.target.value )
    const filteredResult = countries.filter( c => c.name.common.toLowerCase().startsWith(findQuery.toLowerCase()))

    return (
    <div>
        <Find currentQuery={findQuery} handleQueryChange={filterChangeHandler}  />
        {
            filteredResult.length > 10
                ? <p>Too many matches, specify another filter </p>
                : (
                    filteredResult.length === 1
                        ? <CountryDetail country={filteredResult[0]} />
                        : <CountryList countries={filteredResult}/>
                )
        }
    </div>
  );
}

export default App;