import React, { useState } from "react";

export default function Input() {
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      fetch("http://localhost:4000/api/v1/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
    }
  };
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
        margin: "40px auto",
        border: "1px solid black",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <label htmlfor="input">title</label>
      <div style={{ width: "100%" }}>
        <textarea
          id="input"
          type="text"
          style={{ width: "98%", border: "none", outline: "none" }}
          onChange={(e) => {
            setContent(e.target.value);
            console.log(e.target.value);
          }}
          onKeyDown={handleSubmit}
        />
      </div>
    </div>
  );
}
