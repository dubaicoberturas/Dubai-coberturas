// ==============================
// ROLAGEM SUAVE
// ==============================

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const destino = document.querySelector(link.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ==============================
// LIGHTBOX DA GALERIA
// ==============================

const imagens = document.querySelectorAll('.galeria img');

imagens.forEach((imagem) => {

    imagem.addEventListener('click', () => {

        const fundo = document.createElement('div');
        fundo.classList.add('lightbox');

        const foto = document.createElement('img');
        foto.src = imagem.src;
        foto.alt = imagem.alt;

        fundo.appendChild(foto);
        document.body.appendChild(fundo);

        fundo.addEventListener('click', () => {
            fundo.remove();
        });

    });

});


// ==============================
// CABEÇALHO AO ROLAR A PÁGINA
// ==============================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 80) {

        header.style.padding = "5px 0";
        header.style.background = "#08131f";

    } else {

        header.style.padding = "";
        header.style.background = "#0d1b2a";

    }

});


// ==============================
// ANIMAÇÃO AO ROLAR
// ==============================

const observador = new IntersectionObserver((itens) => {

    itens.forEach((item) => {

        if (item.isIntersecting) {

            item.target.classList.add('mostrar');

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll('section').forEach((secao) => {
    observador.observe(secao);
});


// ==============================
// MENSAGEM DO FORMULÁRIO
// ==============================

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    alert("Obrigado! Seu orçamento foi enviado com sucesso.");

    formulario.reset();

});/* ==========================
   ANIMAÇÕES
========================== */

section {
    opacity: 0;
    transform: translateY(40px);
    transition: .8s;
}

section.mostrar {
    opacity: 1;
    transform: translateY(0);
}

/* ==========================
   LIGHTBOX
========================== */

.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.9);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 9999;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
}
