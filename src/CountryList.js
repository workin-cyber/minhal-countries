
function CountryList({countries}) {
  return (
    <div>

        <ul>
                {countries.map(country=>{
                    return <li>
                        <img src={country.flags.png} height="50px"/>
                        {country.name.common}</li>
                })}

        </ul>
    </div>
  )
}

export default CountryList