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
const formularioNovo = document.querySelector(".contact-form").innerHTML

function clicou() {
    const formulario = document.querySelector(".contact-form")
    const nome = formulario.querySelector("#nome").value
    console.log(nome)
    const email = formulario.querySelector("#email").value
    console.log(email)
    const assunto = formulario.querySelector("#assunto").value
    console.log(assunto)
    const mensagem = formulario.querySelector("#mensagem").value
    console.log(mensagem)

    let output = `
        <div id="output-form">
            NOME: ${nome}<br>
            EMAIL: ${email}<br>
            ASSUNTO: ${assunto}<br>
            MENSAGEM: ${mensagem}<br>
        </div>
    `

    formulario.innerHTML = output

    // Setar botão para voltar ao form
    const botao = document.querySelector("#submit-btn")
    botao.innerHTML = "Novo Formulario"
    botao.setAttribute("onclick", "novoForm()")
}

function novoForm() {
    const formulario = document.querySelector(".contact-form")
    formulario.innerHTML = formularioNovo
    const botao = document.querySelector("#submit-btn")
    botao.innerHTML = "Enviar"
}