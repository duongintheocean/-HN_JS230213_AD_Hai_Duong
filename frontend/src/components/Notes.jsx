import React from "react";

export default function Notes(props) {
  console.log(props, "why ");
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/api/v1/notes/${id}`, { method: "DELETE" });
  };
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "40px auto",
          border: "1px solid black",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {props.atr?.content}
        <button onClick={() => handleDelete(props.atr.notesId)}>-</button>
      </div>
    </div>
  );
}
