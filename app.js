const express = require("express");
const cookieParser = require("cookie-parser");
const port = 9000;

const app = express();
app.use(express.json());
app.use(cookieParser());

// map, filter, find

app.get("/", (req, res) => {
  res.send("/ 요청 했음");
});

app.post("/login", (req, res) => {
  const { userId, password } = req.body;
  console.log("id", userId);
  console.log("password", password);
  res.send("로그인");
});

app.post("/signup", (req, res) => {
  const { userId, password, nickname } = req.body;
  console.log("id", userId);
  console.log("password", password);
  console.log("nickname", nickname);
  res.send("회원가입");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("회원정보 가져오기");
});

app.get("/search", (req, res) => {
  // 게시글 리스트 조회하는데 가져와야하는 것 : 조회 키워드
  // query 필요
  const { keyword } = req.query;
  console.log(keyword);
  res.send("게시글 리스트 가져오기");
});

app.get("/posts/:postId", (req, res) => {
  // 게시글 조회하는데 가져와야하는 것 : 게시글 번호
  // path param postId 필요
  const { postId } = req.params;
  console.log(postId);
  res.send("선택 게시글 상세정보");
});

app.post("/posts/write", (req, res) => {
  // 게시글을 작성하는데 가져와야하는 것 : 게시글 제목, 게시글 내용
  // body 데이터 필요
  const { title, content } = req.body;
  console.log("title", title);
  console.log("content", content);
  res.send("게시글 작성");
});

app.post("/posts/:postId/edit", (req, res) => {
  // 게시글을 수정하는데 가져와야하는 것 : 게시글 번호, 게시글 제목, 게시글 내용
  // body, path param
  const { postId } = req.params;
  const { title, content } = req.body;
  console.log(postId);
  console.log("title", title);
  console.log("content", content);
  res.send("게시글 수정");
});

app.post("/posts/:postId/remove", (req, res) => {
  // 게시글을 삭제하는데 가져와야하는 것 : 게시글 번호
  // path param
  const { postId } = req.params;
  console.log(postId);
  res.send("게시글 삭제");
});

app.listen(port, () => {
  console.log(port, "서버 실행");
});
