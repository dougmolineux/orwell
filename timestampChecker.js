var sh = require('shelljs');

exports.checkFolders = (folder) => {
  var count = 0;
  function annotateFolder (folderPath) {
    sh.cd(folderPath);
    var files = sh.ls() || [];
    for (var i=0; i<files.length; i++) {
      var file = files[i];
      count++;
    }
  }
  if (folder)
    annotateFolder(folder);
    // annotateFolder(process.argv.slice(2)[0]);
  else {
    console.log('There is no folder');
  }

  console.log(count);

}
