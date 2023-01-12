const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("/ 요청 했음");
});

app.post("/post", (req, res) => {
  res.send("/post 요청 했음");
});

app.listen(port, () => {
  console.log(port, "서버 실행");
});
