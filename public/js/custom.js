// toggle password visibility js
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
if(togglePassword) {
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // toggle the eye slash icon
        if(this.classList[1] == "fa-eye-slash") {
            this.classList.remove("fa-eye-slash");
            this.classList.toggle('fa-eye');
        }
        else {
            this.classList.remove("fa-eye");
            this.classList.toggle('fa-eye-slash');
        }
        
    });
}

// toggle password visibility js - reset
const togglePasswordReset = document.querySelector('#togglePasswordReset');
const passwordReset = document.querySelector('#password_confirmation');
if(togglePasswordReset) {

    togglePasswordReset.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = passwordReset.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordReset.setAttribute('type', type);

        // toggle the eye slash icon
        if(this.classList[1] == "fa-eye-slash") {
            this.classList.remove("fa-eye-slash");
            this.classList.toggle('fa-eye');
        }
        else {
            this.classList.remove("fa-eye");
            this.classList.toggle('fa-eye-slash');
        }

    });
}

// toggle password visibility js - current password
const togglePasswordCurrent = document.querySelector('#togglePasswordCurrent');
const passwordCurrent = document.querySelector('#passwordCurrent');

if(togglePasswordCurrent) {
    togglePasswordCurrent.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = passwordCurrent.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordCurrent.setAttribute('type', type);

        // toggle the eye slash icon
        if(this.classList[1] == "fa-eye-slash") {
            this.classList.remove("fa-eye-slash");
            this.classList.toggle('fa-eye');
        }
        else {
            this.classList.remove("fa-eye");
            this.classList.toggle('fa-eye-slash');
        }

    });
    
}