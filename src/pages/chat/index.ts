import {Logo} from "../../components/Logo";
import {Link} from "../../components/Link";
import {Title} from "../../components/Title";

import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";


const chatField = [
    {
        placeholder: 'Search for people'
    }
] as InputProps

export class ChatPage extends Block {
    
    constructor() {
        super('div', '');
    }
    
    init() {
        this.children.button = new Button({text: 'Create account'});
        this.children.input = new Input(chatField);
        this.children.linkToAuth = new Link({to: `${ProjectLinksEnum.settings}`, content: '<img class="settings-styled" src=\'/assets/settings.svg\' alt="settings"/>'});
        this.children.linkToProjectSettings = new Link({to: `${ProjectLinksEnum['sign-in']}`, content: '<img class="arrow-exit" src=\'/assets/exit.svg\' alt="exit"/>'});
        this.children.logo = new Logo();
        this.children.title = new Title({
            title: "Music"
        });
    }
    
    render() {
        return this.compile(`
            <div class="wrapper-chats-page">
                <header class="header">
                    <div class="header-content-left">
                       {{{logo}}}
                        <label class="input-search-label">
                            <img src='/assets/search.svg' alt="search"/>
                            {{{input}}}
                        </label>
                    </div>
                     <div class="header-content-right">
                        <img src='/assets/notification.svg' alt="notification"/>
                        {{{linkToAuth}}}
                        <img src='/assets/small-avatar.svg' alt="small-avatar"/>
                       {{{linkToProjectSettings}}}
                    </div>
                </header>
                
                <div class="wrapper-chats">
                     <aside class="preview-chats">
                          {{{title}}}
                     </aside>
                     <div class="main-chats">
                         <div class="main-chats-header">
                             <img src='/assets/user.svg' alt="user"/>
                             <span>Alexandr Ivanov</span>
                         </div>
                     </div>
                </div>
            <div>
        `, this.props)
        }
}
