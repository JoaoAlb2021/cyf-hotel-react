import React, { useState } from "react";
import Row from "./Row";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scoope="col">Id</th>
          <th scoope="col">Title</th>
          <th scoope="col">First Name</th>
          <th scoope="col">Surname</th>
          <th scoope="col">Email</th>
          <th scoope="col">Room Id</th>
          <th scoope="col">Check In Date</th>
          <th scoope="col">Check Out Date</th>
          <th scoope="col">Night</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(item => {
          return <Row data={item} />;
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
