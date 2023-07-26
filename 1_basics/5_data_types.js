/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과 
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열) : 문자를 여러개로 묶음
 * 3) Boolean (불리언)
 * 4) undifined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 * 		Function
 * 		Array
 * 		Object
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

/**
 * Number 타입
 */
// 이 변수가 어떤 타입인지 알 수 있는 함수 typeof
console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('------------------------');

const infinity = Infinity; //무한대 
const nInfinity = -Infinity; // 마이너스 무한대 
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('------------------------');


/**
 * String 타입
 */
const codefactory = '"코"드팩토리';
console.log(codefactory);
console.log(typeof codefactory);

const ive = "'아이브' 안유진";
console.log(ive);


/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine -> \n 
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */

// Template Literal 사용전
const iveYuJin = '아이브\n안유진'
console.log(iveYuJin);

const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const backSlash = '아이브\\코드팩토리';
console.log(backSlash);

const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);


// Template Literal  사용한다면 편하게 사용 가능
// ``으로 사용
const iveWonYoung2 = `아이브 '"//////
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2); // string


// Template Literal 사용 안할 때 예제2
const groupName = '아이브';
console.log(groupName + ' 안유진');

// Template Literal 사용 할 때의 예제2
console.log(`${groupName} 안유진`);

console.log('------------------------');


/**
 * Boolean 타입
 */
const isTrue = true; // 참
const isFalse = false; // 거짓
console.log(typeof isTrue);
console.log(typeof isFalse);

console.log('------------------------');



/**
 * undifined
 * 
 * 사용자가 직접 값을 초기화(선언) 하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undifined로 값을 초기화하는건 지양해야 한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log('------------------------');


/**
 * null 타입
 * 
 * undifined와 마찬가지로 갑싱 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); // object 버그임 근데 안바꿈 이미 사용된 코드가 많아서


console.log('------------------------');


/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);
// 유일무이한 값으로 값이 같더라도 false가 출력

console.log('------------------------');



/**
 * Object 타입
 * 
 * Map
 * 키:밸류의 쌍으로 이루어져 있다. 
 * key:value
 */ 
const dictionary = {
	red: '빨간색', 
	orange: '주황색',
	yellow: '노란색'
};
console.log(dictionary);
console.log(dictionary['red']); 
console.log(dictionary['orange']); 
console.log(dictionary['yellow']); 

console.log(typeof dictionary); // object

console.log('------------------------');

/**
 * Array 타입(object타입)
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const iveMemberArray = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서'
];
console.log(iveMemberArray);


/**
 * index
 * 
 * 0부터 1씩 올라간다.
 */
console.log(iveMemberArray[0]);
console.log(iveMemberArray[5]);

iveMemberArray[0] = '코드팩토리';
console.log(iveMemberArray);
console.log(typeof iveMemberArray); // object
console.log('------------------------');

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다.
 * 					C, JAVA 등 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 갑에 의해 타입을 "추론"한다.
 * JS -> dynamic typing
 */