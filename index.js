const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!How are you doing? Today is Tuesday... Hello Gilbert, today you are presenting your case study! Tooby is here')
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
