// Q. 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력. 제거된 문자열의 각 문자는 원래 문자열의 순서 유지

// 나의 풀이 1:
function solution1(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) answer += str[i];
  }
  return answer;
}

// 나의 풀이 2:
function solution2(str) {
  const set = new Set([...str]);
  return [...set].join("");
}

// ** 강의 풀이:
// indexOf 메서드는 특정값이 처음으로 나타나는 인덱스를 리턴한다!
function solution3(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

// 출력:
console.log(solution1("ksekkset")); // kset
console.log(solution2("ksekkset")); // kset
console.log(solution3("ksekkset")); // kset
