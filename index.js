const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! from staging!');
});
app.listen(8080);
