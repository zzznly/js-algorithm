// Q. 소문자를 대문자로 통일해 문자열 출력

// 나의 풀이 1:
function solution1(str) {
  return [...str]
    .map(v => (v === v.toLowerCase() ? v.toUpperCase() : v))
    .join("");
}

// 나의 풀이 2:
function solution2(str) {
  return [...str].map(v => v.toUpperCase()).join("");
}

// 강의 풀이 :
function solution3(str) {
  let string = "";
  for (let char of str) {
    if (char === char.toLowerCase()) string += char.toUpperCase();
    else string += char;
  }
  return string;
}

// 출력:
console.log(solution1("ItsTimeToStudy")); // ITSTIMETODTUDY
console.log(solution2("ItsTimeToStudy")); // ITSTIMETODTUDY
console.log(solution3("ItsTimeToStudy")); // ITSTIMETODTUDY
