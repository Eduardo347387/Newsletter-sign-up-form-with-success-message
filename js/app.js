document.addEventListener('DOMContentLoaded', function(){
    const $formulario = document.getElementById('form')
    $formulario.addEventListener('submit',enviarDatos);

    function enviarDatos(e){
        //Prevenimos el envio de formulario
        e.preventDefault()
        const $InputEmail = document.getElementById('email')
        
       

        displayMessage(validarInput($InputEmail))
    }

    function displayMessage(datos){ 
        setTimeout(()=>{
        if(datos[0]){
            const $formulario = document.querySelector('.Sign-up-form')
            const $cardMensaje = document.querySelector('.Success-message')
            const $email = document.getElementById('gmail-user')
            const $buttonDismiss = document.getElementById('dismiss')
         

            $formulario.style.display = 'none';
            $cardMensaje.style.display = 'block';
            $email.textContent = datos[1];
            
            $buttonDismiss.addEventListener('click',()=>{
                location.reload(true);
            })
        }
       },1000)
    }

   

    function validarInput(element){
        let valor = element.value;
        // let referenciaElemet = element;

        if(valor.trim() === ''){
            alertText(true,'Campo Gmail vacio')
            element.style.borderColor = 'red'
            element.style.backgroundColor = 'rgba(229, 31, 31, 0.083)'
            return false
        }
        else if(!validarEmail(valor)){
            alertText(true,'Gmail invalido')
            element.style.borderColor = 'red'
            element.style.backgroundColor = 'rgba(229, 31, 31, 0.083)'
            return false
        }else{
            alertText(false,'')
            element.style.borderColor = ''
            element.style.backgroundColor = '' 
            return [true,element.value]
        }
    }

    function validarEmail(email){
        const  regex  =   /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function alertText(estado,mensaje){
        const $alertError = document.getElementById('alertError')
        if(estado){
            $alertError.style.display = 'block'
            $alertError.textContent = mensaje
        }else if(estado === false){
            $alertError.style.display = 'none'
            $alertError.textContent = mensaje
        }
    }
})



