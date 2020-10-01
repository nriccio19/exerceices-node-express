import express from 'express'

const app = express()
const PORT = 7777
const IP_LOCAL = '192.168.1.23'

app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

app.get('/aboutme', (req, res) => {
    res.send('Tout sur moi ;D')
})

app.get('/aboutyou', (req, res) => {
    //res.send(` `)
    let myNav = req.headers['user-agent']
    let myIp = req.ip
    res.send(` Welcome ${myIp}, ton navigateur est ${myNav}`)
    //res.send(`votre navigateur est ${req.headers.rowHeaders}`)
})
/*process.argv[2] >= 18
    ? app.get(`/${process.argv[2]}`, (req, res) => {
          res.send(`Vous pouvez voter`)
      })
    : app.get(`/${process.argv[2]}`, (req, res) => {
          res.send(`Trop jeune pour voter`)
      })
*/

app.get('/age/:age', (req, res) => {
    const VOTE = req.params.age
    if (VOTE >= 18) {
        res.send('vous pouvez voter')
    } else {
        res.send('Trop jeune pour voter')
    }
})

app.get('/palindrome/:mot', (req, res) => {
    const palindrome = req.params.mot

    if (palindrome === palindrome.split('').reverse().join('')) {
        res.send('is a palindrome')
    } else {
        res.send('is not a palindrome')
    }
})

app.get('/oddtest/:number', (req, res) => {
    const number = req.params.number
    if (number % 2) {
        res.send(`C'est un nombre impair`)
    } else {
        res.send(`C'est un nombre pair`)
    }
})

app.listen(PORT, IP_LOCAL, () => {
    console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
