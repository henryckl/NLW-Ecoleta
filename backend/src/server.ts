import express from 'express'

const app = express()

app.get('/user', () => {
  console.log('Listagem de usuarios')
})

app.listen(4000)