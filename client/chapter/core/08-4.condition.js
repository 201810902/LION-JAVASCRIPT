/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

  receivedEmailAddress = (emailAddress ===undefined || emailAddress ===null) ? 'user@company.io' : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
//emailAddress가 null이나 undefined면 무조건 'user@~'를 반환한다.
receivedEmailAddress = emailAddress || 'user@company.io';

console.log(receivedEmailAddress);
/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

console.log( '' || WIDTH);
console.log( '' ?? WIDTH);

//Logical Assignment Operation 
//MDN에 Logical Operator라고 검색해보기

let x;
let y;

x || y;
//둘 중 truthy 값을 찾아 반환, 없으면 y 반환

x ||= y;
//최근에 추가되없다(?) x가 false일 때 y 값을 x에 할당 

x &&=y;
//x가 true일때 y값을 x에 할당

x ??= y;
//x가 undefined, null 일때 y값을 x에 할당

let title;

title ||= '제목입니다.'

console.log(title);
