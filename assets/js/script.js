$(document).ready(function(){
    $( function() {
        var icons = {
          header: "ui-icon-circle-arrow-e",
          activeHeader: "ui-icon-circle-arrow-s"
        };
        $( "#accordion" ).accordion({
          icons: icons
        });
       
      } );

});