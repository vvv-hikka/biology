let firstInput = document.querySelector('.first');
let secondInput = document.querySelector('.second');
let answer = document.querySelector('.answer');
let button = document.querySelector('.button');

button.onclick = function() {
    let counter = 0;
    let a1 = firstInput.value.split('');
    let a2 = secondInput.value.split('');
    if(a1.length!=a2.length){
        alert('Введите последовательности равной длины');
    } else {
        for(let i = 0; i<a1.length; i++){
            if(a1[i]!=a2[i]){
                counter++;
            }
        }
        answer.textContent = "Количество различий: " + counter;
    }
}