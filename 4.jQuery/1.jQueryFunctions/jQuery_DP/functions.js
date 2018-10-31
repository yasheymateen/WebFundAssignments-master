 $(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });
    $('#click button').click(function(){
        alert("Hello! Looks like you selected the button!")
    });
    $("#slideup button").click(function(){
        $("#slideup p").slideUp();
    }); 
    $("#slidetoggle button").click(function(){
        $("#slidetoggle p").slideToggle();
    });
    $("#fade button").click(function(){
        $("#fade p").fadeIn();
    });
    $("#fade button").click(function(){
        $("#fade p").fadeOut();
    });
}); 