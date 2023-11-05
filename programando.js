//const texto1 = document.querySelector("footer h1");
//texto1.textContent = "Jogador da vez: Luan";
//console.log(texto1.textContent);

let vez = 1;
let jogador1 = "Jogador1";
let jogador2 = "Jogador2";
let placar = [0, 0];

let status1 = document.querySelector(".j1");
let status2 = document.querySelector(".j2");

status1.textContent = jogador1;
status2.textContent = jogador2;

function marcarCelula(cel, jogadorDaVez){

    if(jogadorDaVez == 1){
        document.querySelector(cel).textContent = "X";
        jogadorDaVez = 2;
        return jogadorDaVez;
    }else if(jogadorDaVez == 2){
        document.querySelector(cel).textContent = "O";
        jogadorDaVez = 1;
        return jogadorDaVez;
    }
}

