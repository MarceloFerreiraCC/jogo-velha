document.addEventListener("DOMContentLoaded", function() {
    var vez = 1;
    var vencedor = "";

    document.getElementById("jogador").innerHTML = "<h1>Jogador " + vez + " faça sua jogada! </h1>";

    var casas = document.querySelectorAll(".casa");

    casas.forEach(function(casa) {
        casa.addEventListener("click", handleClick);
    });

    function casasIguais(a, b, c) {
        var casaA = document.getElementById("casa" + a);
        var casaB = document.getElementById("casa" + b);
        var casaC = document.getElementById("casa" + c);
        var bgA = getComputedStyle(casaA).backgroundImage;
        var bgB = getComputedStyle(casaB).backgroundImage;
        var bgC = getComputedStyle(casaC).backgroundImage;
        
        if ((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
            if (bgA.indexOf("1.jpg") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        } else {
            return false;
        }
    }

    function casasOcupadas(a, b, c) {
        var casaA = document.getElementById("casa" + a);
        var casaB = document.getElementById("casa" + b);
        var casaC = document.getElementById("casa" + c);
        var bgA = getComputedStyle(casaA).backgroundImage;
        var bgB = getComputedStyle(casaB).backgroundImage;
        var bgC = getComputedStyle(casaC).backgroundImage;
        
        if ((bgA != "none" && bgA != "") && (bgB != "none" && bgB != "") && (bgC != "none" && bgC != "")) {
            return true;
        } else {
            return false;
        }
    }

    function verificarFimDeJogo() {
        if (casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ) {
            document.getElementById("resultado").innerHTML = "<h1>O jogador " + vencedor + " venceu! </h1>";
            var casas = document.querySelectorAll(".casa");
            casas.forEach(function(casa) {
                casa.removeEventListener("click", handleClick);
            });
        } else if (casasOcupadas(1, 2, 3) && casasOcupadas(4, 5, 6) && casasOcupadas(7, 8, 9)){
            document.getElementById("resultado").innerHTML = "<h1>O jogo deu Velha! </h1>";
        } else {
            document.getElementById("jogador").innerHTML = "<h1>Jogador " + vez + " faça sua jogada! </h1>";
        }
        
    }

    function handleClick() {
        var bg = getComputedStyle(this).backgroundImage;
        
        if (bg == "none" || bg == "") {
            var fig = `url(./Assets/${vez.toString()}.jpg)`;
            this.style.backgroundImage = fig;
            vez = vez == 1 ? 2 : 1;
            verificarFimDeJogo();
        }
    }
    
});








    
    
    