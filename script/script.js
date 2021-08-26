var button = document.getElementById('claim');

button.addEventListener('click', event => {
    var first_name = document.getElementById('fisrt_name'),
    last_name = document.getElementById('last_name'),
    email_address = document.getElementById('email_address'),
    password = document.getElementById('password'),
    fn_error = document.getElementById('fn_error'),
    ln_error = document.getElementById('ln_error'),
    ea_error = document.getElementById('ea_error'),
    p_error = document.getElementById('p_error'),
    fn_error_text = document.getElementById('fn_error_text'),
    ln_error_text = document.getElementById('ln_error_text'),
    ea_error_text = document.getElementById('ea_error_text'),
    p_error_text = document.getElementById('p_error_text'),
    fn_div = document.getElementById('fn_div'),
    ln_div = document.getElementById('ln_div'),
    ea_div = document.getElementById('ea_div'),
    p_div = document.getElementById('p_div');

    var regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (first_name.value == ''){
        fn_error.style.display = 'block';
        fn_error_text.style.display = 'block';
        fn_div.style.paddingBottom = '0rem';
        first_name.style.borderColor = 'hsl(0, 100%, 74%)';
        first_name.placeholder = '';
    }
    else{
        fn_error.style.display = 'none';
        fn_error_text.style.display = 'none';
        fn_div.style.paddingBottom = '';
        first_name.style.borderColor = '';
        first_name.placeholder = 'First Name';
    }
    if (last_name.value == ''){
        ln_error.style.display = 'block';
        ln_error_text.style.display = 'block';
        ln_div.style.paddingBottom = '0rem';
        last_name.style.borderColor = 'hsl(0, 100%, 74%)';
        last_name.placeholder = '';
    }
    else{
        ln_error.style.display = 'none';
        ln_error_text.style.display = 'none';
        ln_div.style.paddingBottom = '';
        last_name.style.borderColor = '';
        last_name.placeholder = 'Last Name';
    }
    if (regx.test(email_address.value) == false){
        ea_error.style.display = 'block';
        ea_error_text.style.display = 'block';
        ea_div.style.paddingBottom = '0rem';
        email_address.style.borderColor = 'hsl(0, 100%, 74%)';
        email_address.placeholder = '';
        email_address.style.color = 'hsl(0, 100%, 74%)';
    }
    else{
        ea_error.style.display = 'none';
        ea_error_text.style.display = 'none';
        ea_div.style.paddingBottom = '';
        email_address.style.borderColor = '';
        email_address.style.color = '';
        email_address.placeholder = 'Email Address';
    }
    if (password.value == ''){
        p_error.style.display = 'block';
        p_error_text.style.display = 'block';
        p_div.style.paddingBottom = '0rem';
        password.style.borderColor = 'hsl(0, 100%, 74%)';
        password.placeholder = '';
    }
    else{
        p_error.style.display = 'none';
        p_error_text.style.display = 'none';
        p_div.style.paddingBottom = '';
        password.style.borderColor = '';
        password.placeholder = 'Password';
    }
});