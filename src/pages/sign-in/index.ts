import {InputProps,  MenuProps, ProjectLinksEnum} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Link} from '../../components/Link';
import {Title} from '../../components/Title';
import {Input} from '../../components/Input';
import {Menu} from '../../components/Menu';
import {Logo} from '../../components/Logo';
import {Button} from '../../components/Button';
import {Form} from "../../components/Form";
import Router from "../../utils/Router.ts";

import {AuthController} from "../../controllers/AuthController.ts";

const menuItemsList = [
    {
        item: 'main page',
        link:  new Link({to: '/sign-up', content: 'or SignUp', router: Router})
    },
    {
        item: 'sign-up page',
        link:  new Link({to: '/sign-up', content: 'or SignUp', router: Router})
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

export class SignInPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.title = new Title({title: 'Log In'});
        this.children.link = new Link({to: '/sign-up', content: 'or SignUp', router: Router});
        this.children.menu = new Menu(menuItemsList);
        this.children.logo = new Logo();
        this.children.form = new Form({ data:
                {
                    input: new Input(signInFieldList),
                    button: new Button({props: {text: 'Enter', type: 'submit', events: {
                                click: () => {
                                    return this.onSubmit()
                                }
                            }}}),
                    
                }
        });
       
    }
    
    authController = new AuthController()
    
    onSubmit () {
        const error = this.children.form.element?.getElementsByClassName('error')
  
        const values = Object
            .values(this.children)
            .filter(child => child instanceof Form)
            .reduce((result, child) => {
                const inputData = (child as Form).getInputData();
                return { ...result, ...inputData };
            }, {});
        
        return !error?.length && this.authController.signin(values);
    }
    
     render():DocumentFragment  {
        return this.compile(`<div class="wrapper-sign-in-page">
                <header class="header"> {{{ logo }}} {{{menu}}} </header>
                <div class="wrapper-content">
                {{{title}}}
                {{{form}}}
                {{{link}}}
                </div>
           </div>`, this.props)
    }
}
