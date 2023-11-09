const mensagensDivertidas =
        [  
            "Por que o esqueleto nao brigou com ninguem? Porque nao tinha estomago pra isso!",
            "Como transformar o giz numa cobra? só colocar na agua pois o GizBoia!kakaka",
            "estava o Wel e a fernanda na sala, ate que a ticher disse, Welcome Fernando! akkakakakka",
            "piadas de bebado"
            "Porque os fantasmas sao pessimos de contar piadas? porque sao transparentes"
        ]

let botaoDivertido = document.getElementByid("botaoDivertido");
let mensagemDivertida = document.getElementByid("mensagemDivertida");

botaoDivertido.addEventListener('click', function() {
    //Math.floor(x) retorna o menor numero inteiro dentre o numero "x"
    //Math.random( ) retorna um numero pseudo-aleatorio no intervalo
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagemDivertida.textContent = mensagemAleatoria;
})