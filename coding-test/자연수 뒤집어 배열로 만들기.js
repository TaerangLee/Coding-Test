function solution(n) {
    let answer = [];
    const order = String(n);
    let num = n;
    let result = 0;
  
    for(let i = order.length - 1; i >= 0; i--){ 
        
        result = num % 10;
        answer.push(result);
        num = parseInt(num / 10); //그냥 num / 10 을 할 경우에는 정수인 부분이 아니라 소수점도 변수에 들어가기 때문에
        //parseInt를 사용하여서 정수만 사용을 한다.
        
    }
        
    return answer;
}