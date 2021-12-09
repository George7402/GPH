$(document).ready(function(){
	$('#Apply_Dark_Theme').on('click',function(){ 

		$('.hover-underline-animation').css('color','#FFFFFF');

		$('#main_navbar').removeClass('set_color_light');
		$('#offcanvas-header').removeClass('set_color_light');
		$('#offcanvas-body').removeClass('set_color_light');
		$('#liveToastDark').removeClass('hide');
		$('#main_settings_background').removeClass('set_color_light');
		$('.text').removeClass('dark_text');
		$('.hr').removeClass('hr_dark');

		$('#liveToastDark').addClass('show');

				setTimeout(function(){
					$('#liveToastDark').addClass('toast_opacity_0');
				},0);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_0');
				$('#liveToastDark').addClass('toast_opacity_1');
				},400);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_1');
				$('#liveToastDark').addClass('toast_opacity_2');
				},600);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_2');
				$('#liveToastDark').addClass('toast_opacity_3');
				},800);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_3');
				$('#liveToastDark').addClass('toast_opacity_4');
				},1000);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_4');
				$('#liveToastDark').addClass('toast_opacity_5');
				},1200);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_5');
				$('#liveToastDark').addClass('toast_opacity_6');
				},1400);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_6');
				$('#liveToastDark').addClass('toast_opacity_7');
				},1600);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_7');
				$('#liveToastDark').addClass('toast_opacity_8');
				},1800);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_8');
				$('#liveToastDark').addClass('toast_opacity_9');
				},2000);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_9');
				$('#liveToastDark').addClass('toast_opacity_10');
				},2200);

				setTimeout(function(){
				$('#liveToastDark').removeClass('toast_opacity_10');
				$('#liveToastDark').removeClass('show');
				$('#liveToastDark').addClass('hide');
				},5000);

		$('#main_navbar').addClass('set_color_dark');
		$('#offcanvas-header').addClass('set_color_dark');
		$('#offcanvas-body').addClass('set_color_dark');
		$('#main_settings_background').addClass('set_color_dark');
		$('.text').addClass('light_text');
		$('.hr').addClass('hr_light');
	});
	$('#Apply_Light_Theme').on('click',function(){

		$('#main_navbar').removeClass('set_color_dark');
		$('#offcanvas-header').removeClass('set_color_dark');
		$('#offcanvas-body').removeClass('set_color_dark');
		$('#liveToastLight').removeClass('hide');
		$('#main_settings_background').removeClass('set_color_dark');
		$('.text').removeClass('light_text');
		$('.hr').removeClass('hr_light');

		setTimeout(function(){
		$('#liveToastLight').addClass('show');
		},400);

				setTimeout(function(){
					$('#liveToastLight').addClass('toast_opacity_0');
				},200);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_0');
				$('#liveToastLight').addClass('toast_opacity_1');
				},400)

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_1');
				$('#liveToastLight').addClass('toast_opacity_2');
				},600)

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_2');
				$('#liveToastLight').addClass('toast_opacity_3');
				},800);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_3');
				$('#liveToastLight').addClass('toast_opacity_4');
				},1000);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_4');
				$('#liveToastLight').addClass('toast_opacity_5');
				},1200);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_5');
				$('#liveToastLight').addClass('toast_opacity_6');
				},1400);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_6');
				$('#liveToastLight').addClass('toast_opacity_7');
				},1600);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_7');
				$('#liveToastLight').addClass('toast_opacity_8');
				},1800);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_8');
				$('#liveToastLight').addClass('toast_opacity_9');
				},2000);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_9');
				$('#liveToastLight').addClass('toast_opacity_10');
				},2200);

				setTimeout(function(){
				$('#liveToastLight').removeClass('toast_opacity_10');
				$('#liveToastLight').removeClass('show');
				$('#liveToastLight').addClass('hide');
				},5000);
		$('#main_navbar').addClass('set_color_light');
		$('#offcanvas-header').addClass('set_color_light');
		$('#offcanvas-body').addClass('set_color_light');
		$('#main_settings_background').addClass('set_color_light');
		$('.text').addClass('dark_text');
		$('.hr').addClass('hr_dark');
	});

	$('#status_success').on('click',function(){
		$('#Status_img').removeClass('Status_img_warning Status_img_danger');
		$('#Status_img').addClass('Status_img_success');
	});

	$('#status_warning').on('click',function(){
		$('#Status_img').removeClass('Status_img_success Status_img_danger');
		$('#Status_img').addClass('Status_img_warning');
	});

	$('#status_danger').on('click',function(){
		$('#Status_img').removeClass('Status_img_success Status_img_warning');
		$('#Status_img').addClass('Status_img_danger');
	});
});
