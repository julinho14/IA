# 🤖 Missão: Inteligência Artificial

Um jogo educativo interativo em HTML, CSS e JavaScript puro para testar conhecimentos sobre **Inteligência Artificial**.

## 📋 Sobre o Projeto

**Missão IA** é um quiz gamificado com 5 perguntas sobre conceitos básicos de Inteligência Artificial. O jogador tem 30 segundos por pergunta e acumula pontos pelas respostas corretas.

## 🎯 Funcionalidades

- ✅ **5 perguntas** sobre Inteligência Artificial
- ⏱️ **Timer de 30 segundos** por pergunta
- 🏆 **Sistema de pontuação** (20 pontos por acerto)
- 🥇 **Sistema de medalhas** baseado no desempenho
- 📱 **Design responsivo** para mobile e desktop
- 🎨 **Interface moderna** com gradientes e animações
- 🔄 **Rejogabilidade** — pode jogar quantas vezes quiser

## 🗂️ Estrutura de Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura HTML com as 3 telas (início, quiz, final) |
| `style.css` | Estilização completa com design responsivo |
| `script.js` | Lógica do jogo (perguntas, timer, pontuação) |
| `README.md` | Documentação do projeto |

## 🚀 Como Executar

1. Clone ou baixe os arquivos do projeto
2. Certifique-se de que os 3 arquivos estão na **mesma pasta**
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Clique em **"🚀 Iniciar Missão"** e comece a jogar!

Não é necessário servidor ou instalação — funciona direto no navegador.

## 🎮 Como Jogar

1. Leia atentamente cada pergunta
2. Escolha uma das 4 opções clicando nelas
3. Você tem **30 segundos** para responder cada pergunta
4. Acertos valem **20 pontos** cada
5. Ao final, veja sua pontuação e medalha

### 🏅 Sistema de Medalhas

| Pontuação | Medalha | Classificação |
|-----------|---------|---------------|
| 100 pts | 🥇 | Mestre em IA |
| 60-80 pts | 🥈 | Avançado |
| 20-40 pts | 🥉 | Iniciante |
| 0 pts | 📖 | Precisa estudar |

## 🧠 Conceitos Abordados

- O que significa IA
- Exemplos de IA no cotidiano
- Machine Learning
- Aplicações de IA
- Redes Neurais

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Variáveis CSS, Flexbox, animações, gradientes
- **JavaScript (ES6+)** — Lógica do jogo com manipulação do DOM

## 💡 Como Personalizar

### Adicionar novas perguntas

Edite o array `perguntas` no arquivo `script.js`:

```javascript
const perguntas = [
    {
        pergunta: "Sua nova pergunta aqui?",
        opcoes: ["Opção A", "Opção B", "Opção C", "Opção D"],
        correta: 0 // índice da resposta correta (0 a 3)
    },
    // ... mais perguntas
];