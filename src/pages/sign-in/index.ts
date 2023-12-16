import {InputProps, SignInInputValuesType, MenuProps, ProjectLinksEnum} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Link} from '../../components/Link';
import {Title} from '../../components/Title';
import {Input} from '../../components/Input';
import {Menu} from '../../components/Menu';
import {Logo} from '../../components/Logo';
import {HTTPTransport, METHODS} from '../../utils/HttpTransport.ts';
import {Button} from '../../components/Button';

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

] as MenuProps;

const signInFieldList =
    {
        data: [
            {
                placeholder: 'login',
                name: 'login',
                type: 'text',
                title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
            },
            {
                placeholder: 'password',
                name: 'password',
                type: 'password',
                title: 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
            },
        ]
    } as InputProps;

export const signInRequestHandler = (obj: SignInInputValuesType) => {
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
export class SignInPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.button = new Button({props: {text: 'Enter', type: 'submit'}});
        this.children.input = new Input(signInFieldList);
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign Up'});
        this.children.title = new Title({title: 'Log In'});
        this.children.menu = new Menu(menuItemsList);
        this.children.logo = new Logo();
       
    }
    
     render():DocumentFragment  {
        return this.compile(`<div class="wrapper-sign-in-page">
                <header class="header"> {{{ logo }}} {{{menu}}} </header>
                <div class="wrapper-content">
                    <form id="sign-in-form" name="sign-in-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form>
                    {{{ link }}}
                </div>
           </div>`, this.props)
    }
}
