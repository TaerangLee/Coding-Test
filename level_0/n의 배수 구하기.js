function solution(n, numlist) {
  let answer = [];
  answer = numlist;

  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n != 0) {
      numlist.splice(i, 1);
      i--;
    }
  }

  return answer;
}
