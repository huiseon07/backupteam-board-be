//영화를 볼 수 있는 웹 페이지

const express = require("express");
// const axios = require("axios");
const cors = require("cors");
const port = 9000;

const movies = require("./src/models/movies");
const users = require("./src/models/users");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

function getMovieByPage() {}

// movie 관련 내용 중 이름까지 포함해서 출력
// side effect (실행 중에 어떤 객체를 접근해서 변화가 일어나는 행위)
// 구조분해할당

// [영화 제목 리스트]
// 1. 영화 전체 목록을 순회한다.
// 2. 순회 하면서 영화 제목 작성자 (user_id) 에 해당하는 user를 users 에서 검색한다
// 3. 2번에 일치하는 user 의 name 만 가져온다
// 4. 가져온 name을 순회중 movie 의 name property 에 추가한다.

app.get("/movies", (req, res) => {
  const total = Math.ceil(movies.length / 10);

  function getPagination(page, total) {
    if (page < 3) return [1, 2, 3, "...", total];
    if (page < total - 2) return ["...", page - 1, page, "...", total];
    return [1, "...", total - 2, total - 1, total];
  }

  for (let i = 1; i <= 10; i++) console.log(i, ":", ...getPagination(i, 10));

  // const moviesList = getPagination.map((movie) => ({
  //   ...movie,
  //   name: users.find((user) => user.id === movie.user_id).name,
  // }));

  // moviesList.sort((a, b) => {
  //   const preTimestamp = new Date(a.created_at).getTime();
  //   const curTimestamp = new Date(b.created_at).getTime();
  //   // console.log(prevTimestamp, " / ", curTimestamp);
  //   return curTimestamp - preTimestamp;
  // });

  // // const startIndex = {(page-1)* 10}+1;
  // // 원래는 페이지 번호가 1부터 시작하기 때문에 1을 더해주어야 함
  // // console.log(startIndex);
  // // console.log("lastpage : ", lastPage);

  // res.send({
  //   pageInfo: {
  //     lastPage,
  //   },
  //   movies: moviesList,
  // });
});

// [영화 상세]
// 1. 사용자가 보내준 id 를 가져온다
// 2. id 에 해당하는 movie 를 가져온다
// 3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
// 4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다. (findIndex, splice 사용)
// 5. hit_count 1을 더한 객체를 반환한다.

// findIndex ) 판별 함수를 만족하는 첫 식별자 반환 , arr.findIndex(callback)
// splice ) 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용 변경
// 전개구문

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const findMovie = movies.find((movie) => movie.id === Number(id));
  const increaseReview = { ...findMovie, hit_count: findMovie.hit_count + 1 };
  const movie = movies.findIndex((movie) => movie.id === Number(id));
  movies.splice(movie, 1, increaseReview);

  return res.send(findMovie);
});

// [영화 등록]
// 1. 사용자가 등록할 영화의 정보를 주면 받아온다 from 요청 (req)
// 2. 가져온 영화정보에 id 를 부여한다.
// 3. 조회수 (hit_count) 는 기본으로 0으로 설정한다.
// 4. 작성일은 현재 시각을 넣는다.
// 5. 2,3,4 전부 부여된 영화정보를 movies 추가한다.

app.post("/movies", (req, res) => {
  const { movie_title, user_id } = req.body;
  // const id = movies.at(-1).id + 1;
  const hitCount = 0;
  const date = new Date().toISOString().substring(0, 10);
  const time = new Date().toISOString().substring(11, 19);
  // const created_at = `${date} ${time}`;

  // length 값이 0부터 시작되기 때문에 +1 진행
  movies.unshift({
    id: movies.length + 2,
    movie_title,
    hit_count: hitCount,
    user_id,
    created_at: `${date} ${time}`,
  });
  return res.send(movies);

  // const newMovie = req.body;
  // newMovie.id = movies[movies.length - 1].id + 1;
  // newMovie.hit_count = 0;
  // newMovie.created_at = new Data().toISOString();
  // movies.push(newMovie);
  // res.send(newMovie);
});

app.listen(port, () => {
  console.log(port, "서버 실행");
});
