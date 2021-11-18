const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! staging!');
});
app.listen(8080);
