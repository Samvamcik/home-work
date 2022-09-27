//alert('Вывод пользователю сообщение');
const inputLogin = document.querySelector('#login');
    const inputPass = document.querySelector('#password');
    const btn = document.querySelector('#submit_btn');

    const checkInput = (a) => {
        return a.textLength;
    }

    btn.addEventListener('click', ()  => { 

        if (checkInput(inputLogin) == 0 && checkInput(inputPass) == 0) {
            alert('введите логин и пароль')
        }else if((checkInput(inputLogin)) == 0) {
            alert('Введите ваш логин')
        }else if((checkInput(inputPass)) == 0) {
            alert('Введите ваш пароль')
        }else alert(`'Ваш пароль: ${inputPass.value} . Ваш логин: ${inputLogin.value}'`);
    });
