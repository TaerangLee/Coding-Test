
function solution(num, k) {

    let answer = -1;
    let a = String(num);

    for(let i=0; i<a.length; i++){
        if(a[i]==k){
            return i+1;
            break;
        }
    }   
    return answer;
}