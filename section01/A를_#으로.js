// Q. 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력

// 나의 풀이 1:
function solution1(word) {
  return word.replaceAll("A", "#");
}

// 나의 풀이 2:
function solution2(word) {
  let newWord = "";
  for (let char of word) {
    if (char === "A") newWord += "#";
    else {
      newWord += char;
    }
  }
  return newWord;
}

// 깅의 풀이:
function solution3(word) {
  return word.replace(/A/g, "#");
}

console.log(solution1("BANANA")); // B#N#B#
console.log(solution2("BANANA")); // B#N#B#
console.log(solution3("BANANA")); // B#N#B#
