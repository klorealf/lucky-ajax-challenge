$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery

  $("#roll-die-form").on("submit", function(event) {
      event.preventDefault();

      // debugger;

// The attr enclosed in the () is referencing the method and action within the index.erb
      var $form = $(event.target);
      var method = $form.attr("method");
      var url = $form.attr("action");
      //serialize is grabbing the data from the form
      var data = $form.serialize();

      //console.log("hey");

      $.ajax({
        method: method, // this is "post"
        url: url, // this is "rolls"
        data: data
      })

      .done(function(response) {
        debugger;
        $("#die-container").html(response);
      })
    })
  });


