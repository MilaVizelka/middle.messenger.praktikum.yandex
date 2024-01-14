import {Logo} from '../../components/Logo';
import {Link} from '../../components/Link';
import {Input} from '../../components/Input';
import {InputProps} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Button} from '../../components/Button';
import {Form} from "../../components/Form";
import {Title} from "../../components/Title";
import Router from "../../utils/Router.ts";

const signUpFieldList =
    {
        data: [
            {
                placeholder: 'first name',
                name: 'first_name',
            },
            {
                placeholder: 'second name',
                name: 'second_name'
            },
            {
                placeholder: 'display name',
                name: 'display_name',
            },
            {
                placeholder: 'login',
                name: 'login',
            },
            {
                placeholder: 'email',
                name: 'email',
                type: 'email'
            },
            {
                placeholder: 'phone',
                name: 'phone',
                type: 'phone'
            },
        
        ]
    } as InputProps

export class SettingsPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.logo = new Logo();
        this.children.title = new Title({title: 'Settings'});
        this.children.link = new Link({to: '/messenger', content: 'or go Chats page', router: Router});
        this.children.form = new Form({ data:
                {
                    input: new Input(signUpFieldList),
                    button: new Button({props: {text: 'Enter', type: 'submit'}}),
                    
                }
        });
    }
    
    render() {
       return  this.compile(
            ` <div class="wrapper-settings-page">
             <header class="header">
                {{{ logo }}}
             </header>
             <div class="wrapper-content">
                 <div class="wrapper-avatar">
                    <img src='/assets/avatar.svg' alt="avatar"/>
                    <img src='/assets/empty-avatar.svg' alt="empty-avatar"/>
                    <span>avatar</span>
                 </div>
                 {{{title}}}
                 {{{form}}}
                 {{{link}}}
            </div>
        </div>
    `, this.props)
    }
}
