$('#addItem').submit(function(event) {
	event.preventDefault();

	$(this).children('input:text').each(function(index, elem){
		var value = $(elem).val();
		$('ul').append('<li><span>X</span>' + value + '</li>');
		$(elem).val('');
	});
});


$('#writeHere').on('click', 'span',  function(event) {
	$(this).parent().remove();

});



$('#clearList').click(function(event) {
	$('ul').html("");
});



