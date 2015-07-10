function onInstall(e){}

var PREFERENCES = [
  {
    fileId: 'ID_GOOGLE_DRIVE_TYPE_FILE',
    toFolderId: 'ID_FOLDER'
  },
  {
    fileId: 'ID_GOOGLE_DRIVE_TYPE_FILE',
    toFolderId: 'ID_FOLDER'
  }
]

function batch(){
  for(var item in PREFERENCES){
    exportToPDF_(PREFERENCES[item]['fileId'], PREFERENCES[item]['toFolderId'])
  }
}
