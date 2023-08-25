import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAllCountries } from "../../features/countries/countriesAction";
import "./country.css";

const Country = () => {
  const { countriesData, loading, error, success } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(showAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setCountryData(countriesData);
      console.log(countriesData);
    }
    if (error) {
      console.log(error);
    }
  }, [countriesData, success, error]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.length > 0 &&
        countryData.map((item, index) => (
          <div className="country-card" key={index}>
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="country-image"
            />
            <h1>{item.name.common}</h1>
            <div className="country-content">
              <p>
                Population: <span>{}</span>
              </p>
              <p>
                Region: <span>{}</span>
              </p>
              <p>
                Capital: <span>{}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default Country;
