// ===== DADOS DAS PERGUNTAS =====
const perguntas = [
    {
        pergunta: "O que significa a sigla 'IA'?",
        opcoes: [
            "Internet Avançada",
            "Inteligência Artificial",
            "Interface Automática",
            "Informação Analógica"
        ],
        correta: 1
    },
    {
        pergunta: "Qual desses é um exemplo de IA no dia a dia?",
        opcoes: [
            "Um lápis comum",
            "Assistentes virtuais como Alexa e Siri",
            "Uma calculadora simples",
            "Um relógio analógico"
        ],
        correta: 1
    },
    {
        pergunta: "O que é Machine Learning (Aprendizado de Máquina)?",
        opcoes: [
            "Um tipo de hardware para computadores",
            "Uma linguagem de programação",
            "Um ramo da IA onde máquinas aprendem com dados",
            "Um vírus de computador"
        ],
        correta: 2
    },
    {
        pergunta: "Qual dessas NÃO é uma aplicação comum de IA?",
        opcoes: [
            "Reconhecimento facial",
            "Recomendação de filmes em streaming",
            "Carros autônomos",
            "Impressão de documentos em papel"
        ],
        correta: 3
    },
    {
        pergunta: "O que são 'redes neurais' na IA?",
        opcoes: [
            "Cabos de internet de alta velocidade",
            "Sistemas computacionais inspirados no cérebro humano",
            "Um tipo de conexão Wi-Fi",
            "Programas antivírus"
        ],
        correta: 1
    }
];

// ===== VARIÁVEIS DE ESTADO =====
let indiceAtual = 0;
let pontuacao = 0;
let tempoRestante = 30;
let intervalTimer = null;
let respostaTravada = false;

// ===== ELEMENTOS DO DOM =====
const telaInicio = document.getElementById('tela-inicio');
const telaQuiz = document.getElementById('tela-quiz');
const telaFinal = document.getElementById('tela-final');
const btnIniciar = document.getElementById('btn-iniciar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const contadorPergunta = document.getElementById('contador-pergunta');
const pontuacaoEl = document.getElementById('pontuacao');
const perguntaTexto = document.getElementById('pergunta-texto');
const opcoesEl = document.getElementById('opcoes');
const feedbackEl = document.getElementById('feedback');
const timerBar = document.getElementById('timer-bar');
const timerTexto = document.getElementById('timer-texto');
const pontuacaoFinalEl = document.getElementById('pontuacao-final');
const mensagemFinalEl = document.getElementById('mensagem-final');
const medalhaEl = document.getElementById('medalha');

// ===== FUNÇÕES DE NAVEGAÇÃO =====
function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    tela.classList.add('ativa');
}

// ===== INICIAR JOGO =====
function iniciarJogo() {
    indiceAtual = 0;
    pontuacao = 0;
    mostrarTela(telaQuiz);
    carregarPergunta();
}

// ===== CARREGAR PERGUNTA =====
function carregarPergunta() {
    respostaTravada = false;
    feedbackEl.classList.remove('mostrar', 'acerto', 'erro');
    feedbackEl.textContent = '';

    if (indiceAtual >= perguntas.length) {
        finalizarJogo();
        return;
    }

    const p = perguntas[indiceAtual];
    contadorPergunta.textContent = `Pergunta ${indiceAtual + 1}/${perguntas.length}`;
    pontuacaoEl.textContent = `Pontos: ${pontuacao}`;
    perguntaTexto.textContent = p.pergunta;

    // Renderizar opções
    opcoesEl.innerHTML = '';
    p.opcoes.forEach((opcao, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('opcao');
        btn.textContent = `${String.fromCharCode(65 + idx)}) ${opcao}`;
        btn.addEventListener('click', () => verificarResposta(idx));
        opcoesEl.appendChild(btn);
    });

    iniciarTimer();
}

// ===== TIMER =====
function iniciarTimer() {
    clearInterval(intervalTimer);
    tempoRestante = 30;
    atualizarTimer();

    intervalTimer = setInterval(() => {
        tempoRestante--;
        atualizarTimer();
        if (tempoRestante <= 0) {
            clearInterval(intervalTimer);
            tempoEsgotado();
        }
    }, 1000);
}

function atualizarTimer() {
    const pct = (tempoRestante / 30) * 100;
    timerBar.style.width = pct + '%';
    timerTexto.textContent = tempoRestante + 's';

    if (tempoRestante <= 10) {
        timerBar.classList.add('perigo');
    } else {
        timerBar.classList.remove('perigo');
    }
}

function tempoEsgotado() {
    if (respostaTravada) return;
    respostaTravada = true;
    bloquearOpcoes();
    feedbackEl.textContent = '⏰ Tempo esgotado! A resposta correta era: ' + 
        perguntas[indiceAtual].opcoes[perguntas[indiceAtual].correta];
    feedbackEl.classList.add('mostrar', 'erro');
    destacarCorreta();
    setTimeout(proximaPergunta, 2500);
}

// ===== VERIFICAR RESPOSTA =====
function verificarResposta(idxSelecionado) {
    if (respostaTravada) return;
    respostaTravada = true;
    clearInterval(intervalTimer);
    bloquearOpcoes();

    const p = perguntas[indiceAtual];
    const botoes = opcoesEl.querySelectorAll('.opcao');

    if (idxSelecionado === p.correta) {
        pontuacao += 20;
        pontuacaoEl.textContent = `Pontos: ${pontuacao}`;
        botoes[idxSelecionado].classList.add('correta');
        feedbackEl.textContent = '✅ Correto! +20 pontos';
        feedbackEl.classList.add('mostrar', 'acerto');
    } else {
        botoes[idxSelecionado].classList.add('errada');
        botoes[p.correta].classList.add('correta');
        feedbackEl.textContent = '❌ Errado! A resposta correta era: ' + p.opcoes[p.correta];
        feedbackEl.classList.add('mostrar', 'erro');
    }

    setTimeout(proximaPergunta, 2000);
}

function destacarCorreta() {
    const botoes = opcoesEl.querySelectorAll('.opcao');
    botoes[perguntas[indiceAtual].correta].classList.add('correta');
}

function bloquearOpcoes() {
    opcoesEl.querySelectorAll('.opcao').forEach(btn => {
        btn.classList.add('desabilitada');
    });
}

function proximaPergunta() {
    indiceAtual++;
    carregarPergunta();
}

// ===== FINALIZAR JOGO =====
function finalizarJogo() {
    clearInterval(intervalTimer);
    mostrarTela(telaFinal);
    pontuacaoFinalEl.textContent = pontuacao + ' / 100';

    let msg = '';
    let medalha = '';

    if (pontuacao === 100) {
        msg = '🏆 Perfeito! Você é um Mestre em Inteligência Artificial!';
        medalha = '🥇';
    } else if (pontuacao >= 60) {
        msg = '👏 Muito bem! Você tem ótimos conhecimentos sobre IA!';
        medalha = '🥈';
    } else if (pontuacao >= 20) {
        msg = '🙂 Bom começo! Continue estudando sobre IA!';
        medalha = '🥉';
    } else {
        msg = '📚 Hora de estudar mais sobre Inteligência Artificial!';
        medalha = '📖';
    }

    mensagemFinalEl.textContent = msg;
    medalhaEl.textContent = medalha;
}

// ===== EVENT LISTENERS =====
btnIniciar.addEventListener('click', iniciarJogo);
btnReiniciar.addEventListener('click', () => {
    mostrarTela(telaInicio);
});