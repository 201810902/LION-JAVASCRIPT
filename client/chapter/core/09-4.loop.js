/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

const key = 'createAt';

// console.log(javaScript.hasOwnProperty(key));

for (let key in javaScript){

  if(({}).hasOwnProperty.call(javaScript , key)){
    
    console.log(key);
  }
}





// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

const tens = [10, 100, 1000, 10000];

for (let key in tens){
  console.log(tens[key]);
}

//for..in 객체를 순환하는 용도로 사용 가능함
//하지만 배열은 권장하지 않는다. for..of가 최신 문법이라 좋다 .!

