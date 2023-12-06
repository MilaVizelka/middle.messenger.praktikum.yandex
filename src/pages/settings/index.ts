import {Logo} from "../../components/Logo";
import {Link} from "../../components/Link";
import {Input} from "../../components/Input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Button} from "../../components/Button";
import {handleInputValidation} from "../../helpers/handleInputValidation.ts";

const signUpFieldList =
    [
        {
            placeholder: 'first name',
            name: 'first_name',
            type: 'text'
        },
        {
            placeholder: 'second name',
            name: 'second_name',
            type: 'text'
        },
        {
            placeholder: 'display name',
            name: 'display_name',
            type: 'text'
        },
        {
            placeholder: 'login',
            name: 'login',
            type: 'text'
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
    
    ] as InputProps

export class SettingsPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'});
        this.children.logo = new Logo();
        this.children.button = new Button({text: 'Save', type: 'submit'});
        this.children.input = new Input(signUpFieldList);
    }
    
    render() {
        const settingsPage =  this.compile(
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
                <form class="form" name="settings-form">
                    {{{ input }}}
                    <div>{{{ button }}}</div>
                </form>
                
                {{{ link }}}
            </div>
        </div>
    `, this.props)
        
        const inputValues = {login: '', password: '', first_name: '',
            second_name: '', email: '', phone: ''};
        
        handleInputValidation(settingsPage, inputValues)
        
        return settingsPage
    }
}
