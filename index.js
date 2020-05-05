const pushNumbers = document.querySelector('.number');
const pressButton = document.querySelector('.btn');

pressButton.addEventListener('click', average);

function average() {
    let result = 0;
    const numbersList = pushNumbers.value;
    const numbersArray = numbersList.split(',');
    
    for (let i = 0; i < numbersArray.length; i++) {
    result += Number(numbersArray[i]);
    }

    const numberResult = document.getElementById('result');
    numberResult.innerHTML = result/numbersArray.length; 
}

