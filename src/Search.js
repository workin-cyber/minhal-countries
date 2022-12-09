
function Search({setSearch}) {
  return (
    <input type="search" 
    onInput={(e)=>setSearch(e.target.value)}
    placeholder="search counrty..."/>
  )
}

export default Search