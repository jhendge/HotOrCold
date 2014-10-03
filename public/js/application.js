$(document).ready(function() {
// ----- Hover script -----
  $("#numberChart td").hover(function(){
    $(this).addClass("purple");
  }, function(){
    $(this).removeClass("purple");
  });

// ----- Number Picker -----
  var computerNumber = Math.floor((Math.random() * 100) + 1);

  var clickCount = 10;

  var clickedVal = $('td').on('click', function(event){
    console.log(this.innerText);
    var value = this.innerText;

    if(value == computerNumber){
      $(this).css("background-color", "#27ae60");
      alert("Winner");
      location.reload();
    }

    if(clickCount == 1){
      alert("Game Over");
      location.reload();
    }

    // if((value >= (computerNumber + 6)) || (value <= (computerNumber - 6))){
    //   $(this).css("background-color", "linear-gradient(to right, #1e5799 0%,blue 0%, red 100%)");
    //   clickCount -= 1;
    //   $('.num_remaining').html(clickCount);
    // } else if((value <= (computerNumber + 6)) || (value >= (computerNumber - 6))){
    //   $(this).css("background-color", "linear-gradient(to right, #1e5799 0%,blue 0%, red 100%)");
    //   clickCount -= 1;
    //   $('.num_remaining').html(clickCount);
    // }

    if(value < computerNumber){
      var num = (computerNumber-value);
      console.log(computerNumber)

      $(this).css("background", "linear-gradient(to right, #1e5799 0%,blue " + num + "%, red 100%)");
      clickCount -= 1;
      $('.num_remaining').html(clickCount);

      } else if(value > computerNumber){
      var num = Math.abs((computerNumber-value));
      console.log(computerNumber);

      $(this).css("background", "linear-gradient(to right, #1e5799 0%,red " + num + "%, blue 100%)");
      clickCount -= 1;
      $('.num_remaining').html(clickCount);
      }

  });

});



// Formal grammar: radial-gradient( [[ circle || <length> ] [ at <position> ]? , | [ ellipse || [<length> | <percentage> ]{2}] [ at <position> ]? , | [ [ circle | ellipse ] || <extent-keyword> ] [ at <position> ]? , | at <position> , <color-stop> [ , <color-stop> ]+ ) \------------------------------------------------------------------------------/\--------------------------------/ Definition of the contour, size and position of the ending shape List of color stops where <extent-keyword> = closest-corner | closest-side | farthest-corner | farthest-side and <color-stop> = <color> [ <percentage> | <length> ]? Definition of the ending shape radial-gradient( circle, … ) /* Synonym of radial-gradient( circle farthest-corner, …) */ radial-gradient( ellipse, … ) /* Synonym of radial-gradient( ellipse farthest-corner, …) */ radial-gradient( <extent-keyword>, … ) /* It draws a circle */ radial-gradient( circle radius, … ) /* A centered circle of the given length. It can't be a percentage */ radial-gradient( ellipse x-axis y-axis, … ) /* The two semi-major axis are given, horizontal, then vertical */ Definition of the position of the shape radial-gradient (… at <position>, … ) Definition of the color stops radial-gradient (…, <color-stop>) radial-gradient (…, <color-stop>, <color-stop>) 

// background-image: radial-gradient(farthest-corner at 45px 45px , #FF0000 0%, #0000FF 100%);



