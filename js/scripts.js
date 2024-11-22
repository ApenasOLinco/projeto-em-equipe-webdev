// Criação dos carrosséis
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                window.dispatchEvent(new Event('resize'));
            }
        }
    })
    console.log("Created!");
});


// Obter formulário inalterado
const formularioVazio = document.querySelector(".contact-form").innerHTML
const Modos = {
    MODOFORM: "MODOFORM", // Representa o usuário na página de contato com o formulário não enviado
    MODOMOSTRAR: "MODOMOSTRAR" // Representa o usuário na página de output do formulário
}

let modoAtual = Modos.MODOFORM;

function clicou() {
    const botao = document.getElementById("submit-btn")

    /* Separar as responsabilidades de processamento de clique para que o código fique mais limpo */
    if(modoAtual === Modos.MODOFORM) {
        enviarForm()
        modoAtual = Modos.MODOMOSTRAR
        botao.innerHTML = "Novo Formulário"
    } else {
        novoForm()
        modoAtual = Modos.MODOFORM
        botao.innerHTML = "Enviar Formulário"
    }
}

function enviarForm() {
    const formulario = document.querySelector(".contact-form")
    const nome = formulario.querySelector("#nome").value
    const email = formulario.querySelector("#email").value
    const assunto = formulario.querySelector("#assunto").value
    const mensagem = formulario.querySelector("#mensagem").value

    let output = `
        <div id="output-form">
            NOME: ${nome}<br>
            EMAIL: ${email}<br>
            ASSUNTO: ${assunto}<br>
            MENSAGEM: ${mensagem}<br>
        </div>
    `
    formulario.innerHTML = output
}

function novoForm() {
    const formulario = document.querySelector(".contact-form")
    formulario.innerHTML = formularioVazio
}