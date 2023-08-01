// Q. 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력. 단, 단어의 길이가 짝수이면 가운데 문자 2개 출력

// 나의 풀이 1:
function solution1(str) {
  return str.length % 2
    ? str[~~(str.length / 2)]
    : str.substring(str.length / 2 - 1, str.length / 2 + 1);
}

// 강의 풀이:
function solution2(str) {
  let answer;
  let mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer = str.substring(mid, mid + 1);
  else answer = str.substring(mid - 1, mid + 1);

  return answer;
}

// 츨략:
console.log(solution1("study")); // u
console.log(solution1("good")); // oo

console.log(solution2("study")); // u
console.log(solution2("good")); // oo
