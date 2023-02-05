function solution(x, n) {
    let answer = [];
    let result = 0;
    let cnt = 1;
    
    
    for(let i =0; i < n; i++){
        result = x * cnt;
        answer.push(result); 
        cnt++;
        
    }
    
    return answer;
    
}