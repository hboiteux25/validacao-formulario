let B7validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send =  true

        let inputs = form.querySelectorAll('input');

        for(let i=0;i<inputs.length; i++){
            let input = inputs[i];
            let check  = B7validator.checkInput(input)
            if(check !== true){
                send =  false
               B7validator.showErro(input, check)
            }
        }

        send =  false;

        if(send){
            form.submit();
        }
    },
    checkInput:(input) =>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                min = 2
                switch(rDetails[0]){
                    case 'required':
                        if(input.value = ''){
                            return 'Campo não pode ser vazio.';
                        }
                        break;
                    case 'min':

                        break;    
                }
            }
        }
        return true;
    },

    showErro:(input, error)=>{
        input.style.bordeColor = '#FF000';
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.insertBefore(erroElement)
    }
};

let form = document.querySelector('.b7validator');
form.addEventListener('submit', B7validator.handleSubmit)