// Q. N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력. 출력하는 문자열은 원래의 입력순서를 유지

// 나의 풀이 1:
function solution1(strArr) {
  const set = new Set(strArr);
  return [...set];
}

// 나의 풀이 2:
function solution2(strArr) {
  let answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) === i) answer.push(strArr[i]);
  }

  return answer;
}

// 강의 풀이:
function solution3(strArr) {
  return strArr.filter((v, i) => strArr.indexOf(v) === i);
}

function solution4(strArr) {
  let answer;
  answer = strArr.filter((v, i) => {
    if (strArr.indexOf(v) === i) return true;
  });

  return answer;
}

// 출력:
console.log(solution1(["good", "time", "good", "time", "student"])); // good time student
console.log(solution2(["good", "time", "good", "time", "student"])); // good time student
console.log(solution3(["good", "time", "good", "time", "student"])); // good time student
console.log(solution4(["good", "time", "good", "time", "student"])); // good time student
