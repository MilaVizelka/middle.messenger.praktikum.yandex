import {Logo} from '../../components/Logo';
import {Link} from '../../components/Link';
import {Title} from '../../components/Title';

import {InputProps} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Input} from '../../components/Input';
import {Form} from "../../components/Form";
import {Button} from "../../components/Button";
import Router from "../../utils/Router.ts";

const chatsSearchField = {
    data: [
        {
            placeholder: 'Search for people',
            name: 'search'
        }
    ]
} as InputProps

const chatMessageField = {
    data: [
        {
            placeholder: 'add message',
            className: 'input-message',
            name: 'message'
        }
    ]
} as InputProps

const chatMessages = {
    data: [
        {
            id: 1,
            name: 'chat-message',
            value: 'test',
            type: 'text',
            readonly: true
        },
        {
            id: 2,
            name: 'chat-owner-message',
            value: 'owner',
            role: 'owner',
            className: 'owner',
            type: 'text',
            readonly: true
        }
    ]
} as InputProps

export class ChatPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.inputSearch = new Input( chatsSearchField);
        this.children.inputSendMessage = new Input(chatMessageField);
        this.children.inputMessage = new Input(chatMessages);
        this.children.linkToAuth = new Link({to: `/`, content: '<img class="arrow-exit" src=\'/assets/exit.svg\' alt="exit"/>', router: Router});
        this.children.linkToProjectSettings = new Link({to: `/settings`, content: '<img class="settings-styled" src=\'/assets/settings.svg\' alt="settings"/> ', router: Router});
        this.children.logo = new Logo();
        this.children.title = new Title({
            title: "Music chat"
        });
        this.children.form = new Form({ data:
                {
                    input: new Input(chatMessageField),
                    button: new Button({props: {text: 'ss', type: 'submit'}}),
                    title: new Title({title: ''}),
                    link: new Link({to: ``, content: '', router: Router})
                }
        });
    }
    
    render() {
        return this.compile(`
            <div class="wrapper-chats-page">
                <header class="header">
                    <div class="header-content">
                        {{{logo}}}
                    </div>
                    <div class="header-content-right">
                       <img src='/assets/small-avatar.svg' alt="small-avatar"/>
                       {{{linkToProjectSettings}}}
                    </div>
                    {{{linkToAuth}}}
                </header>
                
                <div class="wrapper-chats">
                     <aside class="preview-chats">
                            {{{inputSearch}}}
                            <div class="preview-message-block">Just Matt</div>
                            <div class="preview-message-block active">Joe The Runner</div>
                            
                     </aside>
                     <div class="main-chats">
                         <div class="main-chats-header">
                             <img src='/assets/user.svg' alt="user"/>
                             <span>Joe The Runner</span>
                         </div>
                         <div class="date">10 december</div>
                         <form>
                             <div class="block-message">
                                 {{{inputMessage}}}
                            </div>
                            <div class="block-submit">
                                 {{{form}}}
                            </div>
                         </form>
                     </div>
                </div>
            <div>
        `, this.props)
    }
}
