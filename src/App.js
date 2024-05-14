
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


  useEffect(()=>{
    try {
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setData(data));
      
    } catch (error) {
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
      {data && data.map((item) => <Tile flagUrl={item.flags.png} name={item.name.common} altFlag={item.flags.alt} key={item.name.common}/>)}
    </div>
  );
}

export default App;
