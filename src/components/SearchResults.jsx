import React, { useState } from "react";
import Row from "./Row";
import moment from "moment";
import CustomProfile from "./CustomProfile";

function SearchResults(props) {
  const [selectedId, setSelectedId] = useState();
  return (
    <div>
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
            <th scoope="col">Profle</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(data => {
            const date1 = moment(data.checkInDate);
            const date2 = moment(data.checkOutDate);
            const diff = date2.diff(date1, "days");
            return (
              <Row data={data} diff={diff} setSelectedId={setSelectedId} />
            );
          })}
        </tbody>
      </table>
      <CustomProfile id={selectedId} />
    </div>
  );
}

export default SearchResults;
