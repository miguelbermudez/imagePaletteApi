var colorThiefOutput = {};
var colorThiefOuputHTML;
var start = Date.now();

Dropzone.options.myAwesomeDropzone = {
  thumbnailHeight: 300,
  clickable: false,
  init: function(file, response) {
    this.on("success", function(file, response) {
      console.log('response: ', response);
      colorThiefOutput = {
        palette: response,
      };
      colorThiefOuputHTML = Mustache.to_html($('#color-thief-output-template').html(), colorThiefOutput);
      var $imageSection = $('#info');
      $imageSection.html('');
      $imageSection.addClass('with-color-thief-output');
      $imageSection.append(colorThiefOuputHTML).slideDown();
    });

    this.on('drop', function(evt) {
      this.removeAllFiles(true);
    });
  }
};