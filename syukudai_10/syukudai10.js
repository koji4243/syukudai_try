'use scrict';

const btn = document.getElementById('btn');

btn.addEventListener('click', function(event){
    const text = document.getElementById('text');
    const ul = document.getElementById('ul');
    const li = document.createElement('li');  // list生成

    li.textContent = text.value;
    ul.prepend(li);

    text.value = "";
    text.focus();
    li.classList.add('child');
    
    li.addEventListener('click', function(){
        if(!confirm('削除しますか？')){
            return
        }
        li.remove();
    })
})



