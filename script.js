const tema = document.getElementById('tema');

tema.addEventListener('click', function(){
    const form = document.getElementById('login_form');
    if(tema.classList.contains('fa-moon')){
        tema.classList.remove('fa-moon');
        tema.classList.add('fa-sun');

        form.classList.add('dark');
        return;
        
    }

    tema.classList.add('fa-moon');
    tema.classList.remove('fa-sun');
    form.classList.remove('dark');
   
});

const senha = document.getElementById('mostrarSenha');

senha.addEventListener('click', function(){
    const verSenha = document.getElementById('senha');

    if(senha.classList.contains('fa-eye-slash') && verSenha.getAttribute('type') == 'password'){
        senha.classList.remove('fa-eye-slash');
        senha.classList.add('fa-eye');
        verSenha.setAttribute('type', 'text');
    
        return;
    }

    senha.classList.add('fa-eye-slash');
    senha.classList.remove('fa-eye');
    verSenha.setAttribute('type','password');
});