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
            type: 'text'
        },
        {
            placeholder: 'password',
            name: 'password',
            type: 'password'
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
        this.children.button = new Button({text: 'Enter'});
        this.children.input = new Input(signInFieldList);
        this.children.link = new Link({to: `${ProjectLinksEnum["sign-up"]}`, content: 'or Sign Up'});
        this.children.title = new Title({title: 'Log In'});
        this.children.menu = new Menu(menuItemsList);
        this.children.logo = new Logo();
    }
    
    render() {
        return this.compile(
            `<div class="wrapper-sign-in-page">
                <header class="header"> {{{ logo }}} {{{menu}}} </header>
                <div class="wrapper-content">
                    <form class="form" name="sign-in-form"> {{{ title }}} {{{ input }}}  {{{ button }}} </form>
                        {{{ link }}}
                </div>
            </div>`, this.props)
    }
}
