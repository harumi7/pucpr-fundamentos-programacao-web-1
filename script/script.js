function getParameters() {
    var params = new Array();
    var paramsRet = new Array();
    var url = window.location.href;
    var paramsStart = url.indexOf("?");

    if (paramsStart != -1) {
        var paramString = url.substring(paramsStart + 1);
        paramString = decodeURIComponent(paramString);
        var params = paramString.split("&");
        for(var i = 0; i < params.length; i++) {
            var pairArray = params[i].split("=");
            if (pairArray.length == 2) {
                paramsRet[pairArray[0]] = pairArray[1];
            }
        }
        return paramsRet;
    }
    return null;
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none';
        
    } else {
        itens.style.display = 'block';
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

var span = document.getElementsByClassName("botao-close-icon");
var techModalFechar = span[0];
var atividadeSomativaModalFechar = span[1];

var techModal = document.getElementById("tech-modal");
var atividadeSomativaModal = document.getElementById("atividade-somativa-modal");

function openModal(botao) {
    if (botao == "tech") {
        techModal.style.display = "block";
    }

    else if (botao == "atividade-somativa") {
        atividadeSomativaModal.style.display = "block";
    }
}

techModalFechar.onclick = function() {
    techModal.style.display = "none";
}

atividadeSomativaModalFechar.onclick = function() {
    atividadeSomativaModal.style.display = "none";
}