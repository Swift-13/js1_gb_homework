createDesk();

function createDesk() {
    var board = [];
    var letters = [0, "a", "b", "c", "d", "e", "f", "g", "j", 0];
    //создаем блоки
    for (var i = 0; i < 10; i++) {
        board[i] = [];
        for (var j = 0; j < 10; j++) {
            board[i][j] = document.createElement("div");
            if ((i == 0 | i == 9) & (j == 0 | j == 9)) {
                board[i][j].setAttribute("style", "width: 20px; height: 20px; background-color: yellow; float:left");
            } else if (i == 0 & 0 < j < 9) {
                board[i][j].setAttribute("style", "width: 40px; height: 20px; background-color: yellow; text-align:center;transform: rotate(180deg);float:left");
                board[i][j].innerHTML = letters[j];
            } else if (i == 9 & 0 < j < 9) {
                board[i][j].setAttribute("style", "width: 40px; height: 20px; background-color: yellow; text-align:center;float:left");
                board[i][j].innerHTML = letters[j];
            } else if (0 < i < 9 & j == 0) {
                board[i][j].setAttribute("style", "width: 20px; height: 20px; padding: 10px 0;background-color: yellow; text-align:center;float:left");
                board[i][j].innerHTML = i;
            } else if (0 < i < 9 & j == 9) {
                board[i][j].setAttribute("style", "width: 20px; height: 20px; padding: 10px 0;background-color: yellow; text-align:center; transform: rotate(180deg);float:left");
                board[i][j].innerHTML = i;
            } else {
                board[i][j].setAttribute("id",letters[j]+i);
                if((i+j)%2==0) {
                    board[i][j].setAttribute("style", "width: 40px; height: 20px; padding: 10px 0; background-color: yellow;text-align:center;float:left");
                } else {
                    board[i][j].setAttribute("style", "width: 40px; height: 20px; padding: 10px 0; background-color: brown;text-align:center;float:left");
                }
            }
        }
    }
    //выводим доску
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var body = document.getElementById("body");
            body.setAttribute("style", "width: 360px");
            var floor = board[i][j];
            body.appendChild(floor);
        }
    }
}