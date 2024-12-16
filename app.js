$(document).ready(function() {
    $('#calendar').fullCalendar({
      firstDay: 1, // Start the week on Monday
      height: 500, // Adjust the height
      selectable: true, // Enable selecting a date range
      selectHelper: true, // Highlight the range during selection

// Open modal on selecting a date range
select: function(start, end) {
        // Show modal
        $('#eventModal').css("display", "block");

        // Pre-fill start and end dates in modal
        $('#eventStart').val(start.format('YYYY-MM-DDTHH:mm'));
        $('#eventEnd').val(end.format('YYYY-MM-DDTHH:mm'));
      }
    });

    // Close the modal when clicking on the close button
    $('.close-btn').on('click', function() {
      $('#eventModal').css("display", "none");
    });

    // Close the modal when clicking outside of it
    $(window).on('click', function(event) {
      if ($(event.target).is('#eventModal')) {
        $('#eventModal').css("display", "none");
      }
    });

    // Handle the form submission
    $('#eventForm').on('submit', function(event) {
      event.preventDefault();

      // Get form data
      let title = $('#eventTitle').val();
      let description = $('#eventDescription').val();
      let start = $('#eventStart').val();
      let end = $('#eventEnd').val();

      // Add the event to the calendar
      $('#calendar').fullCalendar('renderEvent', {
        title: title,
        start: start,
        end: end,
        description: description // You can display this later
      });

      // Close modal and reset form
      $('#eventModal').css("display", "none");
      $('#eventForm')[0].reset();
    });

    $('#viewSelect').change(function() {
        var selectedView = $(this).val(); // Obtenir la valeur sélectionnée
        $('#calendar').fullCalendar('changeView', selectedView); // Appliquer la nouvelle vue
    });
    
  });