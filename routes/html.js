var express = require('express');
var router = express.Router();
var pdf = require('html-pdf');
var iconv  = require('iconv-lite');

/* GET users listing. */
router.get('/', function(req,
   res, next) {
  crearPdf(req.query.html, function (file){
    res.sendFile(file);
  });
});

function crearPdf(html , callback){
  html = iconv.decode(new Buffer(html), "utf-8");
   pdf.create( html ).toFile(function(err, file) {
     if (err) {
       console.log(err);
       callback(err);
     }else{
       console.log(file.filename);
       callback(file.filename);
     }
   });
}
module.exports = router;
