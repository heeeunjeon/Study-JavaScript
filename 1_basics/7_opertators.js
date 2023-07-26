/**
 * Operators
 * 연산자
 */

/**
 * 산술 연산자
 * 1) 덧셈 
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10+10); // 20
console.log(10-0); // 10
console.log(10*10); // 100
console.log(10/10); //1
console.log(10%10); // 0
console.log(10%3); // 1
console.log("-------------------");

console.log(10*(10+10)); // 200


/**
 * 증가와 감소
 */
let number = 1;

number++;
console.log(number); // 2

number--;
console.log(number); // 1
console.log("-------------------");

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result); // 1

result = number++; 
console.log(result, number); // 1 2
// result가 먼저 1을 저장한 것임
// 그 이후에 넘버를 ++ 후위 연산으로 계산함
// 그렇기때문에 result는 1, number 는 2

result = number--;
console.log(result, number); // 2 1
// result에 전에 계산했을 당시의 number를 먼저 할당. 그렇다면 result는 2
// number는 전에 2였으나 -- 후위 연산으로 1

result = ++ number;
console.log(result, number); // 2 2
// number에 ++한 전위 연산이 먼저 실행되므로 1+1=2 number는2
// 그렇다면 result는 2가 됨

result = -- number;
console.log(result, number); // 1 1
// 미리 계산한 후에 result에 값이 할당되기 때문에
// number 2-1=1, result는 1
console.log("-------------------");


/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 * String에 실제 number 값에 될 수 있는 값이 있다면 number로 변환할 수 있다.
 */
let sample = '99'; // String으로 선언
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log(sample); // 99
console.log(typeof sample); // String
// +, - 기호 없이 smaple을 출력한다면 타입은 String이 된다.
// +, - 기호를 붙인다고해서 원래 값이 바뀌진 않는다.

sample = true;
console.log(+sample); // 1 == true
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0 == false
console.log(typeof +sample); // number


sample = '안유진';
console.log(+sample); // NaN -> Not a Number
// number가 될 수 없는 값이기에 NaN 출력

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); // number
console.log("-------------------");





/**
 * 할당 연산자(assignment operator)
 */
number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110
// 10이라는 숫자가 number 에 더해지고 number 변수에 저장

number -= 10;
console.log(number); // 100

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100

number %= 10;
console.log(number); // 0
console.log("-------------------");



/**
 * 비교 연산자 
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교 
 */

// 1) 값의 비교 (==)
 console.log(5 == 5); // true
 console.log(5 == '5'); // true
 console.log(0 == ''); // true
 console.log(true == 1); // true
 console.log(false == 0); // true
 console.log(true == '1'); //true

 // 2) 값과 타입의 비교 (===)
 console.log( 5 === 5); // true
 console.log(5 === '5'); // false
 console.log(0 === ''); // false
 console.log(true === 1); // false
 console.log(false === 0); // false
 console.log(true === '1'); // false

 console.log("-------------------");

// 1) 값의 비교 (!==)
 console.log(5 != 5); 
 console.log(5 != '5');
 console.log(0 != '');
 console.log(true != 1);
 console.log(false != 0);
 console.log(true != '1');
// 모두 false

console.log("-------------------");

// 2) 값과 타입의 비교 (!==)
 console.log(5 !== 5); // false
 console.log(5 !== '5');
 console.log(0 !== '');
 console.log(true !== 1);
 console.log(false !== 0);
 console.log(true !== '1');
 // 1번째 제외 모두 true

 console.log("-------------------");


 /**
  * 대소 관계 비교 연산자
  */
 console.log(100>1); // ture
 console.log(100<1); // false
 console.log(100 <= 1); // false
 console.log(100 >= 1); // true


 /**
  * 삼항 조건 연산자 (ternary operation)
  * 조건 ? true : false
  */
 console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
 // 결과 : 10이 0보다 크다

 console.log("-------------------");

 /**
  * 논리 연산자
  * 
  * 1) && 
  * 2) ||
  */

 // && 조건은 둘다 true 여야 true 반환
 console.log(true && true); //ture
 console.log(true && false); // false
 console.log(false && true); // false
 console.log(false && false); // false

 console.log("-------------------");

// ||는 하나만 true여도 true 반환
console.log( true || true); // true
console.log( true || false); // true
console.log( false || true); // true
console.log(false || false); // false

console.log("-------------------");

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false
console.log(10 < 1 && 20 < 2); // false

console.log( 10 > 1 || 20 > 2); // true
console.log( 10 < 1 || 20 > 2); // true
console.log( 10 < 1 || 20 < 2); // false

console.log("-------------------");

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측(왼쪽)이 true면 우측(오른쪽) 값 반환
 * &&를 사용했을때 좌측(왼쪽)이 false면 좌측(왼쪽) 값 반환 
 * ||를 사용했을때 좌측(왼쪽)이 true면 좌측(왼쪽) 값 반환
 * ||를 사용했을때 좌측(왼쪽)이 false면 우측(오른쪽) 값 반환
 */

// 1) &&를 사용했을때 좌측(왼쪽)이 true면 우측(오른쪽) 값 반환
console.log(true && '아이브'); // 아이브

// 2) &&를 사용했을때 좌측(왼쪽)이 false면 좌측(왼쪽) 값 반환 
console.log(false && '아이브'); // false

// 3) ||를 사용했을때 좌측(왼쪽)이 true면 좌측(왼쪽) 값 반환
console.log(true || '아이브'); // true

// 4) ||를 사용했을때 좌측(왼쪽)이 false면 우측(오른쪽) 값 반환
console.log(false || '아이브'); // 아이브

// Q.문제
console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // false

console.log("-------------------");

/**
 * 지수 연산자
 */
console.log(2**2); // 4
console.log(10**3); // 1000

console.log("-------------------");

/**
 * null 연산자 
 */
let name;
console.log(name); // undifined

// name 변수가 undifined거나 null이면 '코드팩토리' 반환
name = name ?? '코드팩토리';
console.log(name); // 코드팩토리

// name이 null이나 undifined가 아니기 때문에 '코드팩토리' 반환
name = name ?? '아이브';
console.log(name); // 코드팩토리

let name2;
name2 ??= '코드팩토리';
console.log(name2); // 코드팩토리