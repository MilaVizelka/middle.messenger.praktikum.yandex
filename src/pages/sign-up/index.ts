import {Logo} from '../../components/Logo';
import {Link} from '../../components/Link';
import {Title} from '../../components/Title';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {InputProps, ProjectLinksEnum} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Form} from "../../components/Form";

const signUpFieldList =
    {
        data: [
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
        
        ]
    } as InputProps

export class SignUpPage extends Block {
    
    constructor() {
        super('div', {});
    }
    init() {
        this.children.title = new Title({title: 'Let`s get started!'});
        this.children.logo = new Logo();
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'});
        this.children.form = new Form({ data:
                {
                    input: new Input(signUpFieldList),
                    button: new Button({props: {text: 'Enter', type: 'submit'}}),
                    
                }
        });
    }
    
    render() {
        return this.compile(
            `<div class="wrapper-sign-up-page">
                <header class="header"> {{{ logo }}} {{{ menu }}} </header>
                <div class="wrapper-content">
                     {{{title}}}
                     {{{form}}}
                     {{{link}}}
                </div>
            </div>`, this.props)
    }
}
