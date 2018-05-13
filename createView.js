var path = require('path');
var fs = require('fs');
var directoryPath = path.join(__dirname, 'video');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  console.log("files", files);
  let html = `<img id='pic' src='video/${files[0]}'>`;
  files = files.map( (f) => `'video/${f}'` )
  html += `<script>
    var files = [${files.join()}];
    var c = 0;
    setInterval(function(){
      document.getElementById("pic").src=files[c++];
      if(c == files.length) c = 0;
    }, 100);
  </script>`
  fs.writeFile('view.html', html, (err) => {
      if (err) throw err;
      console.log(html)
      console.log('view.html created');
  });
});
