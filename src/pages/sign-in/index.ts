import {InputProps, MenuProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Link} from "../../components/Link";
import {Title} from "../../components/Title";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import {Menu} from "../../components/Menu";
import {Logo} from "../../components/Logo";


const signInFieldList =
    [
        {
            placeholder: 'login',
            name: 'login',
            type: 'text',
            class: `input-styled`,
            title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
        },
        {
            placeholder: 'password',
            name: 'password',
            type: 'password',
            class: `input-styled`,
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

export class SignInPage extends Block {
    
    constructor() {
        super('div', {});
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
        
        const inputValues = {login: '', password: ''};
        let err = false;
        
        signInPage.querySelectorAll('input').forEach((input) => {
            input.addEventListener('blur', (event) => {
                const value = (event.target as HTMLInputElement).value;
                const key = (event.target as HTMLInputElement).name;
                
                const regexLogin = new RegExp('^(?!\\d+$)[A-Za-z\\d\\-_]{3,20}$');
                const regexPassword = new RegExp('^(?=.*[A-Z])(?=.*\\d).{8,40}$');
                
                const wrapperElement = document.querySelector('.fields-list');
                const errorElement =  document.createElement('span');
                const errorElements = document.querySelectorAll('.error');
                
                const form = document.querySelector('form');
                
                err = !regexLogin.test(value) || !regexPassword.test(value);
                
                if (err) {
                    
                    errorElement.classList.add('error');
                    errorElement.textContent = 'Ошибка ввода';
                    
                    errorElements.forEach((element) => {
                        element.remove();
                    });
                    
                    wrapperElement?.appendChild(errorElement)
                }
                
               !err && errorElements.forEach((element) => {
                    element.remove();
                });
                
                form?.addEventListener('submit', (e) => {
                    err && e.preventDefault()
                })
                
                const obj = Object.assign(inputValues, { [key]: value });
                
                console.log(obj)
                
            })
        });
        
        return  signInPage;
    }
    
    
}

