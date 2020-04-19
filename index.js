let express = require("express");
let app = express();
let PORT = 3000;
let persons = [
  {
    id: 0,
    name: "Pasut Srijaroen",
    age: 21,
    province: "krabi",
  },
  {
    id: 1,
    name: "POOH",
    age: 21,
    province: "Surat",
  },
];

app.get("/", (req, res) => {
  console.log(persons);
  res.json(persons);
});

app.get("/crash", (req, res) => {
  console.log("Crash!!!!");
  res.send("Crashed");
  process.exit(1);
});
app.listen(PORT, () => console.log("server is running", PORT));