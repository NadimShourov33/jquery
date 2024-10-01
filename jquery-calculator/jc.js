$(document).ready(function(){
    //take html tags with assigned values and set to variable.
    //set textarea to the value of "blank", and add to values.
    
     $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function(){
          var v = $(this).val();
      var total = $('textarea').val($('textarea').val() + v); 
      });
    //clicking equal sign evaluates the textarea
    $('#equal').click(function(){
      $('textarea').val(eval($('textarea').val()));
      });
    $('#clear').click(function(){
        $('textarea').val('');
      });
    $('#backspace').click(function(){
        $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
      });
  });
  $( "#hide-the-button" ).click(function() {
    $( "#calc" ).hide( "drop", { direction: "down" }, "slow" );
  });