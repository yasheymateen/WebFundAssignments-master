 $(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    $('#click button').click(function(){
        alert("Hello! Looks like you selected the button!");
    });

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
    $("#fadeIn button").click(function(){
        $("#fadeIn p").fadeIn();
    });
    $("#fadeOut button").click(function(){
        $("#fadeOut p").fadeOut();
    });

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
        $("#append h1").append("Added a New One");
    })

    $('#click button').click(function(){
        alert("Hello! Looks like you selected the button!");
    })

    $('#html button').click(function(){
        $('#html p').html('<button>But now I am a fancy button</button>.'); 
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

}); 