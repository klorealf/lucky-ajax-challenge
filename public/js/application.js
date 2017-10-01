$(document).ready(function() {
 $("#form_id").on("submit", function(event) {
  event.preventDefault();

  var $form = $(event.target);
  var url = $form.attr("action");
  var method = $form.attr("method");
  var data = $form.serialize();

  $.ajax ({
   method: method,
   url: url,
   data: data
   })

  .done(function(response) {
   $("#die-container").html(response);
   })
 })
});

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery


