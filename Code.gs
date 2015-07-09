function onInstall(e){}

var PREFERENCES = [
  {
    fileId: '1M0fj3QW_ULyEHdsLRZxEMTMHPOBVhtzTpItILzMJLkE',
    toFolderId: '0B9Ny4eY76JvUfmtvUWhNanFUY3VDcWstTVVBcHlBNlZBOEV5azdMMUx3cGY3dXBpSmluR28'
  },
  {
    fileId: '1YKTWpNJtIPxEr1JDBIujTalgCArP4gTMtDNO46UAS10',
    toFolderId: '0B9Ny4eY76JvUfmtvUWhNanFUY3VDcWstTVVBcHlBNlZBOEV5azdMMUx3cGY3dXBpSmluR28'
  }
]

function batch(){
  for(var item in PREFERENCES){
    exportFile_(PREFERENCES[item]['fileId'], PREFERENCES[item]['toFolderId'])
  }
}
