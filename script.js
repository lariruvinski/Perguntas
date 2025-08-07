const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você estiver correndo em uma corrida e ultrapassar a pessoa em segundo lugar, em que posição você fica? ",
        alternativas: [
            {
                texto: "segundo lugar",
                afirmacao: "certo"
            },
            {
                texto: "primeiro lugar",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Qual é o valor da metade da metade do número 20? ?",
        alternativas: [
            {
                texto: " 10.",
                afirmacao: "errado"
            },
            {
                texto: "5.",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Quanto é 5²?",
        alternativas: [
            {
                texto: "10.",
                afirmacao: "errado"
            },
            {
                texto: "25.",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "como se escreve:",
        alternativas: [
            {
                texto: "sobrancelha.",
                afirmacao: "certo"
            },
            {
                texto: "sombrancelha.",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Qual o antônimo de bom  ",
        alternativas: [
            {
                texto: "mau",
                afirmacao: "certo"
            },
            {
                texto: "ótimo.",
                afirmacao: "errado"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();