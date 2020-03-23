var express = require('express');
const router = express.Router();

const model= require('./model.js');
 


var app = express();

app.use(express.static('public'));
app.use("/", router);

app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.listen(3000);
console.log('listening on port 3000');

router.route("/fetch").get(function(req, res) {
  model.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
 
    }
  });
});