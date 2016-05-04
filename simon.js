$(document).ready(function () {

  // Initialize variables and get initial color
  var color = getColor();
  var success = 'Good Job!';
  var missText = 'That was the wrong box - try again.';
  var boxes = ['red', 'blue', 'yellow', 'green', 'purple' ];

  // insert the boxes
  function createBoxes(boxColor) {
    $('body').append('<div class="' + boxColor + '"></div>')
  }

  for (var i = 0; i < boxes.length; i++) {
    createBoxes(boxes[i]);
  }

  // populate initial color
  $('.color').text(color);

  // color square click event handler
  $('body').on('click', 'div', function () {

    // get class of clicked object
    var boxClass = $(this).prop('class');

    // check for correct color, set message to proper result
    if (boxClass === color) {
      color = updateSuccess();
    } else {
      updateMiss(boxClass);
    }

  });

  // Update paragraphs in the event of a correct click
  // picks a new color, as well.
  function updateSuccess() {
    var newColor = getColor();

    //update results
    if ($('.results').length === 0) {
      var results = '<p class  = "results">' + success + '</p>';
      $('.instructions').after(results);
    } else {
      $('.results').text(success);
    }

    //update color
    $('.color').text(newColor);
    return newColor;
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

  // function to remove employeeID from array when an employee is deleted.
  function getColor() {
    var colorNum = Math.floor((Math.random() * 5) + 1);
    switch (colorNum) {
      case 1:
        return 'red';
      case 2:
        return 'blue';
      case 3:
        return 'yellow';
      case 4:
        return 'green';
      case 5:
        return 'purple';
    }
  }

});
