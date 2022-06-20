function convertPdfToDocs() {
  var sourceFolderId = "exampleSourceId";
  var destinationFolderId = "exampleDestinationId";
  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var files = sourceFolder.getFilesByType(MimeType.PDF);
  while(files.hasNext()){
    var file = files.next();
    var fileBlob = file.getBlob();
    var resource = {
      title: fileBlob.getName(),
      mimeType: "MimeType.PDF",
      parents: [{id:sourceFolderId}]
    };
    var options = {
      ocr: true,
      supportsAllDrives: true
    };

  var docFile = Drive.Files.insert(resource, fileBlob, options);
  }
}