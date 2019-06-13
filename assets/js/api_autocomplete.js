$(function () {
	var country_shipping = {
		'AT': {
			name: "Austria",
			cost: 3 + '\u20AC'
		},
		'FR': {
			name: "France",
			cost: 2 + '\u20AC'
		},
		'DE': {
			name: "Germany",
			cost: 2.5 + '\u20AC'
		},

		'ES': {
			name: "Spain",
			cost: 5.45 + '\u20AC'
		},
		'UK': {
			name: "United Kingdom",
			cost: 2.75 + '\u00A3'
		},
	};

	$("#select-country").append($(new Option('Country')).attr('disabled', 'disabled').attr('selected', true));
	for (const key in country_shipping) {

		$("#select-country").append($(new Option(country_shipping[key].name, key)));
	}
	$("#city-autocomplete").keyup(function () {
		let state_code = $("#select-country").val();
		$("#shipping-cost").val(country_shipping[state_code].cost);
	});



	$("#city-autocomplete").autocomplete({
		source: function (request, response) {
			let code_country = $("#select-country").val();
			jQuery.getJSON(
				"http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=" + code_country + "&q=" + request.term,
				function (data) {
					response(data);
				}
			);
		},
		minLength: 3,
		select: function (event, ui) {
			var selectedObj = ui.item;
			$("#city-autocomplete").val(selectedObj.value);
			return false;
		},
		open: function () {
			$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close: function () {
			$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
		}
	});
	$("#city-autocomplete").autocomplete("option", "delay", 100);
});