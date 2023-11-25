var $startGameButton = document.querySelector(".start_quiz")
var $RespostasContainer = document.querySelector(".respostas_conteiner")

$startGameButton.addEventListener("click", startGame)

function startGame() {

    $startGameButton.classList.add("hide")
    $RespostasContainer.classList.remove("hide")

}   

