/*
Q. 가장 짧은 문자 거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
*/

function solution1(s, t) {
  let answer = [];
  let d = 1000;

  for (let x of s) {
    if (x === t) {
      d = 0;
    } else {
      d++;
    }
    answer.push(d);
  }
  d = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      d = 0;
    } else {
      d++;
      answer[i] = Math.min(answer[i], d);
    }
  }

  return answer;
}

console.log(solution1("teachermode", "e")); // 1 0 1 2 1 0 1 2 2 1 0
