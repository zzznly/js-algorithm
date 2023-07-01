/**
 * Q.선생님이 N(1 <= N <= 1000)명의 학생을 일렬로 세웠습니다.
 * 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때,
 * 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성
 * (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
 */

// 나의 풀이 1:
function solution1(arr) {
  return [...arr.filter((_, i) => arr[i] > arr[i - 1])].length;
}

// 강의 풀이
function solution2(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) answer++;
    max = arr[i];
  }

  return answer;
}

// 출력:
console.log(solution1([130, 135, 148, 140, 145, 150, 150, 153])); // 5
console.log(solution2([130, 135, 148, 140, 145, 150, 150, 153])); // 5
