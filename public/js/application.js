$(document).ready(function () {

  $('#die_roll_form').on('submit', function(event) {
    event.preventDefault();

    var $form = $(event.target);
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
