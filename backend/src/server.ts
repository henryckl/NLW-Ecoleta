import express from 'express'

const app = express()
app.use(express.json())
app.get('/users', (req, res) => {
  console.log('Listagem de usuarios')

  res.json({ message: 'Hello' })
})

app.listen(4000)