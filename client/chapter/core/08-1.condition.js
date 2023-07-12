/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?' , '');

// 영화 볼거니?
let goingToWatchMovie = 'yes';


if(!didWatchMovie){
  //영화 볼거니?
  //누구랑 볼거니?
  console.log('안봤어');
}else{
  let alone=confirm('너 혼자 봤니?');

  if(alone){
    //confirm 의 확인부분
    let didCry = confirm('너 울었니..?');

    if (didCry){
      console.log('너..찌질했네..');
    }else{
      console.log('너 T야?');
    }
  }


  console.log('봤어');
}

if(!didWatchMovie){
  //영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');
  if(goingToWatchMovie){
    let withWho=prompt('누구랑 볼거니?','');

    if(withWho === '여자친구'){
      console.log
    }else if(withWho==='가족'){
      console.log
    }
  }




}



// if 문(statement)
if (didWatchMovie === 'yes'){
  console.log('무슨 영화 봤어?');
}else if(goingToWatchMovie ==='yes'){
  console.log('');
}
else{
  console.log('나랑 영화 보러 갈래?');
}
// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식s