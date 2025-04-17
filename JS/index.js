var userNamelInput = document.getElementById('registName');
var usarEmailInput = document.getElementById('registEmail');
var userPassInput = document.getElementById('registPassword');
var paragraphInput = document.getElementById('success');


var userinfoContainer = [];
if (localStorage.getItem('userinfo') !== null) {
    userinfoContainer = JSON.parse(localStorage.getItem('userinfo'));
}


var userinfo;
function login() {

    userinfo = {
        code: userNamelInput.value,
        email: usarEmailInput.value,
        pass: userPassInput.value,
    }
    empty();
    console.log(userinfoContainer);


}

function empty() {
    if (userNamelInput.value == '' || usarEmailInput.value == '' || userPassInput.value == '') {
        document.getElementById('success').innerHTML = 'All input reqierd';
        document.getElementById('success').classList.add('bg-danger');

    }
    else {


        userinfoContainer.push(userinfo);
        localStorage.setItem('userinfo', JSON.stringify(userinfoContainer));
        document.getElementById('success').innerHTML = 'success';
        document.getElementById('success').classList.replace('bg-danger', 'bg-transparent');
        document.getElementById('success').classList.replace('text-white', 'text-success');
        // بعد التأكد من التسجيل بنجاح
        window.location.href = 'index.html';

        // for (var i = 0; i < userinfoContainer.length; i++) {
        //     if (usarEmailInput.value==userinfoContainer[i].email) {
        //         document.getElementById('success').innerHTML = 'this email exst';

        //     }
        //     else if(usarEmailInput.value!=userinfoContainer[i].email){
        //         userinfoContainer.push(userinfo);
        //         localStorage.setItem('userinfo', JSON.stringify(userinfoContainer));
        //         document.getElementById('success').innerHTML = 'success';
        //         document.getElementById('success').classList.replace('bg-danger', 'bg-transparent');
        //         document.getElementById('success').classList.replace('text-white', 'text-success');
        //     }
        // }


    }
}

function validateUser(element) {

    var regax = {
        registName: /^[A-Z][a-z]{2,8}$/,
        registEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        registPassword: /^[1-9][0-9][0-9]/,

    }
    var mystr = usarEmailInput.value;
    if (regax[element.id].test(element.value) == true) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        document.getElementById('success').innerHTML = '';

        return true;
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        document.getElementById('success').innerHTML = 'is invalid';

        return false;
    }
}






var EmailLogin = document.getElementById('signinEmail');
var PassLogin = document.getElementById('signinPassword');
var paragraphLogin = document.getElementById('incorrect');
var h1Register = document.getElementById('usernamee');

function validLogin() {
    for (var i = 0; i < userinfoContainer.length; i++) {
        if (EmailLogin.value == userinfoContainer[i].email) {
            if (PassLogin.value == userinfoContainer[i].pass) {
                // ✅ حفظ اسم المستخدم في localStorage
                localStorage.setItem("loggedInUserName", userinfoContainer[i].code);

                window.location.href = "register.html";
                return; // مهم عشان يوقف اللوب لما يلاقي المستخدم
            } else {
                paragraphLogin.textContent = 'incorrect password';
                return;
            }
        }
    }
    paragraphLogin.textContent = 'incorrect email or password';
}


function requiredParagraph() {
    if (EmailLogin.value == null || PassLogin.value == null) {
        document.getElementById('incorrect').classList.replace('d-none', 'd-block');

    }
}

console.log(userinfoContainer);

document.addEventListener("DOMContentLoaded", function () {
    var h1Register = document.getElementById('usernamee');
    var loggedName = localStorage.getItem("loggedInUserName");

    if (loggedName) {
        h1Register.textContent = "Welcome " + loggedName;
    }
});
