var express = require('express');
var router = express.Router();
var pdf = require('html-pdf');
var iconv  = require('iconv-lite');
var multer = require('multer');
var upload = multer({ dest: '/tmp/' });
var fs = require('fs');

router.post('/', upload.single('html') , function(req,res, next) {
  crearPdf(req.file, function (file){
    res.sendFile(file);
  });
});

function crearPdf( fileHtml , callback){
  fs.readFile( fileHtml.path, {encoding: 'utf-8'}, function (err , data){   
    pdf.create( data ).toFile(function(err, file) {
      if (err) {
        console.log(err);
        callback(err);
      }else{
        callback(file.filename);
      }
    });
  });
}
module.exports = router;
