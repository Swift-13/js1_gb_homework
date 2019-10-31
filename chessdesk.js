/*var body = document.getElementById("body");

body.innerHTML = "Chess desk";
createDesk(1,2);
function createDesk (a,b) {
    var row = a;
    var span = b;
    var i=0;
    var square = document.createElement("div");
    
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.backgroundColor = "red";
    square.style.float = "left";
    do {square.setAttribute("id", a+row);
        body.appendChild(square); 
        row++;
        console.log(row);
    } while (row<8)
}*/
console.log(createBoard());

function createBoard() {
    var board = [];

    for (var i = 0; i <= 10; i++) {

        board[i] = [];
        //console.log(board);
    }
    for (i = 0; i < 10; i++) {
        board[0][i] = document.createElement("div");
        var turn = board[0][i];
        if (1<i < 8) {
            turn.setAttribute("style", "width:40px; height:20px; background-color: white; float:left; text-align: center; transform: rotate(180deg)");
        } else {turn.setAttribute("style", "width:40px; height:20px; background-color: white");}
        board[0][i] = turn;
        if (i == 1) {
                var change = board[0][i];
                change.innerHTML = "a";
                //change.style.float(left);
                board[0][i] = change;
            } else if (i == 2) {
                var change = board[0][i];
                change.innerHTML = "b";
                //change.style.float(left);
                board[0][i] = change;
            } else if (i == 3) {
                var change = board[0][i];
                change.innerHTML = "c";
                //change.style.float("left");
                board[0][i] = change;
            } else if (i == 4) {
                var change = board[0][i];
                change.innerHTML = "d";
                //change.style.float("left");
                board[0][i] = change;
            } else if (i == 5) {
                var change = board[0][i];
                change.innerHTML = "e";
                //change.style.float("left");
                board[0][i] = change;
            } else if (i == 6) {
                var change = board[0][i];
                change.innerHTML = "f";
                //change.style.float("left");
                board[0][i] = change;
            } else if (i == 7) {
                var change = board[0][i];
                change.innerHTML = "g";
                //change.style.float("left");
                board[0][i] = change;
            } else if (i == 8) {
                var change = board[0][i];
                change.innerHTML = "j";
                board[0][i] = change;
            }

        }
    for (i = 0; i < 9; i++) {
        board[9][i] = document.createElement("div");
        var turn = board[9][i];
        if (1<i < 8) {
            turn.setAttribute("style", "width:40px; height:20px; background-color: white; float:left; text-align: center");
        } else {turn.setAttribute("style", "width:40px; height:20px; background-color: white");}
        board[9][i] = turn;
        if (i == 0) {
                var change = board[9][i];
                change.innerHTML = "a";
                //change.style.float(left);
                board[9][i] = change;
            } else if (i == 1) {
                var change = board[9][i];
                change.innerHTML = "b";
                //change.style.float(left);
                board[9][i] = change;
            } else if (i == 2) {
                var change = board[9][i];
                change.innerHTML = "c";
                //change.style.float("left");
                board[9][i] = change;
            } else if (i == 3) {
                var change = board[9][i];
                change.innerHTML = "d";
                //change.style.float("left");
                board[9][i] = change;
            } else if (i == 4) {
                var change = board[9][i];
                change.innerHTML = "e";
                //change.style.float("left");
                board[9][i] = change;
            } else if (i == 5) {
                var change = board[9][i];
                change.innerHTML = "f";
                //change.style.float("left");
                board[9][i] = change;
            } else if (i == 6) {
                var change = board[9][i];
                change.innerHTML = "g";
                //change.style.float("left");
                board[9][i] = change;
            } else if (i == 7) {
                var change = board[9][i];
                change.innerHTML = "j";
                board[9][i] = change;
            }

        }
    console.log(board[0]);
    console.log(board[9]);
    for (var i = 1; i < 9; i++) {
        for (var j = 1; j < 9; j++) {
            board[i][j] = document.createElement("div");
            if (((j == 8 | j == 2 | j == 4 | j == 6) & (i == 1 | i == 3 | i == 5 | i == 7)) | ((j == 1 | j == 3 | j == 5) & (i == 2 | i == 4 | i == 6 | i == 8))) {
                var turn = board[i][j];
                turn.setAttribute("style", "width:40px; height:40px; background-color: black; float:left")
                board[i][j] = turn;
            } else if ((i == 2 | i == 4 | i == 6 | i == 8) & (j == 7)) {
                var turn = board[i][j];
                turn.setAttribute("style", "width:40px; height:40px; background-color: black")
                board[i][j] = turn;
            } else if ((i == 1 | i == 3 | i == 5 | i == 7) & (j == 7)) {
                var turn = board[i][j];
                turn.setAttribute("style", "width:40px; height:40px; background-color: yellow")
                board[i][j] = turn;
            } else {
                var turn = board[i][j];
                turn.setAttribute("style", "width:40px; height:40px; background-color: yellow; float:left")
                board[i][j] = turn;
            }
            if (j == 1) {
                var change = board[i][j];
                change.setAttribute("id", "a" + (1 + i));
                //change.style.float(left);
                board[i][j] = change;
            } else if (j == 2) {
                var change = board[i][j];
                change.setAttribute("id", "b" + (1 + i));
                //change.style.float(left);
                board[i][j] = change;
            } else if (j == 3) {
                var change = board[i][j];
                change.setAttribute("id", "c" + (1 + i));
                //change.style.float("left");
                board[i][j] = change;
            } else if (j == 4) {
                var change = board[i][j];
                change.setAttribute("id", "d" + (1 + i));
                //change.style.float("left");
                board[i][j] = change;
            } else if (j == 5) {
                var change = board[i][j];
                change.setAttribute("id", "e" + (1 + i));
                //change.style.float("left");
                board[i][j] = change;
            } else if (j == 6) {
                var change = board[i][j];
                change.setAttribute("id", "f" + (1 + i));
                //change.style.float("left");
                board[i][j] = change;
            } else if (j == 7) {
                var change = board[i][j];
                change.setAttribute("id", "g" + (1 + i));
                //change.style.float("left");
                board[i][j] = change;
            } else if (j == 8) {
                var change = board[i][j];
                change.setAttribute("id", "j" + (1 + i));
                board[i][j] = change;
            }

        }
    }
    for(var i=1; i<9;i++){
        board[i][0] = document.createElement("div");
        var num = board[i][0];
        num.setAttribute("style", "width: 20px; height: 40px");
        
    }
    console.log(board);
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++)
            body.appendChild(board[i][j]);
    }
}
