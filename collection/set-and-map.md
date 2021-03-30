---
title: Set & Map
category: collection
tags:
  - javascript
--- 

## Set
Set은 Array와 비슷하지만 값이 중복될 수 없다. 
```javascript
new Set([iterable]);
```
- `iterable`: 반복 가능한 객체가 전달된 경우, 그 요소는 모두 새로운 `Set`에 추가된다.  
- 중복이 되지 않는 다는 점에서 [python의 set](https://wikidocs.net/1015)이 생각난다.  
  - 어렸을 때 수학시간에 배운 [집합](https://ko.wikipedia.org/wiki/%EC%A7%91%ED%95%A9)또한 같은 원소가 여러 개 있을 수 없다는 사실! 이름이 괜히 같은게 아니었다. 😄

### Array와 함께 
- [프로그래머스 코딩문제 풀이](https://programmers.co.kr/learn/courses/30/lessons/68644/solution_groups?language=javascript&type=all)에서 처음 알게되었고 유용하게 쓰일 수 있다는 것을 느꼈다. 
```javascript
var myArray = ['value1', 'value2', 'value3'];

// Array를 Set으로 변환하기 위해서는 정규 Set 생성자 사용
var mySet = new Set(myArray);

mySet.has('value1'); // true 반환

// set을 Array로 변환하기 위해 전개 연산자 사용함.
console.log([...mySet]); // myArray와 정확히 같은 배열을 보여줌
```

## Map

## 참고자료 
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [https://www.zerocho.com/category/ECMAScript/post/576cad515eb04d4c1aa35077](https://www.zerocho.com/category/ECMAScript/post/576cad515eb04d4c1aa35077)
