$(document).ready(function () {
  $("#die_roll_post").on("submit", function(event) {

    event.preventDefault()

    var $form = $(event.target)
     var url = $form.attr("action");
     var method = $form.attr("method");
     var data = $form.serialize();

    $.ajax({
      url: url,
      method: method,
      data: data

    })

    .done(function(response) {

      $("#die").children("span").text(response);
    })
  })

});
