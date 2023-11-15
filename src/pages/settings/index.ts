import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Button} from "../../components/button";
import {Input} from "../../components/input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

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
        super('div', {
            logo: Logo(),
            authPageLink: Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'}),
            button: Button({text: 'Save'}),
            input: Input(signUpFieldList),
        });
    }
    
    init() {
    
    }
    
    render() {
        return this.compile(
            ` <div class="wrapper-settings-page">
             <header class="header">
                {{{ logo }}}
                {{{ menu }}}
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
                
                {{{ authPageLink }}}
            </div>
        </div>
    `, this.props)
    }
}
