function getExportToPDF_(id) {
  try{
    var f = Drive.Files.get(id);
    return {
      name: f.title + '.pdf',
      url: f.exportLinks['application/pdf']
    };
  }catch(e){
    Logger.log(e);
    return null
  }
}

function saveFromPdfURLToFolder_(export, id){
  var options = {
    method      : "get",
    headers     : {"Authorization": "Bearer " + ScriptApp.getOAuthToken()},
    muteHttpExceptions:true,
  };
  var fetch = UrlFetchApp.fetch(export.url, options);
  var b = fetch.getBlob();
  var f = DriveApp.createFile(b);
  try{
    var d = DriveApp.getFolderById(id);
    moveToFolder_(f, d);
  }catch(e){
  }
  f.setName(export.name)
  return f;
}

function moveToFolder_(file, folder){
  folder.addFile(file);
  var r = DriveApp.getRootFolder();
  r.removeFile(file);
}

function exportFile_(fileId, toFolderId){
  var export = getExportToPDF_(fileId);
  if(export) {
    saveFromPdfURLToFolder_(export, toFolderId)
  }
}