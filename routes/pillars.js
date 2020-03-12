var express = require('express');
var router = express.Router();

/* GET home page. */
//:id
router.get('/', function(req, res, next) {

 // const { id } = req.query
 const body = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 };
 console.log(body);

 res.status(200).json(body);
 

});

module.exports = router;
