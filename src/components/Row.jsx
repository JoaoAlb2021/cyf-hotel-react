import React, { useState } from "react";

const Row = props => {
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
      <td>{props.diff}</td>
      <td>
        <button onClick={() => props.setSelectedId(props.data.id)}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default Row;
