/* global moment */

// When user clicks add-btn
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newBaller = {
    id: $("#id")
      .val()
      .trim(),
    team: $("#team")
      .val()
      .trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBaller);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBaller)
    // On success, run the following code
    .then(function() {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newBaller.id + " chirped: </p>");
      row.append("<p>" + newBaller.team + "</p>");
      row.append(
        "<p>At " + moment(newBaller.created_at).format("h:mma on dddd") + "</p>"
      );

      $("#chirp-area").prepend(row);
    });

  // Empty each input box by replacing the value with an empty string
  $("#id").val("");
  $("#team").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append(
        "<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>"
      );

      $("#chirp-area").prepend(row);
    }
  }
});
