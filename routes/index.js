
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.demo = function(req, res) {
  res.render('demo');
};
