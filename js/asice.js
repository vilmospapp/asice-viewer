var pdfs = Array();
var $result = $("#result");
    $("#file").on("change", function(evt) {
// remove content
$result.html("");
// be sure to show the results
$("#fileDetails").removeClass("hidden").addClass("show");

// Closure to capture the file information.
function handleFile(f) {
    var loadedFile=$('#loadedFileText').val();
    
    var $title = $("<p>", {
        text : loadedFile + ':' +f.name
    });
    
    var $fileContent = $("<ul>");
    $result.append($title);
    $result.append($fileContent);

    JSZip.loadAsync(f) // 1) read the Blob
    .then(function(zip) {
        

        var i = 0;
        zip.forEach(function (relativePath, zipEntry) {  // 2) print entries
          if (zipEntry.name.endsWith(".pdf")) {
              pdfs.push(zipEntry);

              $fileContent.append($('<li>', {
               "class" : "fa fa-file-pdf-o",
               "style" : "font-size:24px;color:red"
             }).append($('<a>', {
               href : '#',
               text : zipEntry.name,
               onclick : 'loadPDF('+i+')'
             }))).append('<br/>');
            
            i++;
          }
        });
    }, function (e) {
        $result.append($("<div>", {
            "class" : "alert alert-danger",
            text : "Error reading " + f.name + ": " + e.message
        }));
    });
}

var files = evt.target.files;
for (var i = 0; i < files.length; i++) {
    handleFile(files[i]);
}
});

function loadPDF(idx) {
  var zipEntry = pdfs[idx];
  zipEntry.async('base64').then(function(fileData){
    $("#pdf").html('<embed id="content" name="'+ zipEntry.name + '" style="width: 100%;height: 100%;" src="data:application/pdf;base64,'+ fileData + '">');       
    });
}