$(document).ready(function () {
    $("#die-roll").on("submit", function(event) {
        event.preventDefault();
        var $form = $(event.target);
        $.ajax({
            method: $form.attr("method"),
            url: $form.attr("action"),
            data: $form.serialize()
        })
        .done(function(response) {
            $("#die-container").html(response);
        })
    })
});
