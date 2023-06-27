// Q. 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

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
