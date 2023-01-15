// 1. 1부터 10000까지 출력
// for (let i = 1; i <= 10000; i++) {
//   console.log(i);
// }

// 2. 1번 문제 역순으로 출력
// for (let i = 10000; i > 0; i--) {
//   console.log(i);
// }

// 추가 내용 [reverse 활용]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reverse = [];
// for (let i = 1; i <= 10000; i++) {
//   reverse.push(i);
// }

// for (let i = reverse.length - 1; i > 0; i--) {
//   console.log(i);
// }

// for (let i = arr.length - 1; i > 0; i--) {
//   reverse.push(arr[i]);
// }

// console.log(reverse);

// 3. 10000 이하까지 홀수만 찍기
// 홀수값 설정 , 나머지 값이 남아있을 경우

// console.log("10000이하의 홀수는 아래와 같습니다");

// for (let i = 1; i <= 10000; i++) {
//   if (i % 2 == 1) {
//     console.log(`${i}`);
//   }
// }

// 4. 구구단
// 1~10까지 구구단 작성, 반복문 안에서 숫자 반복문 작성

// console.log('1-10 중 원하는 수를 입력하시면, 해당 구구단이 출력됩니다')

// for (let i = 1; i <= 10; i++) {
//   console.log(사용자가 원하는 수를 집어넣을 수 있도록 작성)
//   console.log(`${i}의 곱셈은 아래와 같습니다`);
//   for (let a = 1; a <= 10; a++) {
//     console.log(`${i}` + "x" + `${a}` + "=" + i * a);
//   }
// }
