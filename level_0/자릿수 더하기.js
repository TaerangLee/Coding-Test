function solution(n) {
    
    let answer = 0; 
    let a = String(n); //a의 값을 String으로 저장함.
    for(let i=0; i<a.length; i++) {
      answer += parseInt(a[i]);
    }
    return answer;
}