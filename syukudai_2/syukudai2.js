'use scrict';

// 問題：2
// 1から100までの数をコンソールに表示するプログラムを書いてください。

// 応用: 3の倍数のときは「Fizz」、5の倍数のときは「Buzz」、両方のときは「FizzBuzz」と表示

for(let i=1; i <= 100; i++){
    switch (true){
    case i % 15 === 0:
        console.log('FizzBuzz');
        break;
    case i % 5 === 0:
        console.log('Buzz');
        break;
    case i % 3 === 0:
        console.log('Fizz');
        break;
    }
    console.log(i);
}