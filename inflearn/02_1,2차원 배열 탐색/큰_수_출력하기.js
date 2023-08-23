// Q. N개의 정수를 입력받아 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램 작성.
// 단, 첫번째 수는 무조건 출력한다

// 나의 풀이 1:
function solution1(arr) {
  return [arr[0], ...arr.filter((_, i) => arr[i] > arr[i - 1])];
}

// 나의 풀이 2:
function solution2(arr) {
  let answer = [arr[0]];
  //   answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

// 출력:
console.log(solution1([7, 3, 9, 5, 6, 12])); // 7 9 6 12
console.log(solution2([7, 3, 9, 5, 6, 12])); // 7 9 6 12
