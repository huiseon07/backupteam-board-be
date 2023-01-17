// JS에서 제공하는 반복문 => 'for문', 'for-in문', 'for-of문', 'while문', 'do-while문'
// 반복문을 빠져나올 때 다시 시작하는 것 => break, continue 등

// map, filter, find method + foreach 문
// map ) 모든 값에 숫자를 "변경 혹은 추가"하고 싶을 때 사용
// find ) "조건에 맞는 값 중 첫번째 값"을 리턴, 배열에서 특정 값을 찾는 조건을 callback 함수를 통해 전달
// filter ) 특정 조건에 부합하는 배열의 "모든 값을 배열 형태"로 리턴
// filter는 배열 값으로 호출해주고 해당 값을 map로 배열 조작해준다.

// 1. 배열한테 사용한다 , 2. return 값이 있다
// 화살표형 함수, 삼항연산자, true:false

// object는 복사를 주의해야 함
// ...object (비구조화 할당)

// 배열 안에 객체의 값이 들어가 있음
const scores = [
  {
    name: "지영",
    score: 80,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "효원",
    score: 50,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "정기",
    score: 60,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "대신",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "택환",
    score: 94,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "호승",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "희선",
    score: 23,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "설인",
    score: 56,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
];

// 2) 배열에서 40점 미만 점수 받은 자 구하기

// 이중 반복문으로 만들어보고 싶어서 진행해봤지만 아직 미완성
// 반복문을 활용해서 전체 값 출력, 40점 미만인 사람 출력 (반복문 안에서 40점 미만인 사람을 찾아야 함)
// for (let i = 0; i < scores.length; i++) {
//   console.log(scores[i]);
//   // if (score < 40) {}
// }

// console.log("40점 미만의 점수를 받은 자는 아래와 같습니다");
// const a = scores.filter((obj) => obj.score < 40).map((obj) => obj.name);
// console.log(a);

// 3) 가장 공부를 잘했던 “지영” 의 점수 확인

// const b = scores.find((obj) => obj.name === "지영");
// console.log(b);

const movies = [
  {
    id: 1,
    movie_title: "Misérables, Les",
    hit_count: 23,
    user_id: 1,
    created_at: "2022-08-11 00:40:32",
  },
  {
    id: 3,
    movie_title: "Captain Ron",
    hit_count: 1,
    user_id: 1,
    created_at: "2022-08-14 18:09:47",
  },
  {
    id: 4,
    movie_title: "Siberia",
    hit_count: 37,
    user_id: 9,
    created_at: "2022-02-08 02:44:29",
  },
  {
    id: 5,
    movie_title: "Girl, The",
    hit_count: 82,
    user_id: 6,
    created_at: "2022-08-29 00:02:21",
  },
  {
    id: 6,
    movie_title: "44 Minutes: The North Hollywood Shoot-Out",
    hit_count: 2,
    user_id: 4,
    created_at: "2022-12-06 20:33:12",
  },
  {
    id: 7,
    movie_title: "C'mon Man",
    hit_count: 62,
    user_id: 2,
    created_at: "2022-08-18 16:43:05",
  },
  {
    id: 8,
    movie_title: "Jim Jefferies: Alcoholocaust",
    hit_count: 4,
    user_id: 8,
    created_at: "2022-07-05 16:49:03",
  },
  {
    id: 9,
    movie_title: "Grand Budapest Hotel, The",
    hit_count: 35,
    user_id: 9,
    created_at: "2022-01-10 08:22:27",
  },
  {
    id: 10,
    movie_title: "Ju-on: The Curse 2",
    hit_count: 64,
    user_id: 7,
    created_at: "2022-10-18 21:59:19",
  },
  {
    id: 11,
    movie_title: "Looney Tunes: Back in Action",
    hit_count: 17,
    user_id: 8,
    created_at: "2022-10-26 06:56:30",
  },
  {
    id: 12,
    movie_title: "Undertaker and His Pals, The",
    hit_count: 91,
    user_id: 6,
    created_at: "2022-02-22 11:23:11",
  },
  {
    id: 13,
    movie_title: "BlinkyTM",
    hit_count: 4,
    user_id: 5,
    created_at: "2022-01-08 21:02:09",
  },
  {
    id: 14,
    movie_title: "Alien Predator (Mutant II) (Falling, The)",
    hit_count: 47,
    user_id: 2,
    created_at: "2022-02-28 15:55:13",
  },
  {
    id: 15,
    movie_title: "Lorenzo's Oil",
    hit_count: 26,
    user_id: 6,
    created_at: "2022-01-21 02:46:27",
  },
  {
    id: 16,
    movie_title: "Beyond Re-Animator",
    hit_count: 88,
    user_id: 5,
    created_at: "2022-04-26 13:44:52",
  },
  {
    id: 17,
    movie_title: "Mississippi Burning",
    hit_count: 64,
    user_id: 8,
    created_at: "2022-11-14 05:23:58",
  },
  {
    id: 18,
    movie_title:
      "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)",
    hit_count: 55,
    user_id: 1,
    created_at: "2022-03-24 06:27:21",
  },
  {
    id: 19,
    movie_title: "Power and Terror: Noam Chomsky in Our Times",
    hit_count: 85,
    user_id: 3,
    created_at: "2022-04-30 19:43:43",
  },
  {
    id: 20,
    movie_title: "Grumpy Cat's Worst Christmas Ever",
    hit_count: 58,
    user_id: 9,
    created_at: "2022-12-13 00:46:27",
  },
];

const users = [
  { id: 1, name: "Trix Hannaby", email: "thannaby2r@home.pl" },
  { id: 2, name: "Mead Lantiff", email: "mlantiff2q@imageshack.us" },
  { id: 3, name: "Margette Scaplehorn", email: "mscaplehorn2p@parallels.com" },
  { id: 4, name: "Kimmy Hulks", email: "khulks2o@google.de" },
  { id: 5, name: "Margot Haward", email: "mhaward2n@census.gov" },
  { id: 6, name: "Meredith Spendlove", email: "mspendlove2m@spiegel.de" },
  { id: 7, name: "Tuck Francis", email: "tfrancis2l@msn.com" },
  { id: 8, name: "Duke Davsley", email: "ddavsley2k@pinterest.com" },
  { id: 9, name: "Jimmy Weld", email: "jweld2j@tripadvisor.com" },
  { id: 10, name: "Kaylee Jakoubec", email: "kjakoubec2i@epa.gov" },
];

// 4-1) movies에 user의 이름 포함
// map 활용

// const c = movies.map((name) => ({
//   ...name,
//   name: users.name,
// }));
// console.log(c);

// 4-2) id 가 1번에 해당하는 user 가 작성한 영화 movie_title 로만 이루어진 배열을 가져온다

// const d = movies.map((title) => title.movie_title);
// console.log(d);

// 4-3) Looney Tunes: Back in Action 라는 movie_title 을 가진 게시물의 작성자의 이메일

// const a = scores.filter((obj) => obj.score < 40).map((obj) => obj.name);
const e = movies.find(
  (obj) => obj.movie_title === "Looney Tunes: Back in Action"
);
console.log(e);
const f = users.find((obj) => obj.id === 8);
console.log(f);
// const g = users.find((obj) => obj.email === 8);
// console.log(g);

//3번과 4-1,3) 진행하지 못함
