// Alterar estilo da Navbar ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.padding = '15px 0';
    }
});

// Lógica do Simulador de Impacto
const selectPratica = document.getElementById('pratica-select');
const resultadoDiv = document.getElementById('resultado-impacto');

const impactos = {
    1: "✅ O Plantio Direto pode reduzir a erosão do solo em até 90% e aumentar o sequestro de carbono.",
    2: "💧 A Irrigação de Precisão economiza em média 30% de água e reduz o consumo de energia elétrica.",
    3: "🐄 A Integração Lavoura-Pecuária recupera pastagens degradadas e otimiza o uso da mesma área o ano todo."
};

selectPratica.addEventListener('change', (e) => {
    const val = e.target.value;
    
    if (val != 0) {
        resultadoDiv.style.opacity = 0;
        setTimeout(() => {
            resultadoDiv.innerText = impactos[val];
            resultadoDiv.style.color = "#8db600";
            resultadoDiv.style.opacity = 1;
        }, 200);
    } else {
        resultadoDiv.innerText = "Aguardando seleção...";
        resultadoDiv.style.color = "#fff";
    }
});

// Animação simples de entrada para os cards
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = '0.5s ease-out';
    observer.observe(card);