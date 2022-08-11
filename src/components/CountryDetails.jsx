import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function CountryDetails() {
  const { countryCode } = useParams();

  const [countryDetails, setCountryDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getCountryDetails();
  }, [countryCode]);

  const getCountryDetails = async () => {
    const response = await axios(
      `https://ih-countries-api.herokuapp.com/countries/${countryCode}`
    );
    //console.log(response.data);
    let countryFound = response.data;

    console.log(countryFound);
    setCountryDetails(countryFound);
    setIsFetching(false);
  };


    // const getBordersName = async () => {
    //     const response = await axios(
    //         `https://ih-countries-api.herokuapp.com/countries`
    //       )
    //     const countriesArr = response.data
    //     let filteredArr = countriesArr.filter((eachCountry)=>
    //     eachCountry.alpha3Code === 
    //     )
        
    // }


  if (isFetching === true) {
    return <h3>...Details of {countryDetails.name} are loading</h3>;
  }

  //console.log(countryDetails)
  const borders = countryDetails.borders;
  console.log(borders);

  return (
    <div id="country-details">
      <h1>{countryDetails.name.common}</h1>
      <div id="capital">
        <h3>Capital</h3>
        <p>{countryDetails.capital}</p>
      </div>
      <div id="area">
        <h3>Area</h3>
        <p>
          {' '}
          {countryDetails.area}km<sup>2</sup>
        </p>
      </div>

      <div id="borders">
        <h3>Borders</h3>

        {borders.map((eachCountryCode) => {
          return <li> <Link to={`/${eachCountryCode}`}>{eachCountryCode}</Link></li>;
        })}
      </div>
    </div>
  );
}

export default CountryDetails;
