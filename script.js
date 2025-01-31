const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-Popup')
const nameInputRegister = document.querySelector('#usernameRegister');
const emailInputRegister = document.querySelector('#emailRegister');
const passwordIInputRegister = document.querySelector('#passwordRegister');
const buttonRegister = document.querySelector('#btnRegister');
const emailInputLogin = document.querySelector('#emailLogin');
const passwordInputLogin = document.querySelector('#passwordLogin');
const buttonLogin = document.querySelector('#btnLogin');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})


buttonRegister.addEventListener('click', (e) => {
    e.preventDefault;

    const nameValue = nameInputRegister.value;
    const emailValue = emailInputRegister.value;
    const passwordValue = passwordIInputRegister.value;
    if(nameValue == '' || emailValue == '' || passwordValue == ''){
        return;
    }else{
        console.log('New User Created')
        console.log(`Username:${nameValue} Email:${emailValue} Password:${passwordValue}`);

        let jsonAtual = JSON.parse(localStorage.getItem("Users_Json")) || [];

        const dados = {
            nome: nameValue,
            email: emailValue,
            password: passwordValue
        };

        jsonAtual.push(dados);

        localStorage.setItem("Users_Json", JSON.stringify(jsonAtual))
        alert('New User Created');
        return;
    }
})

buttonLogin.addEventListener('click', (e) => {
    e.preventDefault;

    const emailValue = emailInputLogin.value;
    const passwordValue = passwordInputLogin.value;

    if(emailValue,passwordValue){
        let users_String = localStorage.getItem("Users_Json");
        let users_Json = JSON.parse(users_String);
        for(let i = 0; i <= users_Json.length; i++){
            if(emailValue == users_Json[i].email && passwordValue == users_Json[i].password){
                alert(`User is logged\nWelcome ${users_Json[i].nome}`)
                return 
            }
        }
        alert("This user is not register in the site!")
        return;
    }
})
