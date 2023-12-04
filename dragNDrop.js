// Define the variables we need
var diffX, diffY, theElement;

// The function grabber for holding the word
function grabber(event) {
    // Set the global variable for the element to be moved
    theElement = $(this);

    // Determine the position of the word to be grabbed, first removing the units from left and top
    var posX = parseInt(theElement.css('left'));
    var posY = parseInt(theElement.css('top'));

    // Compute the difference between where it is and where the mouse click occurred
    diffX = event.clientX - posX;
    diffY = event.clientY - posY;

    // Now register the event handlers for moving and dropping the word
    $(document).on({
        mousemove: mover,
        mouseup: dropper
    });

    // Stop propagation of the event and stop any default browser action
    event.stopPropagation();
    event.preventDefault();
}

// Function to change the position of the word on holding it
function mover(event) {
    // Compute the new position, add the units, and move the word
    theElement.css({
        left: (event.clientX - diffX) + "px",
        top: (event.clientY - diffY) + "px"
    });

    // Prevent propagation of the event
    event.stopPropagation();
}

// Drop down the word after it is added
function dropper(event) {
    // Unregister the event handlers for mouseup and mousemove
    $(document).off({
        mouseup: dropper,
        mousemove: mover
    });

    // Prevent propagation of the event
    event.stopPropagation();
}

// Attach the grabber function to the mousedown event of the elements you want to make draggable
$(".draggable-element").on("mousedown", grabber);
