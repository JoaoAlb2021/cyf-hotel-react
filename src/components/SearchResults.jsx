import React from "react";

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
        </tr>
      </thead>
      <tbody>
        {props.result.map(data => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
