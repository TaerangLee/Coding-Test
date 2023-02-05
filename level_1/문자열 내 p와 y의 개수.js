function solution(s){
    let answer = true;
    let Ycnt = 0;
    let Pcnt = 0;
    
    for(let i =0; i<s.length; i++){
        if(s[i]=='y' || s[i]=='Y'){
            Ycnt += 1;
        }
         if(s[i]=='p' || s[i]=='P'){
            Pcnt += 1;
        }
    }
    
    if(Ycnt == Pcnt){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}