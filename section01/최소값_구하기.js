// Q. 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(...args) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) min = args[i];
  }
  answer = min;
  return answer;

  // 다른 풀이 *
  // return Math.min(...args);
}

console.log(solution(5, 3, 7, 11, 2, 15, 17)); // 2
