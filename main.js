'use strict'

const funcionarios = [{
        nome: "Maria Souza",
        cargo: "Designer",
        imagem: "maria.jpg"
    },
    {
        nome: "João Silva",
        cargo: "DBA",
        imagem: "joao.jpg"
    },
    {
        nome: "Hugo Pereira",
        cargo: "Front-end",
        imagem: "hugo.jpg"
    },
    {
        nome: "Ana Maria",
        cargo: "Back-end",
        imagem: "ana.jpg"
    }
]


// const limite = funcionarios.length
// for (let i = 0; i < limite; i++) {
//     console.log(`ID: ${i} -- ${funcionarios[i].nome}`)
// }

const criarCard = (funcionario) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${funcionario.imagem}`
    imagem.alt = funcionario.name

    const name = document.createElement('h2')
    name.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.replaceChildren(imagem, name, cargo)

    return card
}

// variavelQueRecebe
const mostrarCards = (funcionario) => {

    const cardContainer = document.getElementById('card-container')
    const card = criarCard(funcionario)
    cardContainer.appendChild(card)
}
funcionarios.forEach(mostrarCards)

