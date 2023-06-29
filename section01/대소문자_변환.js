// Q. 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력

// 나의 풀이 1:
function solution1(str) {
  return [...str]
    .map(v => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
}

// 나의 풀이 2:
function solution2(str) {
  let answer = "";
  for (let char of str) {
    if (char === char.toUpperCase()) answer += char.toLowerCase();
    else answer += char.toUpperCase();
  }
  return answer;
}

// 출력:
console.log(solution1("StuDY")); // sTUdy
console.log(solution2("StuDY")); // sTUdy
