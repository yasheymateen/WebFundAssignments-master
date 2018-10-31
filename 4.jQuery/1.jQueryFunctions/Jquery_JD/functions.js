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
})