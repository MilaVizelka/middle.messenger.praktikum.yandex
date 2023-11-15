import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Logo} from "../../components/logo";
import {Menu} from "../../components/menu";
import {Link} from "../../components/link";
import {Title} from "../../components/title";
import {Input} from "../../components/input";
import {Button} from "../../components/button";

const signInFieldList =
    [
        {
            placeholder: 'login',
            name: 'login',
            type: 'text'
        },
        {
            placeholder: 'password',
            name: 'password',
            type: 'password'
        },

    ] as InputProps

export class SignInPage extends Block {
    constructor() {
        super('div', {
          logo: Logo(),
          menu: Menu(),
          signUpPageLink: Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign Up'}),
          title: Title({title: 'Log In'}),
          input: Input(signInFieldList),
          button: Button({text: 'Enter'})
     });
    }
    
    init() {
    
    }
    
    render() {
        return this.compile(
            '<div class="wrapper-sign-in-page"> ' +
                '<header class="header"> {{{ logo }}} {{{ menu }}} </header> ' +
                '<div class="wrapper-content">  ' +
                    '<form class="form" name="sign-in-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form> ' +
                        '{{{ signUpPageLink }}} ' +
                '</div>  ' +
            '</div>', this.props)
    }
}
