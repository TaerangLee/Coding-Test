## x 사이의 개수

![x 사이의 개수](https://cdn.discordapp.com/attachments/956190154454876183/1106115611358138379/image.png)

- ### 내가 푼 코드

```js
function solution(myString) {
  let answer = [];
  let cnt = 0;

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] == "x") {
      answer.push(cnt);
      cnt = 0;
    } else {
      cnt += 1;
    }
    if (i === myString.length - 1) {
      answer.push(cnt);
    }
  }
  return answer;
}
```

- ### 다른 사람이 푼 코드

```js
function solution(myString) {
  return myString.split("x").map((v) => v.length);
}
```
