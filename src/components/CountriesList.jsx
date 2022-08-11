import { Link } from 'react-router-dom';
//import countriesList from "../countries.json"
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesList() {
  const [allCountries, setAllCountries] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    const response = await axios(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    console.log(response.data);
    setAllCountries(response.data);
    setIsFetching(false)
  };

  if(isFetching === true) {
    return <h3>...Waiting for the list of countries</h3>
}


  return (
    <div id="allCountries">

            {allCountries.map((eachCountry) => {
              return (
                <div id="eachCountry">    
                <Link
                  to={`/${eachCountry.alpha3Code}`}
                  className="list-group-item"
                > <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" /></Link>
                <p><Link
                  to={`/${eachCountry.alpha3Code}`}
                  className="list-group-item"
                > 
                  {eachCountry.name.common}
                </Link></p>
                </div>
              );
            })}
          
    </div>
  );
}

export default CountriesList;
