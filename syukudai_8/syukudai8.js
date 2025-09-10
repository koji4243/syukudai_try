'use strict';

// 問題：8
// 配列 ["赤", "青", "緑"] を使って、HTMLのリスト（
// ）の中に色の名前をすべてリスト項目（
// ）として追加するプログラムを作ってください

const list = document.getElementById('list');
const array = ["赤", "青", "緑"] ;

// ul直下のli生成
const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');

li0.textContent = array[0];
li1.textContent = array[1];
li2.textContent = array[2];

// console.log(li0);
// console.log(li1);
// console.log(li2);

list.appendChild(li0);
list.appendChild(li1);
list.appendChild(li2);

