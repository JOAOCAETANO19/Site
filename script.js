// --- 1. SELEÇÃO DOS ELEMENTOS DO HTML ---
const inputHomens = document.getElementById('homens');
const inputMulheres = document.getElementById('mulheres');
const inputCriancas = document.getElementById('criancas');
const botaoCalcular = document.getElementById('calcularBtn');
const areaResultado = document.getElementById('areaResultado');
const listaResultados = document.getElementById('listaResultados');

// --- 2. ADICIONAR O EVENTO DE CLIQUE AO BOTÃO ---
// Quando o botão for clicado, a função 'calcular' será executada.
botaoCalcular.addEventListener('click', calcular);

// --- 3. A FUNÇÃO PRINCIPAL: CALCULAR ---
function calcular() {
    // Pegar os valores dos inputs e converter para números inteiros
    const numHomens = parseInt(inputHomens.value) || 0;
    const numMulheres = parseInt(inputMulheres.value) || 0;
    const numCriancas = parseInt(inputCriancas.value) || 0;

    // --- LÓGICA DE CÁLCULO (AS VARIÁVEIS EM AÇÃO) ---
    // Definimos variáveis 'const' para nossas regras de consumo.
    // Essas regras são constantes, não mudam.
    const carnePorHomem = 0.45; // 450g
    const carnePorMulher = 0.30; // 300g
    const carnePorCrianca = 0.20; // 200g

    const linguicaPorPessoa = 0.25; // 250g
    const paoDeAlhoPorAdulto = 2;
    const paoDeAlhoPorCrianca = 1;

    const cervejaPorAdulto = 1.5; // 1.5L
    const refriPorPessoa = 0.5; // 500ml

    // Calculando os totais. Usamos 'let' porque o valor é calculado e atribuído aqui.
    let totalCarne = (numHomens * carnePorHomem) + (numMulheres * carnePorMulher) + (numCriancas * carnePorCrianca);
    let totalLinguica = (numHomens + numMulheres + numCriancas) * linguicaPorPessoa;
    let totalPaoDeAlho = (numHomens * paoDeAlhoPorAdulto) + (numMulheres * paoDeAlhoPorAdulto) + (numCriancas * paoDeAlhoPorCrianca);
    let totalCerveja = (numHomens + numMulheres) * cervejaPorAdulto;
    let totalRefri = (numHomens + numMulheres + numCriancas) * refriPorPessoa;

    // --- 4. EXIBIR OS RESULTADOS NA TELA (MANIPULAÇÃO DO DOM) ---
    
    // Limpa a lista de resultados anterior para evitar duplicatas
    listaResultados.innerHTML = '';
    
    // Cria os itens da lista e os insere no HTML
    listaResultados.innerHTML += `<li>Carne Bovina: <strong>${totalCarne.toFixed(2)} kg</strong></li>`;
    listaResultados.innerHTML += `<li>Linguiça: <strong>${totalLinguica.toFixed(2)} kg</strong></li>`;
    listaResultados.innerHTML += `<li>Pão de Alho: <strong>${totalPaoDeAlho} unidades</strong></li>`;
    listaResultados.innerHTML += `<li>Cerveja: <strong>${totalCerveja.toFixed(1)} L</strong></li>`;
    listaResultados.innerHTML += `<li>Refrigerante: <strong>${totalRefri.toFixed(1)} L</strong></li>`;
    
    // Remove a classe 'hidden' para que a área de resultados apareça
    areaResultado.classList.remove('hidden');
}