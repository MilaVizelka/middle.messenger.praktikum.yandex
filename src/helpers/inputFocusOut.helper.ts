import {regexLogin, regexPassword} from "./regex.helper.ts";
import {handleErrorAndSubmitting} from "./handleError.helper.ts";

let regex: RegExp;
let isInputErr: boolean;
const inputValues = {login: '', password: ''};

export const inputFocusOut =  (event: Event) => {
    
    console.log(event)
    const value = (event.target as HTMLInputElement).value;
    const key = (event.target as HTMLInputElement).name;
    
    if (key === 'login') {
        regex = regexLogin;
    } else if (key === 'password') {
        regex = regexPassword;
    }
    
    isInputErr = !regex.test(value);
    
    handleErrorAndSubmitting(isInputErr);
    
    const obj = Object.assign(inputValues, { [key]: value });
    console.log(obj)
}
