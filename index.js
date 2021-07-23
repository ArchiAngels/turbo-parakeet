const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'dist')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(PORT);