// app.get("/movies", (req, res) => {
//   const page = req.query.page || 1;
//   // console.log("page :", page);

//   const cloneMovies = [...movies];
//   const lastPage = Math.ceil(movies.length / 10);
//   const startIndex = (page - 1) * 10;
//   const paginationMovies = cloneMovies.splice(startIndex, 10);

//   const moviesList = paginationMovies.map((movie) => ({
//     ...movie,
//     name: users.find((user) => user.id === movie.user_id).name,
//   }));

//   moviesList.sort((a, b) => {
//     const prevTimestamp = new Date(a.created_at).getTime();
//     const curTimestamp = new Date(b.created_at).getTime();
//     // console.log(prevTimestamp, " / ", curTimestamp);
//     return curTimestamp - prevTimestamp;
//   });

//   // const startIndex = {(page-1)* 10}+1;
//   // 원래는 페이지 번호가 1부터 시작하기 때문에 1을 더해주어야 함
//   // console.log(startIndex);
//   // console.log("lastpage : ", lastPage);

//   res.send({
//     pageInfo: {
//       lastPage,
//     },
//     movies: paginationMovies,
//     movies: moviesList,
//   });
// });
