var express = require('express');
const router = express.Router();


 


var app = express();

app.use(express.static('public'));
app.use("/", router);

app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.listen(3000);
console.log('listening on port 3000');







 
 

