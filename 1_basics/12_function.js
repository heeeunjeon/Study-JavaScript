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

