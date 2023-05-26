import React, { useEffect, useState } from "react";
import Notes from "./Notes";
export default function NoteContainer() {
  const [listNotes, setListNotes] = useState([]);
  const handleTakedata = () => {
    fetch("http://localhost:4000/api/v1/notes", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setListNotes(data);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleTakedata();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        padding: "20px",
      }}
      s
    >
      {listNotes.map((e) => {
        console.log(e, "this is e");
        return <Notes atr={e} />;
      })}
    </div>
  );
}
