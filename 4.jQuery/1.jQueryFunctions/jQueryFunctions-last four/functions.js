$(document).ready(function(){
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