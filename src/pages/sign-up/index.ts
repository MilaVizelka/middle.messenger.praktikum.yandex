
import {Logo} from "../../components/Logo";
import {Link} from "../../components/Link";
import {Title} from "../../components/Title";
import {Input} from "../../components/Input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Button} from "../../components/Button";

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
        super('div', {});
    }
    init() {
        this.children.button = new Button({text: 'Create account'});
        this.children.input = new Input(signUpFieldList);
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-in"]}`, content: 'or Sign In'});
        this.children.logo = new Logo();
        this.children.title = new Title({title: 'Let`s get started!'});
    }
    
    render() {
        return this.compile(
            '<div class="wrapper-sign-up-page"> ' +
                '<header class="header"> {{{ logo }}} {{{ menu }}} </header> ' +
                '<div class="wrapper-content">  ' +
                     '<form class="form" name="sign-up-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form> ' +
                     '{{{ link }}} ' +
                '</div>  ' +
            '</div>', this.props)
    }
}
