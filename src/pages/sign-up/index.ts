
import {Logo} from "../../components/Logo";
import {Link} from "../../components/Link";
import {Title} from "../../components/Title";
import {Input} from "../../components/Input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Button} from "../../components/Button";
import {handleErrorAndSubmitting} from "../../helpers/handleErrorAndSubmiting.helper.ts";
import {regexEmail, regexLogin, regexName, regexPassword, regexPhone} from "../../helpers/regex.ts"

const signUpFieldList =
    [
        {
            placeholder: 'first name',
            name: 'first_name',
            type: 'text'
        },
        {
            placeholder: 'second name',
            name: "second_name",
            type: 'text'
        },
        {
            placeholder: 'login',
            name: "login",
            type: 'text'
        },
        {
            placeholder: 'email',
            name: "email",
            type: 'email',
        },
        {
            placeholder: 'phone',
            name: "phone",
            type: 'phone',
            
        },
        {
            placeholder: 'password',
            name: "password",
            type: 'password',
        },
        
    ] as InputProps

export class SignUpPage extends Block {
    
    constructor() {
        super('div', {});
    }
    init() {
        this.children.button = new Button({text: 'Create account', type: 'submit'});
        this.children.input = new Input(signUpFieldList);
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'});
        this.children.logo = new Logo();
        this.children.title = new Title({title: 'Let`s get started!'});
    }
    
    render() {
        const signUpPage =   this.compile(
            `<div class="wrapper-sign-up-page">
                <header class="header"> {{{ logo }}} {{{ menu }}} </header>
                <div class="wrapper-content">
                     <form class="form" name="sign-up-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form>
                     {{{ link }}}
                </div>
            </div>`, this.props)
        
        const inputValues = {login: '', password: '', first_name: '',
            second_name: '', email: '', phone: ''};
        
        let isInputErr = false;
        
        let regex: RegExp;
        
        signUpPage.querySelectorAll('input').forEach((input) => {
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
        
        return signUpPage
    }
}
