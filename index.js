const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! from staging 9Nov!');
});
app.listen(8080);
