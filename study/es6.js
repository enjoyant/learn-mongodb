//admin 페이지 접근여부
const user = {
  isLoggedIn: true,
  role: "admin", //다른값으로 user, guest
};

//And연산 테스트
// if (user.isLoggedIn && user.role === "admin") {
//   console.log("관리자 페이지 접근가능");
// } else {
//   console.log("관리자 페이지 접근불가");
// }

//Or연산 테스트
// user.isLoggedIn = false;
// if (user.isLoggedIn || user.role === "admin") {
//   console.log("메인 페이지 접근가능");
// } else {
//   console.log("메인 페이지 접근불가");
// }

//논리연산 응용
// const canAccess = user.isLoggedIn || "접근 불가";
// console.log("🚀 ~ canAccess:", canAccess);

//기본 파라미터
// const SayHello = (pUserName = "꽁이") => {
//   console.log(`안녕하세요. ${pUserName}님`);
// };

// SayHello();
// SayHello("양이");

//구조 분해 할당
const names = ["alice", "bob", "david"];
// const [first, second] = names;
// console.log("🚀 ~ first:", first);
// console.log("🚀 ~ second:", second);

// const person = {
//   name: "이승한",
//   mbti: "ISTJ",
// };

//키값을 할당하여 데이터 가져옴
// const { name, mbti } = person;

// spread syntax
// 배열이나 객체를 개별요소로 분해하거나 결합할때 사요
// const copyNames = ["steve", ...names, "kelly"];
// console.log("🚀 ~ copyNames:", copyNames);

const todoItem = {
  text: "mongoDB 학습",
  isComplete: false,
};

//추가대상에 이미 존재하는 키값이면 값만 변경함
const copyTodoItem = { ...todoItem, decription: "DB공부", isComplete: true };
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
