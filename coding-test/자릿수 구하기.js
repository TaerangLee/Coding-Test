function solution(n) {
    let answer = 0;
    let num = String(n); //호출 시킨 n의 값을 String으로 전환함.

    for (let i = 0; i < num.length; i++) {
        answer += parseInt(num[i]) //문자열에 있는 숫자를 int형으로 변환 시킴
    }

    return answer;
}