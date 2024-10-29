$(document).ready(function () {
    $.ajax({
      url: "test.php", // PHP file to retrieve airport codes
      method: "GET",
      success: function (data) {
        $("#airport").html(data); // Populate the <select> with the received options
      },
    });
  });
  $(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'test.php',
        dataType: 'json',
        success: function(data) {
            // Populate both selects
            $.each(data, function(key, value) {
                $('#airport1').append('<option value="' + value.ICAO + '">' + value.ICAO + ': ' + value.name + '</option>');
                $('#airport2').append('<option value="' + value.ICAO + '">' + value.ICAO + ': ' + value.name + '</option>');
            });
        }
    });
});