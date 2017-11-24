const express = require('express')
const Raven = require('raven')
const app = express()
const SENTRY_DSN = process.env.SENTRY_DSN
console.log(SENTRY_DSN)
Raven.config(SENTRY_DSN).install()

app.use(Raven.requestHandler())

app.get('/', (req, res) => res.send('hello world'))
app.get('/undefined', (req, res) => res.send(blah))
app.get('/uncaught_exception', (req, res) => {
  throw new Error('this exception goes to sentry')
})

app.use(Raven.errorHandler())

app.listen(4568, () => console.log('listening on port 4568'))
