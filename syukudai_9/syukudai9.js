'use strict';

// 問題：9
// HTMLに複数のボタンを作り、それぞれがクリックされたときに「ボタン1がクリックされました」などとアラートが出るようにしてください。
// ヒント： 同じ関数を複数のボタンに使い回す

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

function onClickValue(btn){
    btn.addEventListener('click', function(){
    const value = btn.value;
    alert(`${value}がクリックされました`);
    })
}

onClickValue(btn1);
onClickValue(btn2);
onClickValue(btn3);