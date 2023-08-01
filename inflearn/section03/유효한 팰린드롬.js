/*
Q.  앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
*/

// 풀이 1:
function solution1(str) {
  let answer = "YES";

  str = str.toLowerCase().replace(/[^a-z]/g, ""); // 알파벳 소문자가 아닌것들 찾아서 빈문자로 교체
  console.log(str);

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) answer = "NO";
  }

  return answer;
}

// 풀이 2:
/*
Q.  앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
*/

function solution2(str) {
  let answer = "YES";

  str = str.toLowerCase().replace(/[^a-z]/g, ""); // 알파벳 소문자가 아닌것들 찾아서 빈문자로 교체
  console.log(str);

  if (str.split("").reverse().join("") !== str) answer = "NO";

  return answer;
}

console.log(solution1("found7, time: study; Yduts; emit, 7Dnuof")); // YES
console.log(solution2("found7, time: study; Yduts; emit, 7Dnuof")); // YES

// 출력
console.log(solution1("found7, time: study; Yduts; emit, 7Dnuof")); // YES
