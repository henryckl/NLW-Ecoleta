import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  console.log('Listagem de usuarios')

  res.send('Hello')
})

app.listen(4000)