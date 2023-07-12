/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let htmlCode = ` /* html */
    <ul>
        <li class="box"></li>
        <li></li>
        <li></li>
        </ul>
`
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50px',
  left: '50px',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

//authorization: 권한
//authentication: 인증

authUser = {
  uid: 'user-id-goldriver',
  name: 'Gangsun',
  email: 'smilegate@gmail.com',
  isSignIn: true,
  permission: 'paid'
}

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.permission);
console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['permission']);
console.log(authUser['email']);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

//*class로 객체 만들기
//? 객체지향 new Object. 객체는 this가 굉장히 많이 쓰인다. 
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
//* 함수로 객체 만들기
//? "함수형". 함수에서는 this가 별로 많이 쓰이진 않는다

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name: name,
    email: email,
    [computedProp]: number
  }

}

const user1 = createUser('금강선', 'smilegate@gamil.com');

//?shorthand property (단축 프로퍼티)
const user2 = createUser('재우', 'AshRain@gmail.com', 'tel',
  '010-9012-9804')
// let arr1 = [...user2];

//JS의 함수는 값을 return할 수 있었다.
//근데 그걸 객체를 return할 수도 있다.


// 프로퍼티 포함 여부 확인
//key in user1
//자신(Own)의 속성(property)를 가지고(has) 있는지
for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열
//키만 가지고 있는 static method..!
//객체의 key만 뽑아서 배열로 만들어주는것
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

//getProp(object) 함수 만들어보기
//내부적으로 object의 key를 이용해서 prop을 return하는
const getProp = (obj) => {
  if (typeof obj !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다');
  }
  return Object.keys(obj)
}
//? getProp과 getP 두 함수가 같은 함수이다.  
// function getP(Obj) {
//   let result = [];

//   for (let key in object) {
//     if (({})).hasOwnProperty.call(object, key){
//       result = push(key);
//     }
//   }
// }
getProp(authUser)
// 프로퍼티 제거 or 삭제
//제거는 비우는것(null), 삭제는 아예 없애버리는것(delete)
// authUser.name = null;

// console.log(authUser);

// const removeProperty = (authUser, name) => {
//   authUser.name = null;
//   // delete obj.prop;
//   console.log(authUser);
// }
const removeProp = (obj, key) => {
  obj[key] = null;
  // delete obj.prop;
  return obj;
}

function deleteProperty(object, key) {
  delete object[key];

  return object;
}
//validation?

// *단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin }
console.log(student);


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// function isEmptyObject(obj) {
//객체가 비어있는지 어떻게 확인할 수 있을까?
//   if (object.keys(Object).length === 0) {
//     return true;
//   }
//   return false;
// }

//반환되는 값이 true, false이기만 하면 나머지는 자율적인 방식으로~



/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
//배열의 구조를 분해해서 내가 원하는곳에 다 넣어주는것을 말한다.
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [, , green] = color;
// let [a, b, c ] = color;
// for (let keyValue of Object.entries(authUser)) {
for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  // console.log(keyValue[1]);
  console.log(key);
}

// let [red, blue, green] = color;
//배열은 순서가 중요하다. index! 이 순서를 막 바꿀 수 없다.

// let red = color[0];
// let blue = color[1];
// let green = color[2];

//배열의 0번째
console.log(green);

// const a = document.querySelectorAll('nav li button');
const [a, b, c, d] = document.querySelectorAll('nav li button');

console.log(a);

// button[0].addEventListenr('click', ()=> {})
a.addEventListenr('click', () => { })



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
//배열의 구조분해할당: 순서가 정해져있다. 변수 이름을 바꿀 수 있다.
//객체의 구조분해할당: 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까?  yes.
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
}

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);

function setElementCss(options) {
  // console.log(width);

  const { width: w, height: h = 10, overflow, color: c } = options;

  // console.log(width, color);
  console.log(w.c);
  //?객체 접근 방법 말고 그냥 변수처럼 쓸 수 있게 된다
  //*함수에서 넘어온 값이 객체일 때, 구조분해할당을 많이 사용한다. 
}
// setElementCss(100,200,false, 'red', ) 순서 맞춰서 일일이 써줘야해서 힘듬
//인수 자체를 객체로 전달해버리기~!

const defaults = {
  width: 100,
  height: 200,
  overflow: false,
  color: 'orange'
}

//* setElementCss(defaults); //객체로 받는 형식
//객체화의 장점: 순서가 상관 없다! 객체로만 받으면 되기 때문에..
//객체를 안에서 선언하면서 바로 받아도 된다. 
setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
  width: 50,
});