// Q. N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력

// 나의 풀이 1:
function solution1(n, strArr) {
  return strArr.sort((a, b) => b.length - a.length)[0];
}

// 나의 풀이 2:
function solution2(n, strArr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let str of strArr) {
    if (str.length > max) max = str;
  }
  return max;
}

console.log(solution1(5, ["teacher", "time", "student", "beautiful", "good"])); // beautiful
console.log(solution1(5, ["teacher", "time", "student", "beautiful", "good"])); // beautiful
