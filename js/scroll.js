(function(window){

//Chrome seems to generate two events, so only trigger on alternating events.
var odd = false;

window.onmousewheel = window.document.onmousewheel = function(event){
	if(odd) {
		if(event.wheelDelta < 0) {
			window.impress().next();
		} else if (event.wheelDelta > 0) {
			window.impress().prev();
		}
	};
	odd = !odd;
};

})(window);
