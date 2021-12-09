function Validation(){
	
	$('input').each(function(){
		err = 0
		if($(this).val()==''){
			$(this).addClass('err')
		}else{
			$(this).removeClass('err')
		}
		if ($('#pass').val()==$('#pass2').val() && $('#pass').val()!=''){
			$('#pass').removeClass('err');
			$('#pass2').removeClass('err');
			err = err-1
		}else{
			$('#pass').addClass('err');
			$('#pass2').addClass('err');
			err = err+1
		}
		if(err>0){
			return false
		}else{
			return true			
		}
	})
}

$(document).ready(function(){
	$('#regbutton').on('click', function(){
		if(Validation()){
			$.ajax({
				url: '/ajax',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({
					login: $('#login').val(),
					pass: $('#pass').val(),
					name: $('#name').val(),
					email: $('#email').val()
				})
			})
		}
	})
})
