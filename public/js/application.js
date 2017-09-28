$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery
  
    // with this event listener we can control what happens
    // when this specific form is submitted:
    $("#die-roll-post-form").on("submit", function(event) {
        event.preventDefault();
        
        // let's grab the form as a jQuery object,
        // so we can call jQuery methods on it:
        var $form = $(event.target);
        
        // now let's get what we need from the form:
        // we need the method, the url, and the data
        var url = $form.attr("action");
        var method = $form.attr("method");
        // what does this serialize() method do when called on a form?
        var data = $form.serialize();
        
        // now let's take what we got from the form
        // and generate & send an asych HTTP request via $.ajax:
        $.ajax({
            method: method,
            url: url,
            data: data
        })
        .done(function(response) {
            // in here we will have the response from the server
            // which we can then place on the DOM where we want it to be:
            $("#die-container").html(response);
        })
    })
});
