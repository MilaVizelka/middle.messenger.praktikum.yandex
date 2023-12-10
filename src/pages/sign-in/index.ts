import {InputProps, SignInInputValuesType, MenuProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Link} from "../../components/Link";
import {Title} from "../../components/Title";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {Menu} from "../../components/Menu";
import {Logo} from "../../components/Logo";
import {handleErrorAndSubmitting} from "../../helpers/handleError.helper.ts";
import {regexLogin, regexPassword} from "../../helpers/regex.helper.ts";
import {HTTPTransport, METHODS} from "../../utils/HttpTransport.ts";


const signInFieldList =
    [
        {
            placeholder: 'login',
            name: 'login',
            type: 'text',
            title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        },
        {
            placeholder: 'password',
            name: 'password',
            type: 'password',
            title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            
        },

    ] as InputProps

const menuItemsList = [
    {
        item: 'main page',
        link:  ProjectLinksEnum.home
    },
    {
        item: 'sign-up page',
        link:  ProjectLinksEnum["sign-up"]
    },
    {
        item: 'not-found page',
        link: ProjectLinksEnum["not-found"]
    },
    {
        item: 'server-error page',
        link: ProjectLinksEnum["server-error"]
    },
    {
        item: 'chats page',
        link: ProjectLinksEnum.chats
    },
    {
        item: 'settings page',
        link: ProjectLinksEnum.settings
    },

] as MenuProps

const inputValues = {login: '', password: ''};

export class SignInPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    signInRequestHandler = (obj: SignInInputValuesType) => {
        const transport = new HTTPTransport();
        const apiUrl = 'auth/signin';
        const options = {
            method: METHODS.POST,
            data: obj,
            headers: { 'Content-Type': 'application/json' },
            timeout: 5000,
        };
        
        transport.post(apiUrl, options)
            .then(response => {
                console.log('Response:', response);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }
    
    init() {
        this.children.button = new Button({text: 'Enter', type: 'submit'});
        this.children.input = new Input(signInFieldList);
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign Up'});
        this.children.title = new Title({title: 'Log In'});
        this.children.menu = new Menu(menuItemsList);
        this.children.logo = new Logo();
       
    }
    
    render() {
        const signInPage =   this.compile(`<div class="wrapper-sign-in-page">
                <header class="header"> {{{ logo }}} {{{menu}}} </header>
                <div class="wrapper-content">
                    <form id="sign-in-form" name="sign-in-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form>
                    {{{ link }}}
                </div>
           </div>`, this.props)
        
        
        
        let isInputErr = false;
        
        let regex: RegExp;
        
        signInPage.querySelectorAll('input').forEach((input) => {
            input.addEventListener('blur', (event) => {
                const value = (event.target as HTMLInputElement).value;
                const key = (event.target as HTMLInputElement).name;
                
                
                if (key === 'login') {
                    regex = regexLogin;
                } else if (key === 'password') {
                    regex = regexPassword;
                }
                
                isInputErr = !regex.test(value);
                console.log(isInputErr)
                
                const form = document.querySelector('form');
                
                handleErrorAndSubmitting(isInputErr);
                
                form?.addEventListener('submit', (e) => {
                    isInputErr && e.preventDefault();
                });

                const obj = Object.assign(inputValues, { [key]: value });
                
                console.log(obj)
                
                const submitButton = document.querySelector('button');

                submitButton?.addEventListener('click', (e) => {
                    if(!isInputErr) {
                        this.signInRequestHandler(obj);
                        e.preventDefault();
                    } else
                        handleErrorAndSubmitting(isInputErr);
                        e.preventDefault();
                })
            })
        });
        
        return  signInPage;
    }
}
