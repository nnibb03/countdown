"use strict";  

const date = document.getElementById("date");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
  // 現時刻との日時の差を取得
  const diff = moment( '2023-06-01' ).diff( moment() );

  // ミリ秒からdurationオブジェクトを生成
  const duration = moment.duration( diff );
  
  // 日・時・分・秒を取得
  const  calcDate = Math.floor( duration.asDays() );
  const calcHour = duration.hours();
  const calcMin = duration.minutes();
  const calcSec = duration.seconds();
  
  // 取得した時間を表示（2桁表示）
  date.innerHTML =  calcDate < 10 ? '0' + calcDate : calcDate;
  hour.innerHTML =  calcHour < 10 ? '0' + calcHour : calcHour;
  min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
  sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
countdown();
setInterval(countdown,1000);


function hyoji() {
  const flowers = document.querySelectorAll('#flowers');

  const childElements = flowers[0].querySelectorAll('.flower-item');
  
  childElements.forEach((parentItems, index) => {
    const diff = moment().diff( moment('2022-07-08') );

    // ミリ秒からdurationオブジェクトを生成
    const duration = moment.duration( diff );
    
    // 日・時・分・秒を取得
    const calcDate = Math.floor( duration.asDays() );

    if ( calcDate >= index + 1) {
      parentItems.classList.add('show');
    } 
  });
}  

hyoji();
