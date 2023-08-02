/*
    Q. 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
    만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
    추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
*/

// 나의 풀이:
function solution1(str) {
  let answer;

  answer = +[...str].filter(v => !isNaN(+v)).join("");

  return answer;
}

// 강의 풀이 1:
function solution2(str) {
  let answer = 0;

  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

// 강의 풀이 2:
function solution3(str) {
  let answer = 0;

  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x); // ***
    // 2 = 0 * 10 + 2
    // 20 = 2 * 10 + 2
    // 208 = 20 * 10 + 8
  }

  return parseInt(answer);
}

// 출력:
console.log(solution1("g0en2T0s8eSoft")); // 208
console.log(solution2("g0en2T0s8eSoft")); // 208
console.log(solution3("g0en2T0s8eSoft")); // 208
