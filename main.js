// Initialize some global variables to be used in the script

$ball = $('.ball');
$document = $(document);
$initialX = 0;
$initialY = 0;
$finalX = 0;
$finalY = 0;

$ball.on('mousedown', dragOnMouseDown);

function dragOnMouseDown(e) {
  e.preventDefault();
  // Get the initial mouse position as long as it's clicked
  $initialX = e.pageX;
  $initialY = e.pageY;

  // Destroy the event when the mouse is released
  $document.on('mouseup', destroyDragOnMouseDown);

  // Move the ball as long as the mouse is still pressed
  $document.on('mousemove', moveBall);
}

function moveBall(e) {
  e.preventDefault();
  $finalX = $initialX - e.pageX;
  $finalY = $initialY - e.pageY;
  $initialX = e.pageX;
  $initialY = e.pageY;

  // Set the ball new position
  $ball.css({
    'top': `${$ball.offset().top - $finalY}px`,
    'left': `${$ball.offset().left - $finalX}px`
  });
}

// Destroy both events usign .off() method
function destroyDragOnMouseDown() {
  $document.off('mouseup');
  $document.off('mousemove');
}