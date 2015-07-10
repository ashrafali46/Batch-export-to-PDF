function exportToPDF_(fileId, folderId){
  var source = DriveApp.getFileById(fileId)
  var blob = source.getAs('application/pdf');
  var file = DriveApp.createFile(blob);
  file.setName(source.getName() + '.pdf');
  if(folderId) {
    try{
      var d = DriveApp.getFolderById(folderId);
      moveToFolder_(file, d);
    }
    catch(e){
    }
  }
  return file;
}

function moveToFolder_(file, folder){
  folder.addFile(file);
  DriveApp.getRootFolder().removeFile(file);
}