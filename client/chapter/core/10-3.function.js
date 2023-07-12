/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
//* 함수선언문, 함수 표현식은 arguments가 있다.
//!하지만 arrow function은 내장 함수에 arguments가 없다.
//                                  rest parameter
let calcAllMoney = (...args) => {
    //? rest parameter이기 때문에 남은 것들만 나온다.
    //? let calcAllMoney = (a,b, ...args) =>~ 처럼 쓰면 맨 앞에 두 요소는 나오지 않음
    //* args든 뭐든 다른걸로 받아도 된다. 근데 그냥 관례상
    //* args나 children이라고 받는 경우가 많다.
    console.log(args); //? 진짜 배열이 나온다.
    //     let total = 0;
    //     args.forEach((item)=> {
    //     total += item;
    // })
    // args.reduce(function (acc, item) {
    //     return acc + item;
    // }, 0); //*처음에는 이런 식이 더 잘 읽힐 것이다. 이렇게 일단 써보고

    return args.reduce((acc, item) => acc + item, 0) //* arrow function 형태로 차츰 바꿔보자. 
};

const result = calcAllMoney(1000, 500, 200, 2000);

// console.log(result);
// 화살표 함수와 this
//*일반함수: 나를 호출한 대상을 this로 바인딩합니다.
//?화살표함수: this를 바인딩하지 않는다. 찾아야 한다면 내 부모꺼를 가져오게 된다.
//this를 왜 쓰는지
//* 함수 선언문
function normalFunction() {
    console.log(this);
}

window.normalFunction()
//나를 호출한 대상은 window이기 때문에, this가 window이다. 

//* 함수표현식
const expressionFunction = function () {
    console.log(this);
}
//여기도 window가 this

// arrowFunction()
//나 자신이 호출한것, 내 부모는 전역이라서 window가 바인딩한 것이다. 
//* 화살표함수식
const arrowFunction = () => {
    console.log(this);
}

//내 부모의 바깥 실행 context에 있는 this를 가져온다.
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;

//객체 안에서 this
const user = {
    total: 0,
    name: 'tiger',
    age: 32,
    address: '서울시 중랑구 면목동',
    grades: [80, 90, 100],
    totalGrades: function () {
        // this.grades.forEach(function (item) {//forEach의 콜백함수.
        //     console.log(this.total)
        //     // this.total += item;
        // })
        const sayHi = () => {
            console.log(this);

        }
        sayHi()//누가 sayHi를 호출했지?!user도, totalGrades가 해준것도 아니다. 
    }
}//user는 this가 없다.
//객체에 메서드를 정의할 때에는 일반함수로 정의하는게 this를 찾기 더 좋다.
//arrow function은  this를 못찾기 때문에..
//그래서 그떄는 arrow function을 거의 안쓴다.
//메서드 안에서 함수를 호출할 때는 (=함수를 한번 더 정의할 때에는)
//화살표 함수를 쓴다. 
