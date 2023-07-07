## n보다 커질 때까지 더하기

![n보다 커질 때까지 더하기](https://media.discordapp.net/attachments/969108198588035113/1102493020974235648/image.png?width=534&height=650)

```js
function solution(numbers, n) {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      return answer;
    }
  }

  return answer;
}
```

- ### forEach문을 사용한 방법!

```js

```
