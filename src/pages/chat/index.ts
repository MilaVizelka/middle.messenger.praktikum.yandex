import {Logo} from "../../components/logo";
import {Link} from "../../components/link";
import {Title} from "../../components/title";
import {Input} from "../../components/input";
import {InputProps, ProjectLinksEnum} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";


const chatField = [
    {
        placeholder: 'Search for people'
    }
] as InputProps

export class ChatPage extends Block {
    
    constructor() {
        super('div', {
            logo: Logo(),
            linkToSettings: Link({
                to: `${ProjectLinksEnum.settings}`,
                content: '<img class="settings-styled" src=\'/assets/settings.svg\' alt="settings"/>'
            }),
            linkToAuth: Link({
                to: `${ProjectLinksEnum["sign-up"]}`,
                content: '<img class="arrow-exit" src=\'/assets/exit.svg\' alt="exit"/>'
            }),
            title: Title({
                title: "Music"
            }),
            input: Input(chatField),
        });
    }
    
    init() {
    
    }
    
    render() {
        return this.compile(
            `
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
                        {{{linkToSettings}}}
                        <img src='/assets/small-avatar.svg' alt="small-avatar"/>
                       {{{linkToAuth}}}
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
