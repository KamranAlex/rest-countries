import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { alpha2Code } = useParams();
  const [country, setCountry] = useState({});
  const [currancy, setCurrancy] = useState([]);
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alpha2Code}`)
      .then((res) => res.json())
      .then((data) => {
        return [
          setCountry(data),
          setCurrancy(data.currencies),
          setLanguage(data.languages),
        ];
      });
  }, []);

  const {
    name,
    capital,
    region,
    subregion,
    population,
    alpha3Code,
    timezones,
    area,
  } = country;

  return (
    <div>
      <Header showSearch={false}></Header>
      <div className='container d-flex justify-content-center align align-items-center'>
        <div className='row '>
          <div className='card bg-dark'>
            <img src={country.flag} alt='' />
            <div className='card-body'>
              <h1 className='country-name'>{name} </h1>
              <p className='region'>
                Region: <span>{region}</span>
              </p>
              <p className='sub-region'>
                Sub-region: <span>{subregion}</span>
              </p>
              <p className='capital'>
                Capital: <span>{capital}</span>
              </p>
              <p className='code'>
                Short-code: <span>{alpha3Code}</span>
              </p>
              <p className='population'>
                Population: <span>{population}</span>{" "}
              </p>
              <p className='timezone'>
                Timezones: <span>{timezones}</span>{" "}
              </p>
              <p className='area'>
                Area: <span>{area} </span>{" "}
                <span className='symbol'>&#x33a2;</span>
              </p>

              <p className='language'>
                Language: <span>{language.map((lg) => lg.name)}</span>
              </p>

              <p className='Currancy'>
                Currancy: <span>{currancy.map((cr) => cr.name)}</span>
              </p>

              <p className='Currancy-symbol'>
                Currancy-symbol: <span>{currancy.map((cr) => cr.symbol)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
