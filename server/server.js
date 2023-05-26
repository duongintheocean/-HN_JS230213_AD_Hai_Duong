const express = require("express");
const server = express();
const conection = require("./conection");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan());
server.get("/api/v1/notes", (req, res) => {
  console.log("does it run into get");
  conection.query("select * from notes", (error, result) => {
    if (error) {
      res.json({ error });
    } else {
      res.json(result);
    }
  });
});
server.post("/api/v1/notes", (req, res) => {
  console.log("does it run into it ,line 18");
  const value = [req.body.content];
  console.log(value, "<-- value");
  conection.query(
    "insert into notes(content)value(?)",
    value,
    (error, result) => {
      if (error) {
        res.json({ error });
      } else {
        res.json(result);
      }
    }
  );
});
server.delete("/api/v1/notes/:id", checkNotesExit, (req, res) => {
  const id = req.params.id;
  conection.query(`delete from notes where notesId=${id}`, (error, result) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(result);
    }
  });
});
function checkNotesExit(req, res, next) {
  conection.query("select * from notes", (error, result) => {
    if (error) {
      res.json({ error });
    } else {
      const id = req.params.id;
      const listNote = result;
      const note = listNote.find((e) => {
        return e.notesId == id;
      });
      console.log(id);
      if (!note) {
        res.json({
          message: "this note does'nt exits",
        });
      } else {
        next();
      }
    }
  });
}
server.listen(4000, () => {
  console.log("http://localhost:4000");
});
