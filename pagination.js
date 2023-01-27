//페이지네이션 과제 참고
//https://velog.io/@eunoia/JS%EB%A1%9C-Pagination-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

const total = Math.ceil(movies.length / 10);

function total(page, total) {
  if (page < 3) return [1, 2, 3, "...", total];
  if (page < total - 2) return ["...", page - 1, page, "...", total];
  return [1, "...", total - 2, total - 1, total];
}

for (let i = 1; i <= 10; i++) console.log(i, ":", ...getPagination(i, 10));
