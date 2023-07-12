/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i = 0;
// do {
//   console.log(i);
//   i++;
  
// } while (i<10);

// do {
//   if (i===0){
//     console.log('최초실행');
//   }else{
//     console.log(`${i}번째 실행`);
//   }
//   i++;
// }while(i<10);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇 번 반복하시겠습니까? ', 0);

// do {
//   console.log(repeat);

//   if(repeat < 0){
//     console.log('최초실행입니다.');
//     break;
//   }
//   repeat--;
// }while(repeat);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// js에서 html에 접근할 수 있는 기능이 있다. 
let first = document.querySelector('.first');//최초 1회 실행

// first = first.nextSibling.nextSibling.nextSibling;
// do{
//   first=first.nextSibling;
// }while(first.nodeType!== document.ELEMENT_NODE);

// console.log(first);
//------------->까지는 일회용, 휘발성 코드이다. 

function next(node) {
  do {
    node=node.nextSibling;
  } while (node.nodeType !== 1) //element node = 1로 통칭
  return node;
  
}

const second= next(first);
console.log(second);


function before(node) {
  do {
    node=node.previousSibling;
  } while (node.nodeType!==1)
  return node;
}
//로직 실행

