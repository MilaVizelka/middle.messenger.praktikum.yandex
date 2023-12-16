import {handleErrorAndSubmitting} from "./handleError.helper.ts";
import {signInRequestHandler} from "../pages/sign-in";
import {regexLogin, regexPassword} from "./regex.helper.ts";

let regex: RegExp;
let isInputErr: boolean;
const inputValues = {login: '', password: ''};
export const submitButtonClick =  (event: Event) => {
    
    const value = (event.target as HTMLInputElement).value;
    const key = (event.target as HTMLInputElement).name;
    const obj = Object.assign(inputValues, { [key]: value });
    
    if (key === 'login') {
        regex = regexLogin;
    } else if (key === 'password') {
        regex = regexPassword;
    }
    
    isInputErr = !regex.test(value);
    
    if(!isInputErr) {
        signInRequestHandler(obj);
        event.preventDefault();
    } else
        handleErrorAndSubmitting(isInputErr);
        event.preventDefault();
}
