// * 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 더 크면 삼각형을 만들 수 있다

function solution(a, b, c) {
  let answer = "YES",
    max;

  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";

  console.log(max);

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
