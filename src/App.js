
import { useEffect, useState } from 'react';


const Tile = ({flagUrl, name, altFlag}) => {
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '8px',
      width: '200px'
    }}>

      <img src={flagUrl} alt={altFlag}  style={{width: '100px', height: '100px'}}/>
      <h2>{name}</h2>

    </div>

  )
}

function App() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


  useEffect(()=>{
    try {
      const fetchData = async ()=> {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if(!response){
          throw new Error('Failed to fetch countries data');
        } else {
          const data = await response.json();
          setData(data)
        }  
      }
      fetchData()
      // fetch("https://restcountries.com/v3.1/all")
      // .then(res => res.json())
      // .then(data => setData(data));  
    } catch (error) {
      setError(error.message)
      console.error(error)
    } 
    
  },[])


  // console.log(data)

  
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center' 
    }}>
      {error && <p>Error: {error}</p>}
      {data && data.map((item, i) =>  <Tile flagUrl={item.flags.png} name={item.name.common} altFlag={item.flags.alt} key={item.name.common}/>)}
    </div>
  );
}

export default App;
