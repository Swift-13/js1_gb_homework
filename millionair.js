var answer, ok, money = 0;
do { //Выводим первый вопрос
    ok = false,
        answer = +prompt("Денег: " + money + "\n" + works.a00 + works.a0 + works.a1 + works.a2 + works.a3 + '-1 - Выход из игры');
    if (answer == -1) {
        break;
    } else if (answer == 2) {
        money += 1000;
        ok= true;
    } else {
        ok = isAnswer(4, answer);
    }
} while (!ok);
do { //Выводим второй вопрос
    ok = false,
        answer = +prompt("Денег: " + money + "\n" + works.b00 + works.b0 + works.b1 + works.b2 + works.b3 + '-1 - Выход из игры');
    if (answer == -1) {
        break;
    } else if (answer == 3) {
        money += 1000;
        ok= true;
    } else {
        ok = isAnswer(4, answer);
    }
} while (!ok);
do { //Выводим третий вопрос
    ok = false,
        answer = +prompt("Денег: " + money + "\n" + works.c00 + works.c0 + works.c1 + works.c2 + works.c3 + '-1 - Выход из игры');
    if (answer == -1) {
        break;
    } else if (answer == 3) {
        money += 1000;
        ok= true;
    } else {
        ok = isAnswer(4, answer);
    }
} while (!ok);
do { //Выводим четвертый вопрос
    ok = false,
        answer = +prompt("Денег: " + money + "\n" + works.d00 + works.d0 + works.d1 + works.d2 + works.d3 + '-1 - Выход из игры');
    if (answer == -1) {
        break;
    } else if (answer == 4) {
        money += 1000;
        ok= true;
    } else {
        ok = isAnswer(4, answer);
    }
} while (!ok);
alert('Поздравляем! Ваш выигрыш: '+money);
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}
