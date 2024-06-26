let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random());
            let answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase = phraseRandom; 
            switch(answerPhrase){
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerPhrase = `Я понял, это - число ${answerNumber }?`;
                    break;
                case 2:
                    answerPhrase = `Думаю, что это - число ${answerNumber }?`;
                    break;
                case 3:
                    answerPhrase = `Уверен, это - число ${answerNumber }?`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round( Math.random() * 3);
        let answerPhrase = phraseRandom; 
        switch(answerPhrase){
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Я молодец\n\u{1F60E}`;
                break;
            case 2:
                answerPhrase = `Это было несложно\n\u{1F60E}`;
                break;
            case 3:
                answerPhrase = `Я умею читать мысли\n\u{1F60E}`;
                break;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            let phraseRandom = Math.round( Math.random());
            let answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((maxValue - minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random() * 3);
            let answerPhrase = phraseRandom; 
            switch(answerPhrase){
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerPhrase = `Я понял, это - число ${answerNumber }?`;
                    break;
                case 2:
                    answerPhrase = `Думаю, что это - число ${answerNumber }?`;
                    break;
                case 3:
                    answerPhrase = `Уверен, это - число ${answerNumber }?`;
                    break;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    if (gameRun == false){
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
    }else{
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));;
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        orderNumber = 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
    }
})