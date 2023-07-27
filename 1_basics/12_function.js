/**
 * function -> 함수
 */

/**
 * 만약 2라는 숫자에 * 10 /2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());

// 만약 2라는 숫자를 3으로 바꾸려고 한다면?
console.log((3 * 10 / 2 % 3).toString()); // 반복적인 코드가 되어버림
/**
 * 소프트웨어 개발 원칙 - 중복을 피하라
 * DRY
 * D -> Don't
 * R -> Repeat
 * y -> Yourself
 */

function calculate() {
	console.log((2 * 10 / 2 % 3).toString());
}
// calculate(); 
/**
 * 출력 결과
 * 1
 * 0
 * 1 
 */ 

// 똑같은 함수를 다시 사용하면 덮어쓰기 됨 
function calculate(num) {
	console.log((num * 10 / 2 % 3).toString());
}

calculate(4);
/**
 * 출력 결과
 * 1
 * 0
 * NaN -> 위에 calculate()를 호출해서 Not a Number가 뜬 것
 * 2
 */

/**
 * <parameter와 argument의 차이>
 *  - parameter : 무언가 입력을 받을 값, 함수에서 입력받는 값에 대한 정의
 *  - argument : 실제 입력하는 값은 argument라고 한다.
 * 
 * 위에 예시로 보자면 argument는 4고, num은 parameter이다.
 */
calculate(5); // 1 출력


/**
 * 여러개의 parameter를 사용하는 방법
 */
function multiply(x, y) { // 첫번째 받은 파라미터는 x, 두번째 받은 파라미터는 y
	console.log(x * y);
}

multiply(2, 4); // 8 출력


/**
 * defalut parameter
 */
function multiply(x, y = 10) {
	console.log(x * y);
}

multiply(2, 4); // 8 출력
multiply(2); // 20 출력, y는 값을 넣어주지 않았기 때문에 defalut 값으로 적용

console.log("-------------------------");



/**
 * 반환받기
 * return 받기
 */
function multiply(x, y) {
	return x * y; 
}

const result1 = multiply(2, 4);
console.log(result1); // 8


const result2 = multiply(4, 5);
console.log(result2); // 20

console.log("-------------------------");

/**
 * Arrow 함수
 * 화살표 함수
 */
// 1번 방법
const multiply2 = (x, y) => {
	return x * y;
}
console.log(multiply2(3,4)); // 12

// 2번 방법
const multiply3 = (x,y) => x * y;
console.log(multiply3(4,5)); // 20

// 3번 방법
const multiply4 = x => x * 2;
console.log(multiply4(2)); // 8

// 4번 방법
const multiply5 = x => y => z => `x: ${x} y : ${y} : z : ${z}`;
console.log(multiply5(2)(5)(7)); // x: 2 y : 5 : z : 7

// 4번 방법을 일반 함수로 바꿔보기
function multiply6(x) {
	return function(y) {
		return function(z) {
			return `x: ${x} y : ${y} : z : ${z}`
		}
	}
}
console.log(multiply6(3)(4)(5)); // x: 3 y : 4 : z : 5

// 이런식으로 일반함수와 섞어 써도 가능함
const multiplyTwo = function(x, y) {
	return x * y;
}

console.log(multiplyTwo(4, 5)); // 20

const multiplyThree = function(x, y, z) {
	console.log(arguments); // [Arguments] { '0': 4, '1': 5, '2': 6 }
	return x * y * z;
}
console.log("-------------------------");
console.log(multiplyThree(4, 5, 6)); // 120 


console.log("-------------------------");
const multiplyAll = function(...argument) { // 원하는 파라미터를 무한대로 받겠다라는 의미
	return Object.values(argument).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10)); // 1814400 : parameter 들을 모두 곱한 값

console.log("-------------------------");
/**
 * 즉시 실행 함수
 * immediately invoked function 
 */
(function(x, y) {
	console.log(x * y);
}) (4, 5); // 20

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // 좌측에 있는 것이 우측에 있는것과 같으냐? 라는 의미
// 결과값 : true 
// 자바스크립트에서 function은 Object임!! 