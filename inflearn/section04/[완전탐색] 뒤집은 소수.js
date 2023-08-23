/*
Q. 뒤집은 소수
    N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
    예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
    단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
*/

// 나의 풀이
function getDivision(num) {
  let res = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }

  return res;
}

function solution1(arr) {
  let answer = [];

  for (let x of arr) {
    let reverse = Number(x.toString().split("").reverse().join(""));

    if (getDivision(reverse)[1] === reverse) answer.push(reverse);
  }

  return answer;
}

// 출력
console.log(solution1([32, 55, 62, 20, 250, 370, 200, 30, 100])); // 23 2 73 2 3
