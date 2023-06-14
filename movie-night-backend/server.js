const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ "users": ["bananas", "maça", "canela"] })
})

app.listen(5000, () => { console.log("server a correr yo") })