/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let StringAge = age.toString();
console.log(typeof StringAge, StringAge); // string 32

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 어느 한쪽으로 타입을 변경해야하니까 2를 그냥 string으로 변환해버림, 982 출력
console.log('98' + '2'); // 982
console.log('98' * 2); // 196, string에는 곱한다는 개념이 없어서 number로 변환해버림
console.log('98'- 2); // 96, string에는 빼기의 개념이 없어서 number로 변환해버림

console.log('-------------------');

/**
 * 명시적 변환 더 배우기 
 */
console.log(typeof (99).toString(), (99).toString()); // stirng 99
console.log(typeof (true).toString(), (true).toString()); // string true 
console.log(typeof (Infinity).toString(), (Infinity).toString()); // string Infinity

// 숫자 타입으로 변환
// 1) 정수 변환 parseInt()
console.log(typeof parseInt('0'), parseInt('0')); // number 0

// 2) 소수 변환 parseFloat()
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0

console.log(typeof +'1', +'1'); // number 1

console.log('-------------------');


/**
 * Boolean 타입으로의 변환
 */
console.log(!'x'); // false
console.log(!!'x'); // 원래 값을 부정해서 true

console.log(!!''); // false

// => 자바스크립트는 String 값 안에 값이 들어있으면 Boolean 기준으로 true다.
// => String 인데 아무값도 없으면 false
// => 값이 있냐, 없냐로 Boolean의 true, false를 정한다.

console.log(!!0); // false
console.log(!!'0'); // true, String에 글자가 들어있으면 무조건 true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false


console.log('-------------------');

// object
console.log(!!{}); // object는 무조건 true
console.log(!![]); // Array도 무조건 true

/**
 * 정리
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 4) null
 * 5) undifined
 * 
 * => 모두 false를 반환
 */