// Seleciona os elementos do HTML
const botaoGerar = document.getElementById('gerarBtn');
const divHistoria = document.getElementById('historiaGerada');

// Nossos arrays com as partes da história
const personagens = [
    "Um cavaleiro amaldiçoado",
    "Uma pirata com um mapa celestial",
    "O último mago da Terra",
    "Uma inventora de uma cidade a vapor",
    "Um detetive que vê fantasmas",
    "Uma inteligência artificial que sonha"
];

const cenarios = [
    "nas ruínas de uma cidade flutuante",
    "a bordo de um trem que nunca para",
    "numa floresta onde as árvores sussurram segredos",
    "no coração de um império subaquático",
    "num mercado negro de memórias",
    "durante um inverno que dura séculos"
];

const conflitos = [
    "que precisa quebrar uma antiga profecia.",
    "para encontrar uma fonte de poder esquecida.",
    "enquanto foge de um caçador de recompensas implacável.",
    "para entregar uma mensagem que pode impedir uma guerra.",
    "que busca vingança pela traição de seu mentor.",
    "para provar que uma lenda antiga é real."
];

// Adiciona o "ouvinte de evento" de clique ao botão.
botaoGerar.addEventListener('click', gerarHistoria);

// Adiciona um ouvinte para o FIM da animação.
// Quando a animação de fade-in terminar, a classe é removida.
// Isso garante que a animação possa ser disparada novamente no próximo clique.
divHistoria.addEventListener('animationend', () => {
    divHistoria.classList.remove('animar-resultado');
});


// Função principal que gera a história
function gerarHistoria() {
    // 1. SORTEIA UM ITEM DE CADA LISTA
    const indicePersonagem = Math.floor(Math.random() * personagens.length);
    const indiceCenario = Math.floor(Math.random() * cenarios.length);
    const indiceConflito = Math.floor(Math.random() * conflitos.length);

    // 2. GUARDA OS ITENS SORTEADOS EM VARIÁVEIS
    const personagemEscolhido = personagens[indicePersonagem];
    const cenarioEscolhido = cenarios[indiceCenario];
    const conflitoEscolhido = conflitos[indiceConflito];

    // 3. MONTA A FRASE FINAL
    const historiaFinal = `<p>${personagemEscolhido} ${cenarioEscolhido} ${conflitoEscolhido}</p>`;
    
    // 4. COLOCA O RESULTADO NA TELA
    divHistoria.innerHTML = historiaFinal;

    // 5. ADICIONA A CLASSE PARA ATIVAR A ANIMAÇÃO DO CSS
    divHistoria.classList.add('animar-resultado');
}
