$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
    //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery
  $("#target-form").on("submit", function(event){
    event.preventDefault();
    //console.log($(event.target));

    var $form = $(event.target);
    var data = $form.serialize();

    $.ajax({
      method: 'post',
      url: '/rolls',
      data: data
    })
    .done(function(response){
      $("#die-container").html(response);
    })
    })


  });

