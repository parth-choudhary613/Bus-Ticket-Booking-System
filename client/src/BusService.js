import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BusService.css';

function BusService() {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (departure && destination && date) {

      navigate('/BusStand'); 
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Search <b>YATRA</b></h2>
        <form onSubmit={handleSearch}>
          <div>
            <label htmlFor="departure"><b>Departure:</b></label>
            <select id="departure" name="departure" value={departure} onChange={handleDepartureChange}>
              <option value="">Select your <b>DEPARTURE</b></option>
              <option value="city1">CHANDIGARH</option>
            </select>
          </div>
          <div>
            <label htmlFor="destination"><b>Destination:</b></label>
            <select id="destination" name="destination" value={destination} onChange={handleDestinationChange}>
              <option value=""> Select your <b>DESTINATION</b></option>
              <option value="city1">JAMMU KASHMIR</option>
              <option value="city2">HIMACHAL PRADESH</option>
              <option value="city3">MAHARASHTRA</option>
              <option value="city4">RAJASTHAN</option>
              <option value="city5">JAIPUR</option>
              <option value="city6">KERELA</option>
              <option value="city7">DELHI</option>
              <option value="city8">MADHYA PRADESH</option>
              <option value="city9">UDAIPUR</option>
              <option value="city10">AGRA</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input style={{backgroundColor:"white",color:"black"}} type="date" id="date" name="date" value={date} onChange={handleDateChange} />
          </div>
          <button type="submit" disabled={!departure || !destination || !date} style={{ width: "100%", borderRadius: "5px", backgroundColor: "maroon" ,color:"white"}}>Search</button>
        </form>
      </div>
    </>
  );
}

export default BusService;
