const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de carro você prefere ?",
        alternativas: [
            {
                texto: "Um carro mais antigo",
                afirmacao: "Você tem um estilo mais retrô gosta de carros mais conservados e originas",
            },
            {
                texto: "Um carro mais novo",
                afirmacao: "Você tem um estilo mais moderno, gosta de carros mais novos e modificados ",
            }
        ]
    },
    { 
        enunciado: "Qual estilo você mais gosta em um carro ? ",
        alternativas: [
            {
                texto: "Carros mais altos ",
                afirmacao: " Você prefere andar mais tranquilo sem correr riscos de enroscar o carro ou ficar preso em algum local ",
            },
            {
                texto: " Carros mais baixos",
                afirmacao: "Você gosta de estetica porem se preucupa muito com a manutenção por conta do carro ser mais baixo e correr mais riscos ",
            }
        ]
    },
    {
        enunciado: "Quais carros você prefere ?",
        alternativas: [
            {
                texto: "Gol, Saveiro, Parati, Corsa, Celta, Palio",
                afirmacao: "Você prefere carros mais economicos e prefere andar sem chamar muito a atenção",
            },
            {
                texto: "Porche, Ferrari, pagani, bugatti, masserati, rolls royse",
                afirmacao: "Você preferre carros mais esportivos, gosta de adrenalina e curte chamar a atenção ao passar pelos lugares",
            }
        ]
    },
    {
        enunciado: "Para ir a uma corrida qual carro você escolheria ?",
        alternativas: [
            {
                texto: "Porche, Ferrari, Lamborguine",
                afirmacao: "Você gosta de andar em altas velocidades chamando a atenção por aonde passa",
            },
            {
                texto: "Koenigsegg Jesko Absolut, Hennessey Venon, Astron Martin Valkyrie",
                afirmacao: "Caramba você realmente gosta de altas velocidades e adrenalina em altas velocidades",
            }
        ]
    },
    {
        enunciado: " Você praticaria rally ? ",
        alternativas: [ 
            {
                texto: " Sim, Gosto muito ",
                afirmacao: " Seu estilo faz com que você goste mais de aventuras e emoções ",
            },
            {
                texto: " Não, acho perigoso ",
                afirmacao: " Seu estilo faz com que você goste mais de segurança sem se arriscar muito, uma aventura mais segura ",
            } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
if(atual >= perguntas.length){
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
for (const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada){
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}

function mostraResultado(){
caixaPerguntas.textContent = "O Resultado eeee...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();