window.onload = function() {
	// X-Domain Cookies
	var xd_cookie = xDomainCookie( '//my.s3bucket.com' );
	xd_cookie.get( 'cookie_name', function(cookie_val){
		//cookie val will contain value of cookie as fetched from local val (if present) else from iframe (if set), else null
		if(!cookie_val){
			var new_val = get_what_value_should_be();
			xd_cookie.set( 'cookie_name', new_val );
		}
	});
};

// Crisp
window.$crisp=[];
window.CRISP_WEBSITE_ID = "77942a01-94cb-4616-8c2d-5318e51ac865";
(function(){
	d = document;
	s = d.createElement("script");
	s.src = "https://client.crisp.chat/l.js";
	s.async = 1;
	d.getElementsByTagName("head")[0].appendChild(s);
})();
