'use strict';

// 問題：7
// 引数に得点（0〜100）を受け取り、90点以上は「A」、70点以上は「B」、50点以上は「C」、それ未満は「D」と評価を返す関数 getGrade(score) を作ってください。


function getGrade(score){
    switch (true){
    case 90 <= score:
        console.log('A');
        break;
    case 70 <= score:
        console.log('B');
        break;
    case 50 <= score:
        console.log('C');
        break;
    default:
        console.log('D');
    }
}

console.log(getGrade(60));