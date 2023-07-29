/**
 * Q. A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 작성하세요
 */

// 강의 풀이 ** :
function solution1(a, b) {
  let answer = "";
  a.forEach((v, i) => {
    if (v === b[i]) answer += "D";
    else if (v === 1 && b[i] === 3) answer += "A";
    else if (v === 2 && b[i] === 1) answer += "A";
    else if (v === 3 && b[i] === 2) answer += "A";
    else answer += "B";
  });
  return answer;
}

// 출력:
console.log(solution1([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // A B A B D
