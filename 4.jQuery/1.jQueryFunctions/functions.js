$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    $('#before button').click(function(){
        $("#before h1").before("Before The Header!");
    })

    $("#after button").click(function(){
        $("#after h1").after("After The Header");
    })
    
    $("#append button").click(function(){
        $("#append").append("<p>Added a New Paragraph!</p>");
    })

    $('#click button').click(function(){
            alert("Hello! Looks like you selected the button!");
    });
    
    $("#hide button").click(function(){
            $("#hide p").hide();
    });
    
    $("#show button").click(function(){
            $("p").show();
    });
    
    $("#toggle button").click(function(){
            $("p").toggle();
    });
    
    $("#slideDown button").click(function(){
            $("p").slideDown();
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
    $('#attr button').click(function(){
        $('#attr span').attr('style','background-color:blue'); 
    });

    $('#val button').click(function(){
        $('#val form input').val('You are now changed'); 
    });

    $('#text button').click(function(){
        $('#text p').text($('#text button').text()); 
    });

    $('#html button').click(function(){
        $('#html p').html('<button>But now I am a fancy button</button>.'); 
    });

});