function validate_form() {
	var login_value = document.getElementById("login").value;
	var pass_value = document.getElementById("pass").value;
	if ( login_value == "" || pass_value == "") {
		alert ( "Не введено логін або пароль." );
		return false;
	}
	if ( login_value.length > 15 || login_value.length < 3)
	{
		alert ( "Довжина логіна  невірна" );
		return false;
	}
	if (pass_value.length < 8) {
		alert ( "Довжина  пароля невірна" );
		return false;
	}
	var pass_patern=/^[0-9]+$/;
	if (pass_patern.test(pass_value)) {
		alert ( "Пароль не повинен містити цифри" );
		return false;
		
	}

return true;
}





