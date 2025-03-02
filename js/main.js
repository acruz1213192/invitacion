(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
			
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
				
				try {

					const queryString = window.location.search;
					const urlParams = new URLSearchParams(queryString);
					let invitados = atob(urlParams.get('np'));
					
					if(invitados){
						
						switch(invitados){
							case "3":
							case "4": 
							case "5": 
							case "6":
							case "7":
								$("#pases").text(invitados);
							default:
								//window.location.href = "notfound.html";
						}
					} else {
						//window.location.href = "notfound.html";
					}
				
				} catch(err) {
				  //console.log(err);
				  //window.location.href = "notfound.html";
				}
					
            }
			
        }, 1500);
    };
    spinner();
    
	
    
    // Initiate the wowjs
    new WOW().init();
    
})(jQuery);

