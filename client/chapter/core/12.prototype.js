/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = { //동물 기본값
//     legs: 4,
//     tail: true,
//     stomach: [],
//     set eat(food) {
//         this.stomach.push(food);
//         //세팅을 해주고 있는 거라서 setter! set이라고 써도 된다. 불닭 맵기 레벨dki
//     },
//     get Eat() {//얘가 getter //get이라고 써도 된다. 이런게 객체에서는 된다.
//         //메서드 이름이 같아도 되긴 한다. 
//         //대신 그러면 get, set 키워드가 빠지면 안된다. 
//         return this.stomach;
//     }
// }
//함수처럼 생겼지만 get,set이 붙으면
//? animal.eat = '사료' , animal.eat ; 이렇게 쓸 수 있다.
//*뒤에 할당값이 없으면 getter, 할당값이 있으면 setter,
//*객체에 property를 추가하는 것처럼 작동한다.
//*animal을 찍으면 enumerble하지 않은 요소로 친다.
//*for...in문 사용시 get, set은 수집되지 않는다. 자체적으로 수집한 값은 false로 들어간다.

//위에서 animal에서 설정해둔 값을 가져올 수 있지 않을까?!
//상속시키자
//하나의 객체는 하나의 prototype만 상속이 가능하다. 
// const tiger = {
//     pattern: '호랑이무늬',
//     prey: '',
//     hunt(target) {
//         this.prey = target;
//         return `${target}에게 조용히 접근한다.`
//     },
//     __proto__: animal
// }

// const fox = {
//     prey: '',
//     // fox.__proto__ = animal; 이렇게 안에 넣어서 한번에 써도 가능하다.
//     __proto__: tiger
// }
// fox.__proto__ = animal;
// tiger.__proto__ = animal;


//? 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다)
//함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자 함수야!

// const button = (name) => {
//     // this.name = name;
//     // console.log(name);
// }
// function User(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;

// }

// // function button() {

// // }
// const a = button()
// //일반함수 button의 실행값을 변수에 담은 것

// const person1 = new User('선범', 32, 'tiger@naver.com');// 생성자 함수
// //생성자 함수로 만들면 무조건 객체가 담긴다 . new 를 붙이는 순간

//? 생성자 함수

function Animal() {
    this.stomach = [];
    this.legs = 4;
    this.tail = true,//여기 앞에 get, set을 붙일 수 없다!!
        this.eat = function (food) {
            return this.stomach;
        }
}
const tiger = new Animal();
//new를 붙이면 생성자 함수이고, 다 객체가 된다.
//만약 new를 안붙이면 객체가 아니라 그냥 함수가 되어버린다.
//재사용하기 위해 사용하는 방법이다

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
    this.prey = target,
        console.log(`${target}에게 슬금슬금 접근합니다.`);

}
//new keyword가 붙으면 그냥 다 객체라고 생각하면 된다~

const cat = new Animal();

cat.say = () => 'meow';
//arrow function은 이렇게 대문자 소문자인지만 보고 생성자인지 일반함수인지 구분해야 하는 상황을
//개선하기 위해서 ES6부터 나온 것이다
//그러면 함수 역할만 하려고 나온거면 생성자 역할을 해야할 것도 있어야 하지 않나?! 하는게 class
//class 는 구분도 잘 안됐던 get, set을 분리할 수 있게 해준다
const wolf = new Animal();
const fox = new Animal();
const dog = new Animal();

// const str = new String('a');
// const num = new Number(1);

//? 우리가 지금까지 한 것을 ES6 기준으로 재정의할건데, 이때 필요한게 class!
