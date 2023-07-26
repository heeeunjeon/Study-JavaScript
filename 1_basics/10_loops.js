/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i <10; i++) {
	console.log(i);
}
console.log('----------------');

for (let i = 10; i > 0; i--) {
	console.log(i);
}
console.log('----------------');

for(let i = 0; i < 3; i++) {
	for (let j=3; j>0; j--) {
		console.log(i, j);
	}
}

console.log('----------------');

/**
 * 퀴즈 
 * *을 이용해서 6x6의 정사각형을 출력해보시오
 */
let square = '';
let num = 6;

for(i=0; i < num; i++) {
	for(j=0; j < num; j++) {
		square += '*';
	}
	square += '\n';
};

console.log(square);

console.log('----------------');

/**
 * for...in
 */
const yujin = {
	name : '안유진',
	year : 2003,
	group : '아이브'
}

for(let key in yujin) {
	console.log(key); // name year group 출력
}

// => for in loop을 object에서 쓰면 key 값을 가져올 수 있다.

console.log('----------------');

const iveMemberArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMemberArray ) {
	console.log(key); // 0 1 2 3 4 5 출력
	console.log(`${key}:${iveMemberArray[key]}`);
}

// 결과
// 0
// 0:안유진
// 1
// 1:가을
// 2
// 2:레이
// 3
// 3:장원영
// 4
// 4:리즈
// 5
// 5:이서

// => for in loop를 Array에서 쓰면 key가 index 값으로 가져올 수 있다.
// => index 값을 가져오고 싶다면 for in 사용

console.log('----------------');

/**
 * for .. of
 * Array에서만 사용할 수 있다.
 */
for(let value of iveMemberArray) {
	console.log(value);
}
// 결과
// 안유진
// 가을
// 레이
// 장원영
// 리즈
// 이서

// => for of loop 에서는 value 값을 가져올 수 있다. 
// => value 값을 가져오고 싶다면 for of 를 사용


console.log('----------------');



/**
 * While
 * 조건을 먼저 판단 후 true일 경우 반복 실행
 */
let number = 0;

while(number < 10) {
	number ++;
}
console.log(number); // 10


console.log('----------------');


/**
 * do while
 * 무조건 먼저 실행 후 조건 판단
 */
num = 0;
do {
	num++;
} while (num < 10);

console.log(num); // 10

console.log('----------------');


/**
 * break
 */
for (let i = 0; i <10; i++) {
	if(i === 5) {
		break; // 0 ~ 4 출력
	}
	console.log(i); // 0 ~ 9 출력
}

console.log('----------------');

num = 0;
while(num < 10) {
	if(num === 5) {
		break;
	}
	num ++;
	console.log(num); // 1 ~ 5 출력
}

console.log('----------------');

/**
 * continue
 * skip을 하게 됨
 */
for(let i=0; i < 10; i++){
	if(i ===5) {
		continue; // 5일때 skip 하고, console.log로 안가고 다음으로 진행
	}
	console.log(i); // 0 ~ 9까지 출력, 5 제외
}

console.log('----------------');

number = 0;
while (number < 10) {
	number++;

	if(number === 5) {
		continue;
	}

	console.log(number); // 1 ~ 10까지 출력, 5 제외
}