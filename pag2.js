

//so mostra o cadastro
const xpontos = document.getElementById("xpontos");
const opontos = document.getElementById("opontos");
const boxes = document.getElementsByClassName("cell");
const levelselect = document.getElementById("dificuldade");

window.onload = function () { document.getElementById("gameboard").style.visibility = "hidden" };

//associa nome à forma
function Jogador(nome, currentPlayer) {
    this.nome = nome;
    this.currentPlayer = currentPlayer;
}

//variaveis que o Ctrl + shift + i pediu
var jogador1;
var jogadorAtual;
let currentPlayer = ["X", "O"];
var index = null;
var tabuleiro = new Array(9);
var pontosX = 0;
var pontosO = 0;
let level = 1;


levelselect.addEventListener("change", (e) => {
    level = Number(e.target.value);
    console.log(level);
});

//intrala x  o e jogadores
function cellClick(cel, pos) {
    if (tabuleiro[pos] == undefined) {
        cel.innerHTML = currentPlayer[jogadorAtual.currentPlayer];
        tabuleiro[pos] = currentPlayer[jogadorAtual.currentPlayer];

        (jogadorAtual.currentPlayer == 0) ? jogadorAtual = jogador2 : jogadorAtual = jogador1; //operador ternario. alterna as formas
        JogadorAtual();




    } else alert("Área já marcada!");

    //funções para vitórias
    vitorialinha();
    vitoriacoluna();
    vitoriadiagonal();

    //caso de empate
    if (velha()) {
        alert("Empate!");
        Restart();
    }

}

//fim do cadastro e começa o jogo
function mostrar() {
    var nomeJogador1 = " Você"
    var nomeJogador2 = "Computador"
    jogador1 = new Jogador(nomeJogador1, 0); //X
    jogador2 = new Jogador(nomeJogador2, 1); //O

    jogadorAtual = jogador1;
    JogadorAtual();

    //deixa a grade de jogo escondida
    document.getElementById("gameboard").style.visibility = "visible";
    document.getElementById("X").innerHTML = jogador1.nome + " - " + pontosX;
    document.getElementById("O").innerHTML = jogador2.nome + " - " + pontosO;

}

//mostra na tela o jogador atual
function JogadorAtual() {
    document.getElementById("jogadorAtual").innerHTML = "Jogador atual:  " + jogadorAtual.nome;


}



//vitorias
/*0 1 2
  3 4 5
  6 7 8*/
function vitorialinha() {
    for (var i = 0; i < 7; i += 3) {
        if (tabuleiro[i] == "X" && tabuleiro[i + 1] == "X" && tabuleiro[i + 2] == "X") {
            alert(jogador1.nome + " ganhou! Parabéns!");
            Restart();
        }
        if (tabuleiro[i] == "O" && tabuleiro[i + 1] == "O" && tabuleiro[i + 2] == "O") {
            alert(jogador2.nome + " ganhou! Parabéns!");
            Restart();
        }
    }
}
function vitoriacoluna() {
    for (var i = 0; i < 3; i++) {
        if (tabuleiro[i] == "X" && tabuleiro[i + 3] == "X" && tabuleiro[i + 6] == "X") {
            alert(jogador1.nome + " ganhou! Parabéns!");
            Restart();
        }
        if (tabuleiro[i] == "O" && tabuleiro[i + 3] == "O" && tabuleiro[i + 6] == "O") {
            alert(jogador2.nome + " ganhou! Parabéns!");
            Restart();
        }
    }

}

function vitoriadiagonal() {
    if ((tabuleiro[0] == "X" && tabuleiro[4] == "X" && tabuleiro[8] == "X") ||
        (tabuleiro[2] == "X" && tabuleiro[4] == "X" && tabuleiro[6] == "X")) {
        alert(jogador1.nome + " ganhou! Parabéns!");
        // pontosX = pontosX + 1;
        Restart();




    } else if ((tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O") ||
        (tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O")) {
        alert(jogador2.nome + " ganhou! Parabéns!");
        Restart();

    }
}
function velha() {
    var preenchidos = 0;
    for (var i = 0; i < tabuleiro.length; i++) {
        if (tabuleiro[i] != undefined) {
            preenchidos++;
            return preenchidos == tabuleiro.length;
        }
    }
}



function Restart() {
    window.location.reload();

}





