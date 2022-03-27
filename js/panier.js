

var data = 1;
document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
    var eee = document.getElementById("rko").textContent++;
    var eee = document.getElementById("rko").textContent++;
    var eee = document.getElementById("rko").textContent++;
    var eee = document.getElementById("rko").textContent++;
    var eee = document.getElementById("rko").textContent++;
    var eee2 = document.getElementById("rko2").textContent++;
    var eee3 = document.getElementById("rko3").textContent++;
    var eee3 = document.getElementById("rko3").textContent++;
    var eee3 = document.getElementById("rko3").textContent++;
    var eee3 = document.getElementById("rko3").textContent++;
    var eee3 = document.getElementById("rko3").textContent++;
    var eee4 = document.getElementById("rko4").textContent++;
    var eee4 = document.getElementById("rko4").textContent++;
    var eee4 = document.getElementById("rko4").textContent++;
    var eee4 = document.getElementById("rko4").textContent++;
    var eee4 = document.getElementById("rko4").textContent++;
}

function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
    if(document.getElementById("counting").innerText < 0){
        alert("Impossible d'entrer une valeur négative pour la quantité");
        document.getElementById("counting").innerText = 0;
    }
    var eee = document.getElementById("rko").textContent--;
    var eee = document.getElementById("rko").textContent--;
    var eee = document.getElementById("rko").textContent--;
    var eee = document.getElementById("rko").textContent--;
    var eee = document.getElementById("rko").textContent--;
    var eee2 = document.getElementById("rko2").textContent--;
    var eee3 = document.getElementById("rko3").textContent--;
    var eee3 = document.getElementById("rko3").textContent--;
    var eee3 = document.getElementById("rko3").textContent--;
    var eee3 = document.getElementById("rko3").textContent--;
    var eee3 = document.getElementById("rko3").textContent--;
    var eee4 = document.getElementById("rko4").textContent--;
    var eee4 = document.getElementById("rko4").textContent--;
    var eee4 = document.getElementById("rko4").textContent--;
    var eee4 = document.getElementById("rko4").textContent--;
    var eee4 = document.getElementById("rko4").textContent--;
    if(document.getElementById("rko").innerText < 0){
        document.getElementById("rko").innerText = 0;
        document.getElementById("rko2").innerText = 2;
        document.getElementById("rko3").innerText = 24;
        document.getElementById("rko4").innerText = 24;
    }
}

var data2 = 1;
document.getElementById("counting2").innerText = data2;

function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting2").innerText = data2;
}

function decrement2() {
    data2 = data2 - 1;
    document.getElementById("counting2").innerText = data2;
    if(document.getElementById("counting2").innerText < 0){
        alert("Impossible d'entrer une valeur négative pour la quantité");
        document.getElementById("counting2").innerText = 0;
    }
}


var data3 = 1;
document.getElementById("counting3").innerText = data3;

function increment3() {
    data3 = data3 + 1;
    document.getElementById("counting3").innerText = data3;
}

function decrement3() {
    data3 = data3 - 1;
    document.getElementById("counting3").innerText = data3;
    if(document.getElementById("counting3").innerText < 0){
        alert("Impossible d'entrer une valeur négative pour la quantité");
        document.getElementById("counting3").innerText = 0;
    }
}