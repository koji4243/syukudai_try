'use strict';

// 問題：6
// HTMLにテキストボックスとボタンを用意し、ボタンをクリックするとテキストボックスに入力された値を配列に追加して、現在の配列をコンソールに出力するようにしてください。



const btn = document.getElementById('btn');
const array = [];

btn.addEventListener('click', function(){
    const text = document.getElementById('text').value
    array.push(text);
    console.log(array);
})