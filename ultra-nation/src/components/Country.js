import React from 'react';

const Country = (props) => {
  const { country_name, country_population,country_region,flag} = props;
  console.log(flag);
  const Flag_style = {height : '50px'};
  const Country_Dev_Style = { border : '1px solid red ' ,margin : '10px ', padding : '10px'}
  const handleAddCountry = props.Handle_Add_Country;

  return (
    <div style={Country_Dev_Style}>
      <h1>This is a Country List == {country_name}</h1>
      <br />
      <img style={Flag_style} src={flag} alt="" />
      <br />
     
      <p>Population : {country_population}</p>
      <br />
      <p >Region : {country_region}</p>
      <button onClick={()=>handleAddCountry(props.country_name)}>Add Country</button>
     
    </div>
  );
};

export default Country;
