// Q. 격자판 최대합
// N*N 의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력

// ** 강의 풀이:
function solution1(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);

  // 행의 합과 열의 합 비교
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }
    answer = Math.max(answer, sum1, sum2);
  }

  // 대각선의 합끼리 비교
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

// 출력
console.log(
  solution1([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); // 155
