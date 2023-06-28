/** Q. 일곱 난쟁이의 키의 합이 100이다
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 * 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
 */

// * 강의 풀이:
function solution(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

// 출력 :
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])); // 20 7 23 19 10 8 13
