/** Q. 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성 */

// 풀이
function solution1(str) {
  // 입력된 문자열을 소문자로 변환
  str = str.toLowerCase();
  let answer = "YES";
  let len = str.length;

  // 앞에서 읽을 때와 뒤에서 읽을 때가 같은지 비교
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      answer = "NO";
    }
  }

  return answer;
}

// 출력
console.log(solution1("gooG")); // YES
