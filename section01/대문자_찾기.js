// Q. 한개의 문자열 입력받아 해당 문자열에 알파벳 대문자가 몇개인지 출력

function solution1(str) {
  let count = 0;
  for (let char of str) {
    if (char === char.toUpperCase()) {
      count++;
    }
  }
  return count;
}

// 출력:
console.log(solution1("KoreaTimeGood")); // 3
