function solution(numbers) {
  let answer = 0;

  for (let i = 9; i > 0; i--) {
    if (!numbers.includes(i))
      //numbers에 포함을 하고 있는지 확인을 한다.
      answer += i;
  }

  return answer;
}
