var express = require('express');
var router = express.Router();

/* GET home page. */
//:id
router.get('/', function(req, res, next) {

 // const { id } = req.query
 
 const body = [
   {
  "id": 1,
  "title":"Healing at So and So",
  "date": '11-20-2019',
  "category": 'Healing',
  'description': 'This was a healing at So and So, very much cool',
  'verses': [
    'John 3:16',
    'Hebrews 4:16',
    'Romans 12:1-2'
  ]
},
{
  "id": 2,
  "title":"Miracle in Portland",
  "date": '11-21-2019',
  "category": 'Miracle',
  'description': 'God did this amazing thing in this place',
  'verses': [
    '1 John 3:16',
    'Hebrews 11:1',
    'Colossians 3:17'
  ]
},
 ];
 
//const body = [['sdfd', 2, 'dsfds'], ['fgdfgfd', 45, 'ghffgf']];

  res.status(200).json(body);

 //console.log(body);

 /*
  Promise.all(promises).then(() => {
  res.status(200).json(lists)
})
*/
 //res.status(200).json(body);
 

});

module.exports = router;
