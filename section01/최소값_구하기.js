// Q. 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(...args) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // 최소값 구할때 -> 안정적인 가장 큰 정수값을 할당해주는것도 좋다! (900719925474991...)

  for (let i = 0; i < args.length; i++) {
    if (args[i] < min) min = args[i];
  }
  answer = min;
  return answer;
}

// 다른 풀이 *
// function solution(...args) {
//     return Math.min(...args);
// }

// 출력
console.log(solution(5, 3, 7, 11, 2, 15, 17)); // 2
