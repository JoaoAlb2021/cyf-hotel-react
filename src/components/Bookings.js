import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomProfile from "./CustomProfile.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_URL = "https://cyf-react.glitch.me/delayed";
  // const API_URL = "https://cyf-react.glitch.me/error"

  const search = searchVal => {
    if (searchVal.length === 0) {
      setBookings(initialBookings);
      return;
    }
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchVal.length === 0 ? initialBookings : filteredBookings);
  };

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        setBookings(json);
        setInitialBookings(json);
        setLoading(false);
      });
    // .then(json => {
    //   setError(json.error)
    //   setLoading(false)
    // })
  }, []);

  return loading ? (
    <h1>CARGANDO...</h1>
  ) : (
    <div className="App-content">
      <div className="container">
        {/* <h2 className="errorMessage">{error}</h2> */}
        <Search search={search} />
        <SearchResults result={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
