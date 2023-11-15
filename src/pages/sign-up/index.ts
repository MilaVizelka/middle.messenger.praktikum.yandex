
import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Title} from "../../components/title";
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

const signUpFieldList =
    [
        {
            placeholder: "first name",
            name: "first_name",
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
            type: 'email'
        },
        {
            placeholder: 'phone',
            name: "phone",
            type: 'phone'
        },
        {
            placeholder: 'password(min.6 charact.)',
            name: "password",
            type: 'password'
        },
        
    ] as InputProps

export class SignUpPage extends Block {
    constructor() {
        super('div', {
            logo: Logo(),
            signUpPageLink: Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign In'}),
            title: Title({title: 'Let`s get started!'}),
            input: Input(signUpFieldList),
            button: Button({text: 'Create account'})
        });
    }
    
    init() {
    
    }
    
    render() {
        return this.compile(
            '<div class="wrapper-sign-up-page"> ' +
                '<header class="header"> {{{ logo }}} {{{ menu }}} </header> ' +
                '<div class="wrapper-content">  ' +
                     '<form class="form" name="sign-in-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form> ' +
                     '{{{ signUpPageLink }}} ' +
                '</div>  ' +
            '</div>', this.props)
    }
}
