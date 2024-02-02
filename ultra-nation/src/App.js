import { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);
 const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);
  const handleAddCountry = (countryName) => {
    const new_Country = [...cart,countryName]; 
    setCart(new_Country);
    // Your logic to add the country
  };
  return (
    <div>
      <h1>React Ultra Country </h1>
      <h1>data: {countries.length}</h1>
      <h1>Country Add : {cart.length}</h1>
      {
  countries.map(country => (
    <Country
      key={country.name.common}
      country_name={country.name.common}
      country_population={country.population}
      country_region={country.region}
      flag={country.flags.svg}
      Handle_Add_Country={ handleAddCountry }
       
    />
  ))
}

   
    </div>
  );
}

export default App;
