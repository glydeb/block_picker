$(document).ready(function () {

  // Initialize variables and get initial color
  var success = 'Good Job!';
  var missText = 'That was the wrong box - try again.';
  var boxes = ['red', 'blue', 'yellow', 'green', 'purple'];
  var color = getColor(boxes);

  // Create the boxes
  for (var i = 0; i < boxes.length; i++) {
    createBoxes(boxes[i]);
  }

  // populate initial color
  $('.color').text(color);

  // color square click event handler
  $('body').on('click', 'div', function () {

    // get div & class of clicked object
    var boxClass = $(this).prop('class');

    // check for correct color, set message to proper result
    if (boxClass === color) {
      $(this).css('background-color', '#EEE');
      setTimeout(updateSuccess, 2000, boxClass);
      $(this).children('img').fadeIn(400).delay(800).fadeOut(700);
    } else {
      updateMiss(boxClass);
    }

  });

  // Function to be used with setTimeout
  function setColorBack(color) {
  }

  // Update paragraphs in the event of a correct click
  // picks a new color, as well.
  function updateSuccess(clickedColor) {
    var selector = '.' + clickedColor;
    $(selector).css('background-color', clickedColor);
    color = getColor(boxes);

    //update results
    if ($('.results').length === 0) {
      var results = '<p class  = "results">' + success + '</p>';
      $('.instructions').after(results);
    } else {
      $('.results').text(success);
    }

    //update color
    $('.color').text(color);
  }

  // Update results paragraph when an incorrect click is seen.
  function updateMiss() {
    if ($('.results').length === 0) {
      var results = '<p class  = "results">' + missText + '</p>';
      $('.instructions').after(results);
    } else {
      $('.results').text(missText);
    }

  }

  //UTILITY FUNCTIONS
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  // Function to insert a box
  function createBoxes(boxColor) {
    $('body').append('<div class="' + boxColor + '"></div>');
    $el = $('body').children().last()
    $el.css('background-color', boxColor);
    $el.append('<img src="thumbs-up.png" />');
  }

  // function to remove employeeID from array when an employee is deleted.
  function getColor(colorArray) {
    var colorNum = randomNumber(0, (colorArray.length - 1));
    return colorArray[colorNum];
  }

});
