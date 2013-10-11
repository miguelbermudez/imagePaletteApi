var colorthief = require('color-thief')
  , path = require('path')
  , tmp = require('tmp')
  , fs = require('fs');

epxorts.index = function(req, res) {
  res.render('index');
};

exports.palette = function(req, res) {
  var tempPath = req.files.file.path;
  var extname = path.extname(req.files.file.name);
  var targetPath;

  if (extname.toLowerCase() === '.png' || extname === '.jpg' ) {
    // create tmp file
    tmp.file ({
      mode: 0644,
      prefix: 'tmpimg-',
      postfix: extname
    }, function _tempFileCreated(err, path, fd) {
      if (err) throw err;

      //set target path for uploaded file
      targetPath = path.join('./upload', path);
      fs.rename(tempPath, targetPath, function(err) {
        if (err) throw err;
        console.log("Upload Complete!");
        //TODO: this should end here in a promised,
        //but for now we'll just get it done

      });

      console.log("tmp file: ", path);
      console.log("Filedescriptor: ", fd);
    });
  } else {
    fs.unlink(tempPath, function() {
      res.send(console.log("Only jpgs and pngs are allowed!"));
    });
  }


}
