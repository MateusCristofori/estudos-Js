// criação de promesas
const myPromise = new Promise((resolve, reject) => {
  const nome = 'mateus'

  if (nome === 'mateus') {
    resolve(`Usuário ${nome} encontrado`)
  } else {
    reject(`O usuário ${nome} não foi encontrado`)
  }
})

myPromise.then(dados => {
  console.log(dados)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
  const nome = 'lucas'

  if (!nome === 'lucas') {
    reject(`O usuário ${nome} não foi encontrado.`)
  }
  resolve(`Usuário ${nome} encontrado.`)
})

myPromise2
  .then(dados => {
    return dados.toLowerCase()
  })
  .then(dadosMinusculos => {
    console.log(dadosMinusculos)
  })

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = 'guilherme'

  if (nome === 'lucas') {
    resolve(`Usuário ${nome} encontrado`)
  }
  reject(`Usuário ${nome} não encontrado.`)
})

myPromise3
  .then(data => {
    console.log(data)
  })
  .catch(erro => {
    console.log('Aconteceu um erro: ' + erro)
  })

// Resolvendo várias promessas com o método "all()"

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok! setTimeout')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
  resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then(data => {
  console.log(data)
})

// Resolvendo várias promessas com o método "race()"

const p4 = new Promise((resolve, reject) => {
  resolve('P4 ok!')
})

const p5 = new Promise((resolve, reject) => {
  resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
  resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then(data => {
  console.log(data)
})

// fetch API
// fetch request na API do GitHub

const userName = 'MateusCristofori'
const url = fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers: {
    Accept: 'aplication/vnd.github.v3+json'
  }
})
  .then(response => {
    console.log(typeof response)
    console.log(response)
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
