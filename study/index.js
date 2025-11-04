const names = ["alice", "bob", "david"];

// 자주 사용되는 배열 함수

// 1. map : 기존 배열의 요소들을 조작하여 새로운 배열을 리턴
const upperNames = names.map((tmpName) => tmpName.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames); //Ctrl + Alt + L

// 2. filter : 특정조건을 만족하는 요소들만 리턴..없으면 빈배열 [] 리턴
const filterNames = names.filter((tmpName) => tmpName.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

// 3. find : 특정조건을 만족하는 첫번째 요소 한개만 리턴.. 없으면 undefinded 리턴
const findName = names.find((tmpName) => tmpName.length >= 4);
console.log("🚀 ~ findName:", findName);

// 4. some/every :
// some : 배열의 요소중에 하나라도 주어진 조건에 만족하면 true
// every: 배열의 요소가 모두 주어진 조건에 만족해야 true
const isSomeName = names.some((tmpName) => tmpName.length >= 4);
console.log("🚀 ~ isSomeName:", isSomeName);
const isEveryName = names.every((tmpName) => tmpName.length >= 4);
console.log("🚀 ~ isEveryName:", isEveryName);
