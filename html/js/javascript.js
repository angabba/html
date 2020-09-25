
    var canal="Gama Academy";
    var curso="Curso de Java Script";
    var separador=" - ";
    // var nome=prompt ("Entre com o seu nome","Digite aqui o seu nome");
    alert("Bem vindo(a) "+nome+ " a escola Gama Academy");
    
    function funcao1(){
        alert("oi :)");
    }
    
    function validar(){
        var nome=formulario.nome.value;
        var email=formulario.email.value;
        var senha=formulario.senha.value;

        if(nome == ""){
            alert("Preencha o campo nome");
            formulario.nome.focus(); //cursor piscando no campo
            return false;
        }

        if(email == "" || email.indexOf('@')==-1){
            alert("Preencha o campo e-mail");
            formulario.email.focus();
            return false;
        } 

        if(senha == "" || senha.length<=5){
            alert("Preencha o campo senha(deve ter mais de 6 caracteres)");
            formulario.senha.focus();
            return false;
        }

        alert("Bem vindo(a) "+nome+"! \nEm breve enviaremos mais informações pelo e-mail informado.\nAté mais :)");
        
    }
