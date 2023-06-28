// Q. 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램 작성

// 나의 풀이 1:
function solution1(str, x) {
  return [...str].filter(v => v === x).length;
}

// 나의 풀이 2:
function solution2(str, x) {
  let count = 0;
  for (let char of str) {
    if (char === x) count++;
  }
  return count;
}

// 강의 풀이 :
function solution3(str, x) {
  return str.split(x).length - 1;
}

// 출력:
console.log(solution1("COMPUTERPROGRAMMING", "R")); // 3
console.log(solution2("COMPUTERPROGRAMMING", "R")); // 3
console.log(solution3("COMPUTERPROGRAMMINGR", "R")); // 4
