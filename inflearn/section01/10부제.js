/**
 * Q. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
 * 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다
 * 날짜의 일의 자리 숫자와 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력
 */

// 나의 풀이:
function solution(dayNum, carArr) {
  return carArr.filter(v => (v + "").endsWith(dayNum + "")).length;
}

// 강의 풀이:
// function solution(day, carArr) {
//     let answer = 0;
//     for (let car of carArr) {
//         if (car % 10 === day) answer++;
//     }
//     return answer;
// }

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])); // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])); // 3
