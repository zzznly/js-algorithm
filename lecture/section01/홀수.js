// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

// 내 풀이:
function solution(...args) {
  const oddArr = args.filter(v => v % 2);
  const oddArrSum = oddArr.reduce((acc, cur) => acc + cur, 0);
  const oddArrMin = Math.min(...oddArr);

  return [oddArrSum, oddArrMin];
}

console.log(solution(12, 77, 38, 41, 53, 92, 85)); // [ 256, 41 ]

// 강의 풀이:
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let el of arr) {
    if (el % 2) {
      sum += el;
      if (el < min) min = el;
    }
  }
  answer.push(sum, min);

  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])); // [ 256, 41 ]
