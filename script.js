// Dados do documento
const motivos = [
    "Suportar temperaturas altas",
    "Usar menos água",
    "Resistir a pragas e doenças",
    "Manter boa produtividade mesmo com o clima instável"
];

const culturas = [
    {
        nome: "Milho Resistente à Seca",
        texto: "O milho DroughtGard foi desenvolvido para crescer bem mesmo com pouca água. Ele consegue reduzir em até 30% o consumo de água sem perder produtividade. É ideal para as regiões do Centro-Oeste e Nordeste brasileiro."
    },
    {
        nome: "Arroz Submerso",
        texto: "Este arroz especial consegue sobreviver completamente submerso por até 14 dias. Perfeito para áreas que sofrem com chuvas fortes e enchentes frequentes."
    },
    {
        nome: "Sorgo Tolerante ao Calor",
        texto: "O sorgo é uma planta que usa pouquíssima água (metabolismo CAM). Ele é extremamente resistente ao calor e ao solo seco."
    },
    {
        nome: "Feijão Carioca Adaptado ao Calor",
        texto: "Desenvolvido pela Embrapa, este feijão suporta temperaturas acima de 35°C sem reduzir a produção."
    },
    {
        nome: "Batata-doce Roxa Fortificada",
        texto: "Rica em antioxidantes e muito resistente à seca. Ótima opção para a agricultura familiar em regiões quentes."
    }
];

const vantagens = [
    "Reduzem o consumo de água em até 40%",
    "Aumentam a resistência a pragas e doenças",
    "Exigem menos agrotóxicos",
    "Mantêm alta produtividade mesmo com clima adverso",
    "Contribuem para a segurança alimentar do país",
    "Ajudam a combater os efeitos das mudanças climáticas"
];

// Função para criar lista
function criarLista(id, itens) {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        container.appendChild(li);
    });
}

// Função para criar cards
function criarCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    
    culturas.forEach(cultura => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${cultura.nome}</h3>
            <p>${cultura.texto}</p>
        `;
        container.appendChild(card);
    });
}

// Dark Mode
document.getElementById('darkModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('darkModeBtn');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Controle de tamanho de fonte
let fontSize = 16;
function changeFont(valor) {
    fontSize += valor;
    document.body.style.fontSize = fontSize + 'px';
}

// Scroll suave
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Inicialização
window.onload = function() {
    criarLista('motivos', motivos);
    criarCards();
    criarLista('vantagensList', vantagens);
    
    console.log("✅ ClimaCultivo carregado com sucesso!");
};