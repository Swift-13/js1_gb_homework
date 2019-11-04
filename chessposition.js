var chesscase = ["&#9817", "&#9816", "&#9815", "&#9814", "&#9813", "&#9812", "&#9823", "&#9822", "&#9821", "&#9820", "&#9819", "&#9818"];
var letters = ["a", "b", "c", "d", "e", "f", "g", "j"];
for (var i = 0; i < 8; i++) {
    for (var j = 1; j <= 8; j++) {
        if (j == 1 & (i == 0 | i == 7)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[3];
        } else if (j == 1 & (i == 1 | i == 6)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[2];
        } else if (j == 1 & (i == 2 | i == 5)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[1];
        } else if (j == 1 & i == 3) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[5];
        } else if (j == 1 & i == 4) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[4];
        } else if (j == 2 & 0<i<8) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[0];
        } else if (j == 8 & (i == 0 | i == 7)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[9];
        } else if (j == 8 & (i == 1 | i == 6)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[8];
        } else if (j == 8 & (i == 2 | i == 5)) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[7];
        } else if (j == 8 & i == 3) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[10];
        } else if (j == 8 & i == 4) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[11];
        } else if (j == 7 & 0<i<8) {
            var tile = document.getElementById(letters[i] + j);
            tile.innerHTML = chesscase[6];
        } 
    }
}