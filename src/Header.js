import Search from './Search'
import {useEffect,useState} from 'react'
function Header({countries,setCountries}) {

  const [search,setSearch] = useState("")
  useEffect(()=>{
    let c=countries.filter(c=>c.name.common.toLowerCase().startsWith(search.toLowerCase()));
    console.log(c);
    setCountries(c)
  },[search])
  return (
    <header>
        <h1>Countries ({countries.length})</h1>
        <Search setSearch={setSearch}/>
    </header>
  )
}

export default Header