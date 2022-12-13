 $(document).ready(function() {
	
	/*	Coi Slider	*/
	$('#coin-slider').coinslider({ 	navigation: false,  effect: 'straight',   spw: 10,	sph: 3, 	width: 600, 	height: 200,	links : false	});
 	$('#coin-slider2').coinslider({
		width: 1225, // width of slider panel
		height: 500, // height of slider panel
		//spw: 7, // squares per width
		//sph: 5, // squares per height
		delay: 3000, // delay between images in ms
		//sDelay: 30, // delay beetwen squares in ms
		opacity: 0.7, // opacity of title and navigation
		//titleSpeed: 500, // speed of title appereance in ms
		effect: 'rain', // random, swirl, rain, straight
		navigation: true, // prev next and buttons
		links : false, // show images as links
		hoverPause: true // pause on hover
	})	
				

	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/
	
	$('#home-but').click(function() {
		$('#divBody, #top-head').removeClass().addClass('content-home');
		$('#content').load('Pages/Home.html',function() {	lang(); });
	});
	
	$('#log-but, .more-mod-but').click(function() {	$('#div-form').show();	$('#password').select(); })  
	
	$('#div-form').mousedown(function(e) {		var container = $('#login'); // partea care trebuie sa dispara
		if (!container.is(e.target) && container.has(e.target).length === 0) //default ===0 
		   {   $('#div-form').hide();   }		});
		   
	/*$('body').mouseup(function(e) {
		var container = $('#login'); // partea care trebuie sa dispara
		if (!container.is(e.target) 
        && container.has(e.target).length === 0) //default ===0 
    {        container.hide();    }
	});*/
	
	
	$('#con-but').click(function() {
		$('#divBody, #top-head').removeClass().addClass('content-con');
		$('#content').load('Pages/Contact.html',function() {	lang(); });
	});
	
	$('#gal-but').hover(function() {
		$('.sub-meniu').show()},
		function() {
		$('.sub-meniu').hide()}
	);
						//pentru telefon.
	$('#gal-but').click(	function() {	$('.sub-meniu').toggle();	});	
	


	// galeria butoane
	$('#gal-but-main').click(function() {$('#content').load('Pages/gallery2.html' , function(){ lang() }); });
	$('.gal1-but').click(function() {$('#content').load('Pages/gallery1.html' , function(){ lang() });	});
	$('.gal2-but').click(function() {$('#content').load('Pages/gallery2.html' , function(){ lang() });	});
	$('.gal3-but').click(function() {$('#content').load('Pages/gallery3.html' , function(){ lang() });	});
	
	$('.models01').click(function() { $('#content').load('Pages/models1.html' , function(){ $('.more-mod-but').click(function () {	$('#div-form').show(); 	});  lang() });	});
	$('.models02').click(function() { $('#content').load('Pages/models2.html' , function(){ $('.more-mod-but').click(function () {	$('#div-form').show(); 	});  lang() }); });
	$('.models03').click(function() { $('#content').load('Pages/models3.html' , function(){ lang() });  });
	
	
	$('#gal-but #list01 ul li').click(function() {
	$('.sub-meniu').hide('blind','fast');
	$('#divBody, #top-head').removeClass().addClass('content-def');
	});
	
	
	$('#button-bar .butmeniu').click(function(){
		if($(this).attr('id') == 'home-but'){
			 $('#coin-slider-coin-slider2').show();		$('#top-head').hide();}
		else{$('#coin-slider-coin-slider2').hide();		$('#top-head').show();}
	});
	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/	/*	 Buttons Meniu	*/

	
	/*	Efect Buton Activ	*/
	$('.butmeniu:not(#log-but)').click(function() {  
	$('.butmeniu').removeClass('visit');
	$(this).addClass('visit');  
	});
	$('.sub-meniu').click(function() {
	$('.butmeniu').removeClass('visit');
	$('#gal-but').addClass('visit');
	});
	
	
	
	/* Language ro / ru */
	$('input[name="lang"]').change(function(){	lang();	});	
	function lang() {
	 if( $('input[name="lang"]:checked').val() === 'Ro' ) { 		$('.rus').hide(), $('.rom').show(); }
	 else { 														$('.rom').hide(), $('.rus').show(); }		
	};	
	
	
//----------------------------------------------------------------------------------------------	
	// password select
	$('#password').click(function () {
	$(this).select();
	});
	
	// kuki
			//var remember = $.cookie('remember');
              var password = $.cookie('password');
            // autofill the fields
               $('#password').val(password);
	//    submit   submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit    submit	
    $('form:first').submit(function( event ) {
		
		function in_array(value, array)  // functia verifica existenta elementului in masiv
		{
			for(var i = 0; i < array.length; i++) 
			{	if(array[i] == value) return true;	}
			return false;
		};
		
		$.ajax({url:"Password.js" , // se creaza variabila loginpass
			async:false, // important !
			dataType: "script",
			success: function(log){} }).done(function(log) { 	});
			if ( in_array($('#password').val(), loginpass) ) {				
				
					event.preventDefault();		// aici are loc efectul butonului #supmit			
					var password = $('#password').val();		$.cookie('password', password);			//if ($('#remember').is(':checked')) 
					$('#log-but, #div-form').remove();
				
					//$('.more-mod-but').hide();		$('#list01 > ul > li').click(function() {  $('.more-mod-but').hide(); alert('x'); });
					$('.models01').click(function() { 	$.fn.addImageNew( 'gallery-div01' , 'Bucatarii_modele' , 'B' , 0 )/*.load($('.more-mod-but').hide())*/	 });			$.fn.addImageNew( 'gallery-div01' , 'Bucatarii_modele' , 'B' , 0 );
					$('.content').mouseover(function() { $('.more-mod-but').css("visibility", "hidden");	$('#gallery-div02').show();   });
           		
			} else {
				event.preventDefault();	
				$.removeCookie('password');
				alert(' sory  :-(  '); 
				$('#div-form').hide();
				}    
	   });
	   
	   
	//-------------------------------------------------------------------------------------------------------
	
	
		/*	 Functia Add Image	*/
	$.fn.addImage = function(par) { // par = Folder
	
		$.ajax({url: "images/"+ par +"/Number_of_images.txt",
        success: function(msg){} }).done(function(msg) { 

			for(var i = 1; i <= msg; i++) 	{
				$('#gallery-div').append('<a class="grouped_elements" rel="group1" href="images/'+ par +'/'+ i +'.jpg" > <div class="mainGallery"> <img src="images/'+ par +'/'+ i +'.jpg" alt=""/> </div> </a>')};
		
				$("a.grouped_elements").fancybox({'transitionIn':'fade',	'transitionOut':'elastic',		'speedIn':500, 	'speedOut':300, 	'overlayShow':true,		'overlayColor' : "#000",	'overlayOpacity' : 0.8	 });	
				
			//alert(modelsBucaName[2]);
		});	
	};
	
	  /*	 Functia Add Image New	*/
			$.fn.addImageNew = function(place , folder , prefix , names) {
			
				$.ajax({url: "images/"+ folder +"/Number_of_images.txt",
				success: function(msg){} }).done(function(msg) { 

					for(var i = 1; i <= msg; i++) {
						$('#'+ place +'').append('<a class="grouped_elements" rel="group1" href="images/'+ folder +'/'+ prefix + i +'.jpg" > <div class="mainGallery">  <div class="bottomBar"></div>  <img src="images/'+ folder +'/MiniModels/'+ prefix + i +'.jpg" alt=""/> </div> </a>')};					
						$("a.grouped_elements").fancybox({'transitionIn':'fade',	'transitionOut':'elastic',		'speedIn':500, 	'speedOut':300, 	'overlayShow':true,		'overlayColor' : "#000",	'overlayOpacity' : 0.8	 	});	
					
					for(var i = 0; i <= msg; i++)	{
						var modelId = ModelsAll[names][i];
						$('#'+ place +' > .grouped_elements:eq('+ i +') .mainGallery div').text('Model: '+ modelId); 
						//$('.grouped_elements:eq('+ i +') .mainGallery div').attr('id',modelId);  		
						}
					$('.mainGallery').hover(function() {	$(this).find(".bottomBar").slideDown(200);	  }, function() {
															$(this).find(".bottomBar").slideUp(200);	  });
															
					});	
			}; /*      Functia Add Image New end      */
	
	
	
	
	
});