const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("/ 요청 했음");
});

app.post("/host", (req, res) => {
  res.send("/host 요청 했음");
});

app.listen(port, () => {
  console.log(port, "서버 실행");
});
