let cabin = document.querySelector('.my-cabin');
    	let d_block = document.querySelector('.information-block');
    	let hp_n = document.querySelector('.happy-news');
        let btn = document.querySelector('#sub');
        let user_icon = document.querySelector('.fas');
        let clr_btn = document.querySelector('.delete-btn');
        let n_infor = document.querySelector('#name');
        let s_infor = document.querySelector('#surname');
        let a_infor = document.querySelector('#age');
        let p_infor = document.querySelector('#password');

        cabin.addEventListener('click', function() {
           d_block.classList.toggle('show');
        });

        btn.addEventListener('click', function() {
           let name = document.querySelector('#Name');
           let surname = document.querySelector('#Familia');
           let age = document.querySelector('#Age');
           let password = document.querySelector('#Password');
           let Repassword = document.querySelector('#Repass');
           let name_block = document.querySelector('.name-error-block');
           let surname_block = document.querySelector('.surname-error-block');
           let age_block = document.querySelector('.age-error-block');
           let pass_block = document.querySelector('.password-error-block');
           let Repass_block = document.querySelector('.Repass-error-block');
           let c1 = document.querySelector('.oglav');
           let c2 = document.querySelector('.oglav2');
           let c3 = document.querySelector('.oglav3');
           let c4 = document.querySelector('.oglav4');
           let c5 = document.querySelector('.oglav5');
           let n_value = name.value;
           let s_value = surname.value;
           let a_value = age.value;
           let p_value = password.value;
           let r_value = Repassword.value;
           let fail = false;

           if(n_value == "" || n_value == " ") {
              fail = Get_error(name_block, 'b1', c1, 'Вы не ввели имя');
           }

           else if(n_value.length >= 9) {
           	  fail = Get_error(name_block, 'b1', c1, 'Длинна имени должна быть от 1 до 8');
           }

           else if(s_value == "" || s_value == " ") {
              fail = Get_error(surname_block, 'b2', c2, 'Вы не ввели фамилию');
           }

           else if(n_value.length >= 9) {
           	  fail = Get_error(surname_block, 'b2', c2, 'Длинна фамилии должна быть от 1 до 8');
           }

           else if(a_value == "" || a_value == " ") {
              fail = Get_error(age_block, 'b3', c3, 'Вы не ввели возраст');
           }

           else if(a_value.length >= 3) {
           	  fail = Get_error(age_block, 'b3', c3, 'Вы настолько старый?))');
           }

           else if(p_value == "" || p_value == " ") {
              fail = Get_error(pass_block, 'b4', c4, 'Вы не ввели пароль');
           }

           else if(p_value.length >= 13) {
           	  fail = Get_error(pass_block, 'b4', c4, 'Длинна пароля должна составлять менее 12');
           }

           else if(r_value !== p_value) {
              fail = Get_error(Repass_block, 'b5', c5, 'Пароли не совпадают');
           }

           else if(!fail || true) {
              AddInformation(n_value, s_value, a_value, p_value);

              name.value = '';
              surname.value = '';
              age.value = '';
              password.value = '';
              Repassword.value = '';

              return Yeah();
            }
        }); 

        clr_btn.addEventListener('click', function() {
           n_infor.textContent = 'Нет ваших данных';
           s_infor.textContent = 'Нет ваших данных';
           a_infor.textContent = 'Нет ваших данных';
           p_infor.textContent = 'Нет ваших данных';

           user_icon.classList.add('f2');

           setTimeout(function() {
              user_icon.classList.remove('f2');
           }, 3000);
        });

        function Yeah() {
           hp_n.classList.add('congr');

           setTimeout(function() {
              hp_n.classList.remove('congr');
           }, 2000);
        }

        function Get_error(b, c, elem, t) {
           b.classList.add(c);

           elem.textContent = t;

           setTimeout(() => {
              b.classList.remove(c); 
           }, 4000);
        }

        function AddInformation(n, s, a, p) {
            n_infor.textContent = n;
            s_infor.textContent = s;
            a_infor.textContent = a;
            p_infor.textContent = p;


            user_icon.classList.add('f');

            setTimeout(function() {
               user_icon.classList.remove('f'); 
            }, 3000); 
        }