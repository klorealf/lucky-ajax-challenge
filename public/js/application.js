$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
	$('#action-form').on('submit', function(event){

  //   2- prevent the default action for that event from happening
  	event.preventDefault();

  //   3- use jQuery to submit an AJAX post to the form's action
  	var $form = $(this);
  	var request = $.ajax({
  		url: $form.attr('action'),
  		method: $form.attr('method'),
  		data: $form.serialize()
  	});
  	  //   4- when the AJAX post is done, display the new die roll using jQuery
  	  request.done(function(response){
  	  	console.log(response);
  	  	$('#die-container').html(response);
  	  });
  	});
  });

