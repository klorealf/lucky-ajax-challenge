$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery

  $('#die_roll_form').on('submit', function(e) {
    e.preventDefault();

    var $form = $(e.target);
    var url = $form.attr("action");
    var method = $form.attr("method");
    var data = $form.serialize();
    //var url =  $("#die_roll_id").attr("action")

    $.ajax({
      url: url,
      method: method,
      data: data
    })
    .done(function(response){
      $('#die_container').html(response);

    })
  })
});
