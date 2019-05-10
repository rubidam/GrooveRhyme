$('html').click(function(e) {
	if(!$(e.target).hasClass("overlap")) {
		location.href = "./profilePage.html";
	}
});