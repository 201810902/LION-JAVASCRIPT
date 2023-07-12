/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function (priceA, priceB, priceC, priceD) {

//     return priceA + priceB + priceC + priceD
// };

let calculateTotal = function () {

    console.log(arguments);
    //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 이것은? : arguments
    let total = 0;
    // for (let i = 0; i < arguments.length; i++){
    //     console.log(i, arguments.length, arguments[i]);
    //     total += arguments[i];
    // }s
    // return total;
    // for (let i in arguments) {
    //     total += arguments[i];
    // }
    // return total;
    //* 배열의 능력을 빌려서 (call 활용) argumnet에 접근해보도록 하겠다.

    // Array.prototype.forEach.call(arguments, function item(item) {
    //     console.log(item); 
    //     total += item;
    // })
    
    //*4. slice를 빌려써서 배열로 만들기
    /* 값만 알고있는 argument라는 유사배열을 '진짜' 배열로 만들어보겠다. 
    slice: argument에 있는 값들을 모두 도려내서 배열로 만들어버린다. 
    -> 배열에서 쓸 수 있는 메서드들을 모두 가져다 사용할 수 있게 된다 */
  
    //? let realArray = Array.prototype.slice.call(arguments);

    // console.log(realArray);

    //* 5. Array.from()
  // let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function (item) {
  //   total += item;
  // })
  // Object.prototype.toString();
  // Object.entries(); //"static method"
  let arr = [10, 50, 100];

  //* 6.spread syntax
  //let realArray = [...arguments, ...arr ]; 
  let realArray = [...arguments]; //가장 최신 구문이기도 하고 제일 많이 쓴다. 배열을 합성할 떄도 많이 쓰인다.
 
  // console.log(realArray);

  // realArray.forEach(function(item, index){
  // // 
  //   console.log(item, index);
  // })
  
  //*7.Array.reduce
  //*reduce는 누적값이 애초에 함수 안에 들어 있다. accumulate,라고 누적값을 
  //* item은 순회도는 값, initValue는 최초값(누적값 acc의 초기값)을 설정해주는 것
  total = realArray.reduce((acc, item) => {acc+item}, 0) //* <- 요기 있는 0이 최초값
};

const result = calculateTotal(1000, 500, 200, 6500, 100);

const user = {
  name: 'tiger'
}

console.log(result);
// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
  
}


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  
};
//* 호출은 hello로 할 수 없고 nameFunctionExpression으로 해야한다. 함수라는 객체에 
//* hello라는 이름을 부여했을 뿐이다. 


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (callback) {
  callback();
};

//* XMLHTTPREQRUEST 비동기통신 할때
//* 이런식으로 콜백함수를 사용한다.
/* let callbackFunctionExpression = function (isActive, success, fail) {
  if (isActive) {
    success();
  }
  else {
    false();
  }
}; */

callbackFunctionExpression(
  true, //?-> isactive가 된다
  function () { console.log('콜백 함수 실행!'); },
  function () { console.log('실패!'); }
)

const movePage = function (url, success, fail) {
  if (url==='www.naver.com') {
    success();
  } else {
    fail()
  }
}
movePage(
  'www.naver.com',
  function (url) {
    console.log('성공 몇초 뒤 해당 페이지로 이동합니다');
    setTimeout(() => {
      window.location.href = url
    }, 3000);
  },
  function () {
    console.log('올바르지 않은 주소입니다');
    //올바르지 않은 주소에 대한 안내멘트를 하거나 기존 주소로 이동시키거나 하는 등의 처리가 필요하다.
    //이런게 바로  AJax의 기능이다. 거기서 콜백함수가 사용이 됐다더라~ "나중에 실행되는 함수"
    //함수 자체는 값처럼 사용되기 때문에 어디든 던져서 넣고 받고 할수가 있다.
  }
)


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
//* 나온 이유? 변수의 보호를 위해 나왔다.
// Immediately Invoked Function Expression -> IIFE 패턴이라고 불렀다.
//* 은닉화 incapsulation(캡슐화)
//*요즘은 모듈 프로그래밍이 대신해준다.
//* 하지만 나중에 closure를 배울때 iffe패턴이 내부적으로 들어간다. 
let IIFE;

//클로저 closure
import { css as c } from "css.js";

const Master = (function (g) {
  console.log(g);
  var x = 10;
  let uid = 'Ajttk753!@'
  return {
    getKey() {
      return uid;
    },
    setKey(value) {
      uid = value;
    }
  };
  
})(window) //window를 함수의 인자로 전달함

