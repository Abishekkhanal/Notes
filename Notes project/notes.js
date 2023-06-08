document.addEventListener('DOMContentLoaded', function() {
    var pdfLinks = document.querySelectorAll('a[data-url]');
    for (var i = 0; i < pdfLinks.length; i++) {
      pdfLinks[i].addEventListener('click', loadPdf);
    }
  });
  
  function loadPdf(event) {
    event.preventDefault();
    var url = event.target.getAttribute('data-url');
    document.getElementById('pdf-iframe').src = url;
  }
  