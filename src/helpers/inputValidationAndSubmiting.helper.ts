import {regexEmail, regexLogin, regexName, regexPassword, regexPhone} from './regex.helper.ts';
import {handleErrorAndSubmitting} from './handleError.helper.ts';

export const inputValidationAndSubmittingHelper = (page:  DocumentFragment, inputValues = {}) => {
    let isInputErr = false;
    
    let regex: RegExp;
    
    page.querySelectorAll('input').forEach((input) => {
        input.addEventListener('blur', (event) => {
            const value = (event.target as HTMLInputElement).value;
            const key = (event.target as HTMLInputElement).name;
            
            if (key === 'login') {
                regex = regexLogin;
            } else if (key === 'password') {
                regex = regexPassword;
            } else if (key === 'first_name' || key === 'second_name') {
                regex = regexName;
            } else if (key === 'email') {
                regex = regexEmail;
            } else if (key === 'phone') {
                regex = regexPhone;
            }
            
            isInputErr = !regex.test(value);
            
            const form = document.querySelector('form');
            
            handleErrorAndSubmitting(isInputErr);
            
            form?.addEventListener('submit', (e) => {
                isInputErr && e.preventDefault();
            });
            
            const obj = Object.assign(inputValues, { [key]: value });
            
            console.log(obj)
        })
    });
}
