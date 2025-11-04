// function sayHello() {
//   console.log("안녕하세요");
// }

//화살표 함수... 함수명은 재정의가 필요없으므로 const선언
const sayHello = () => {
  console.log("안녕하세요");
};

const sayHello_1 = (userName) => {
  console.log(`안녕하세요, ${userName}님!`);
};

const sum_1 = (pA, pB) => {
  console.log(`${pA} + ${pB} = ${pA + pB}`);
};

const sum_2 = (pA, pB) => {
  return pA + pB;
};

//return문 생략가능
const sum_3 = (pA, pB) => pA + pB;

// sayHello();
// sayHello_1("꽁이");
// sum_1(90, 10);
// const tempResult = sum_2(90, 10);
// console.log("🚀 ~ tempResult:", tempResult)
// console.log("🚀 ~ sum_2(90, 10):", sum_2(90, 10));

//조건문
const score = 80;
// if (score >= 60) {
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

//삼항 연산자
// score >= 90 ? console.log("합격") : console.log("불합격");

//배열
const daysOfWeeks = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
// console.log(daysOfWeeks[1]);

//객체
const person = {
  name: "이승한",
  mbti: "ISTJ",
};
// console.log(person.mbti);

//배열 반복문
const names = ["alice", "bob", "david"];
names.forEach((tmpName, tmpIndex) => {
  console.log(`${tmpIndex}번째 : ${tmpName}`);
});
