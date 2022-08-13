const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


CargarEventos();
function CargarEventos(){
    btnEnviar.addEventListener('DOMContentLoaded',IniciarApp);
    email.addEventListener('blur',ValidarFormulario);
    asunto.addEventListener('blur',ValidarFormulario);
    mensaje.addEventListener('blur',ValidarFormulario);
}

function IniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function ValidarFormulario(e){
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        MensajeError('Complete todos los campos');
    }

    if(e.target.type === 'email'){
            if(regularExpression.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            MensajeError('email NO valido');
        }
    }

    if(regularExpression.test(email.value) && asunto.value !=='' && mensaje.value !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }
}

function MensajeError(mensaje){
    const mensajeDeError = document.createElement('p');
    mensajeDeError.textContent = mensaje;
    mensajeDeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error');

    const errores = document.querySelectorAll('.error');
    if(errores.length ===0){
        formulario.appendChild(mensajeDeError);
    }
}