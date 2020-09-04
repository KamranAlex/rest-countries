import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";

const Home = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const baseURL = "https://restcountries.eu/rest/v2/all";
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);
  const filteredCountries = country.filter((flCountry) => {
    return (
      flCountry.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    );
  });

  return (
    <div>
      <Header showSearch={true} handleChange={handleChange}></Header>
      <div className='container d-flex'>
        <div className='row row-cols-4 row-cols-md-4'>
          {filteredCountries.map((singleCountry) => (
            <Main singleCountry={singleCountry} key={singleCountry.name}></Main>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
