/**
 * Array Functions
 */
let iveMembers = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서'
]
console.log(iveMembers);
console.log('-----------------');


// push() 함수
// Array의 맨 마지막에 값을 추가 할 수 있다.
// 반환값은 원하는 값을 추가한 후에 길이를 반환
// 원래 있던 함수에 직접적으로 변경을 했다.
console.log(iveMembers.push('코드팩토리')); // 7
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서', '코드팩토리' ]

console.log('-----------------');

// pop()
// 맨 마지막 값을 삭제한다.
// 그리고 삭제한 값을 반환한다.
console.log(iveMembers.pop()); // 코드팩토리
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

console.log('-----------------');

// shift()
// 첫번째 값을 삭제한다.
// 삭제한 값을 반환한다.
console.log(iveMembers.shift()); // 안유진
console.log(iveMembers); // [ '가을', '레이', '장원영', '리즈', '이서' ]

console.log('-----------------');

// unshift()
// 맨 앞에 값을 추가해준다.
// 추가한 후의 길이를 반환한다.
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

console.log('-----------------');

// splice()
// 0번 부터 3번째 까지의 값을 삭제한다.
// 반환 값은 나머지 값
console.log(iveMembers.splice(0, 3)); // [ '안유진', '가을', '레이' ]
console.log(iveMembers); // [ '장원영', '리즈', '이서' ]