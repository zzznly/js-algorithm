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

    if (getDivision(reverse).length === 2) answer.push(reverse);
  }

  return answer;
}

// 강의 풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    //  이미 제곱근 이전에 약수가 없다면 이후에도 약수 있을 가능성 없음
    if (num % i === 0) return false;
  }
  return true;
}

function solution2(arr) {
  let answer = [];

  for (let x of arr) {
    let res = 0;

    while (x) {
      let t = x % 10;
      res = res * 10 + t; // 숫자 뒤집기
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

// 출력
console.log(solution1([32, 55, 62, 20, 250, 370, 200, 30, 100])); // 23 2 73 2 3
console.log(solution2([32, 55, 62, 20, 250, 370, 200, 30, 100])); // 23 2 73 2 3
