const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
console.log(notes);

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.json(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
