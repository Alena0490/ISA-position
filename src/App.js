import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"


const App = () => {
  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  useEffect( () => {
    fetch(url)
        .then( (response) => response.json() )
        .then( (data) => data["iss_position"] )
        .then( (position) => {
              setLatitude(position["latitude"])
              setLongitude(position["longitude"])
        })
    setLoading(false)
  }, [])


  if (loading){
    return <h2>Načítání stránky...</h2>
  }


  return <div className="position">
    <h1>ISS Position</h1>
    <h2>Latitude</h2>
    <p>{latitude}</p>
    <h2>Longitude</h2>
    <p>{longitude}</p>
    <a
      href={`https://mapy.cz/zakladni?q=${latitude},${longitude}&z=5`}
      target="_blank"
      rel="noopener noreferrer"
    >
  Map position
</a>

  </div>
 
}


export default App
