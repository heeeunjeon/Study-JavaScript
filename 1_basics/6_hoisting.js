/**
 * Hoisting
 */
console.log('hello');
console.log('world');
console.log("--------------------");

// console.log(name); // undefined
// var name = '코드팩토리';
// console.log(name); // 코드팩토리

// var name;
// console.log(name); // undefined
// name ='코드팩토리';
// console.log(name); // 코드팩토리

console.log("--------------------");

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let과 const은 Hoisting이 된다.
 * 하지만 var와 달리 호이스팅 시 undefined로 변수를 초기화 하지는 않는다.
 * 따라서 변수의 초기화를 수행하기 전에 읽는 코드가 먼저 나타나면 예외가 발생한다.
 */
console.log(yuJin);
// let yuJin = '안유진'; 
// const yuJin = '안유진'; 
var yuJin = '안유진';
// var 같은 경우는 호이스팅이 되지 못한다. => undefined로 변수를 초기화함

console.log("--------------------");

/**
 * 자바스크립트는 함수의 코드를 실행하기 전에 함수 선언에 대한 메모리부터 할당된다.
 * 덕분에 함수를 호출하는 코드를 함수 선언보다 앞서 배치할 수 있는 것.
 */
function catName(name) {
	console.log("제 고양이의 이름은 " + name + "입니다");
}

catName("후추");
console.log("--------------------");



/**
 * JS는 초기화를 제외한 선언만 호이스팅 한다.
 * 변수를 먼저 사용하고 그 후에 선언 및 초기화가 나타나면,
 * 사용자 시점의 변수는 기본 초기화 상태(var 선언 시 undifined, 그 이외에는 초기화 하지 않음)이다.
 */
console.log(num);
var num; // 선언
num = 6; // 초기화(할당)
// => 결과는 undifined


/** 
 * 반면 선언 없이 초기화만 존재한다면
 * 호이스팅도 없고 변수를 읽으려는 시도에서는 ReferenceError가 발생한다.
*/
console.log(num); // 이것만 호출하면 ReferenceError
num = 6; // 초기화
// => 결과는 6
console.log("--------------------");


/**
 * 예제1
 * y만 호이스팅 대상
 */
x = 1; // x 초기화. x를 선언하지 않는 경우 선언. 그러나 명령문에 var가 없으므로 호이스팅이 발생하지 않음
console.log(x + " " + y); 
var y =2; // y를 선언하고 초기화
// => 결과는 1 undifined
// => 자바스크립트는 선언만 호이스팅하므로, 윗줄의 y undifined(var라서)

// 만약 y가 const나 let 이라면?
// let y =2; // ReferenceError
// const y = 2; // ReferenceError


/**
 * 예제2
 * 호이스팅은 없지만 변수 초기화는 (아직 하지 않은 경우) 
 * 변수 선언까지 병행하므로 변수를 사용할 수 있음
 */
a = '크랜'; // a 초기화
b = '베리'; // b 초기화

console.log(a + "" + b); 
// => 결과 : 크랜베리