/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let 
 * 3) const
 */

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);


let ive = '아이브';
console.log(ive);

/**
 * let 과 var로 선언하면 
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당 
 */
var name = '코드팩토리';
console.log(name);

let girlFriend;
console.log(girlFriend); // 정의되지 않은 값 undefined 출력 
// 할당을 안하면 자동으로 undefined 할당됨 

// const girlFriend2;

/**
 * const와 var, let의 차이점 
 * 1) const는 값을 바꿀 수 없기때문에 undefined로 초기값을 할당 할 수 없다. 실행 X
 * 2) var와 let은 값을 바꿀 수 있기 때문에 값을 부여하지 않아도 실행 가능
 */
