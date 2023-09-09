const express = require('express')
const path = require('path')

const app = express();
index_path = 'C:/Users/Dell/OneDrive/Desktop/Spotify Clone/index.html'
app.use(express.static(__dirname))
app.get('/', (req, res) => {
    res.sendFile(index_path)
})

app.listen(3000)