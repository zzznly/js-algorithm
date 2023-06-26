function solution(a, b, c) {
  let answer;

  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;

  // 다른풀이:
  // return Math.min(a, b, c);
}

console.log(solution(6, 5, 11)); // 5
