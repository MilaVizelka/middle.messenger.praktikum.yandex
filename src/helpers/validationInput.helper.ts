import {regexEmail, regexEmptyField, regexLogin, regexName, regexPassword, regexPhone} from "./regex.helper.ts";
import {handleError} from "./handleError.helper.ts";


let regex: RegExp;
let isInputErr: boolean;
const inputValues: Record<string, unknown> = {};
export const validationHelper = (event?: Event) => {

    const value = (event?.target as HTMLInputElement).value;
    const key = (event?.target as HTMLInputElement).name;
    
    switch (key) {
        case 'login':
            regex = regexLogin;
            break
        case 'password':
            regex = regexPassword;
            break
        case 'first_name':
        case 'second_name':
            regex = regexName;
            break
        case 'email':
            regex = regexEmail;
            break
        case 'phone':
            regex = regexPhone;
            break
        default:
            regex = regexEmptyField
    }
    
    isInputErr = !regex.test(value);
    
    
    const obj = !isInputErr && Object.assign(inputValues, {[key]: value});
    
    handleError(isInputErr);
    
    console.log(obj)

   
}
