var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/sugestao", function (req, res) {
    usuarioController.sugestao(req, res);
});

router.post("/cadastrarNick", function (req, res) {
    usuarioController.cadastrarNick(req, res);
});


router.post("/cadastrarNickName", function (req, res) {
    usuarioController.cadastrarNickName(req, res);
});

module.exports = router;