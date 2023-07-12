/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;

switch (thisTime) {
  case MORNING: console.log('뉴스 기사 글을 읽는다');
    break;
  case LUNCH: console.log('뉴스 기사 글을 읽는다');
    break;
  case DINNER: console.log('뉴스 기사 글을 읽는다');
    break;
  case NIGHT: console.log('뉴스 기사 글을 읽는다');
    break;
  case LATE_NIGHT: console.log('뉴스 기사 글을 읽는다');
    break;
  case DAWN: console.log('뉴스 기사 글을 읽는다');
    break;  
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */


if (thisTime === 'MORNING'){
  console.log('뉴스 기사 글을 읽는다');
  }else if (thisTime === 'LUNCH'){
    console.log('');
  }else if (thisTime === 'DINNER'){
    console.log('');
  }else if (thisTime === 'NIGHT'){
    console.log('');
  }else if (thisTime === 'LATE_NIGHT'){
    console.log('');
  }else
    console.log('');

/* switch vs. if -------------------------------------------------------- */


/* 1. 랜덤한 수를 생성
   2. 조건비교 switch case
   3. 해당 결괏값을 출력   */
  
// console.log(Math.floor(Math.random()*7 )); //난수 생성 식. 
/* 0~6까지만 만들어낼 수 있다 */

// const day=Math.floor(Math.random()*7 );

function getRandom(n){
  return Math.floor(Math.random() + n);
}
//위의 난수 생성식을 함수로 만든 이유는 재사용성 확보를 위해서이다




function getDay(dayValue){
  switch (dayValue) {
    case 0: return'일';
    case 1: return'월';
    case 2: return'화';
    case 3: return'수';
    case 4: return'목';
    case 5: return'금';
    case 6: return'토';
  }

}

const day = getDay(getRandom(7));

// console.log(getDay(day));
console.log(day);


function isWeekend(dayValue){
  const today = getDay(getRandom(dayValue));

  console.log(today);

  return today.includes('토') ? '토요일' : today.includes('일')?
  '월요일 ' : '평일'
  // today.includes('토')
  // if(today === '토' || today ===)
  // return today ==='토' || today === '일';
}

const today = isWeekend(7); 