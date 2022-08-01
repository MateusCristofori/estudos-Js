// // sintaxe

// function primeiraFuncao() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Esperou isso aqui!')
//       resolve()
//     }, 2000)
//   })
// }

// async function segundaFuncao() {
//   console.log('iniciou')
//   await primeiraFuncao()
//   console.log('terminou')
// }

// segundaFuncao()

// pratico

function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(dados => dados.json())
    .catch(erro => console.log(erro))
}

async function showUserName(id) {
  const user = await getUser(id)

  console.log(`O nome do usuário é: ${user.data.first_name}`)
}

showUserName(3)
