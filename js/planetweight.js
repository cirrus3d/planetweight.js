var Mercury = 38;
var Mars = 38;
var Venus = 91;
var Jupiter = 253;
var Saturn = 107;
var Neptune = 114;
var Uranus = 91;

$(document).ready(function(){
	$('#calculate').click(function(){
		theInput = $('#weight').val();
		$('.mercury').next().html((theInput/100*Mercury).toFixed(2));
		$('.mars').next().html((theInput/100*Mars).toFixed(2));
		$('.venus').next().html((theInput/100*Venus).toFixed(2));
		$('.jupiter').next().html((theInput/100*Jupiter).toFixed(2));
		$('.saturn').next().html((theInput/100*Saturn).toFixed(2));
		$('.neptune').next().html((theInput/100*Neptune).toFixed(2));
		$('.uranus').next().html((theInput/100*Uranus).toFixed(2));
	});
});
