import { useState, useEffect } from "react"

const App = () => {
  const url = "https://api.wheretheiss.at/v1/satellites/25544"
  const [latitude, setLatitude] = useState("") 
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("") 
  const [map, setMap] = useState("") 

  const getCoordinates = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setLatitude (data["iss_position"]["latitude"])
    setLongitude (data["iss_position"]["longitude"])

    const iss_long = data["iss_position"]["longitude"]
    const iss_lat = data["iss_position"]["latitude"]
    setUrlMap(`https://www.google.com/maps?q=${iss_lat},${iss_long}&z=4&output=embed`)
    
  }

  useEffect ( () => {
    getCoordinates()
  }, [])

  return (
    <div className="hero">
      <h1>ISA Position</h1>
      <div className="coordinates">
        <div className="lat">
          <h2>Latitude</h2>
          <p>{latitude}</p>
        </div>

        <div className="long">
          <h2>Longitude</h2>
          <p>{longitude}</p>
        </div>
      </div>
      {urlMap && (
  <iframe
    src={urlMap}
    width="50%"
    height="450"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="ISS Map"
  ></iframe>
)}
    </div>

  )
}

export default App
