import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const nights = (a, b) => {
    const date1 = moment(a);
    const date2 = moment(b);
    return date2.diff(date1, "days");
  };
  const [select, setSelect] = useState(false);
  return (
    <tr
      onClick={() => setSelect(!select)}
      className={select ? "select-color" : ""}
    >
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
      <td>{nights(props.data.checkInDate, props.data.checkOutDate)}</td>
    </tr>
  );
};

export default Row;
