$(document).ready(function() {
// ----- Hover script -----
  $("#numberChart td").hover(function(){
    $(this).addClass("purple");
  }, function(){
    $(this).removeClass("purple");
  });

// ----- Number Picker -----
  var computerNumber = Math.floor((Math.random() * 100) + 1);

  var clickCount = 7;

  var clickedVal = $('td').on('click', function(event){
    console.log(this.innerText);
    var value = this.innerText;

    if(value == computerNumber){
      $(this).css("background-color", "#27ae60");
      alert("Winner!");
      location.reload();
     } else if (clickCount == 1){
      alert("Game Over");
      location.reload();
    };

// ---------- RADIAL BACKGROUND ----------
// background-image: radial-gradient(farthest-corner at 600px 45px , #FF0000 0%, #0000FF 100%);

// clicked = 1
// top = 27       45
// left = 677     45

// clicked = 10
// top = 27
// left = 1181

// 45, 45

// var position = $(this).position();
// var top = position["top"]
// var left = position["left"]
// console.log(position["top"]);
// console.log(position["left"]);

// $("#tabla").css("background-image",  "radial-gradient(farthest-side, "+top+"px "+left+"px, #FF0000, #0000FF)");

// if((value >= (computerNumber + 6)) || (value <= (computerNumber - 6))){
//   $(this).css("background-color", "linear-gradient(to right, #1e5799 0%,blue 0%, red 100%)");
//   clickCount -= 1;
//   $('.num_remaining').html(clickCount);
// } else if((value <= (computerNumber + 6)) || (value >= (computerNumber - 6))){
//   $(this).css("background-color", "linear-gradient(to right, #1e5799 0%,blue 0%, red 100%)");
//   clickCount -= 1;
//   $('.num_remaining').html(clickCount);
// }

// ---------- LINEAR GRADIENT ----------
    if(value < computerNumber){
      var num = (computerNumber-value);
      console.log(computerNumber)

      $(this).css("background", "linear-gradient(to right, #1e5799 50%, #c0392b 50%");
      clickCount -= 1;
      $('.num_remaining').html(clickCount);

      } else if(value > computerNumber){
      var num = Math.abs((computerNumber-value));
      console.log(computerNumber);

      $(this).css("background", "linear-gradient(to left, #1e5799 50%, #c0392b  50%");
      clickCount -= 1;
      $('.num_remaining').html(clickCount);
      }

  });

});





