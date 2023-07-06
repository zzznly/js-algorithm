// Q. N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력

// *** 풀이:
function solution1(arr) {
  let n = arr.length;
  let answer = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// 출력:
console.log(solution1([87, 89, 92, 100, 76])); // 4 3 2 1 5
