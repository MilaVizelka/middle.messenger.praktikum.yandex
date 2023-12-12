import {Logo} from '../../components/Logo';
import {Link} from '../../components/Link';
import {Title} from '../../components/Title';

import {InputProps, ProjectLinksEnum} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';
import {Input} from '../../components/Input';
import {regexEmptyField} from '../../helpers/regex.helper.ts';
import {Button} from '../../components/Button';

const chatField = [
    {
        placeholder: 'Search for people'
    }
] as InputProps

const chatMessageField = [
    {
        placeholder: 'add message',
        className: 'input-message'
    }
] as InputProps

const chatMessages = [
    {
        id: 1,
        name: 'message',
        value: 'test',
        type: 'text',
        readonly: true
    },
    {
        id: 2,
        name: 'message',
        value: 'owner',
        role: 'owner',
        className: 'owner',
        type: 'text',
        readonly: true
    }
] as InputProps

export class ChatPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        this.children.button = new Button({
            props: {
                text: '<img class="settings-styled" src=\'/assets/send-icon.svg\' alt="settings"/>',
                type: 'submit'
            }
        });
        this.children.inputSearch = new Input(chatField);
        this.children.inputSendMessage = new Input(chatMessageField);
        this.children.inputMessage = new Input(chatMessages);
        this.children.linkToAuth = new Link({to: `${ProjectLinksEnum.settings}`, content: '<img class="settings-styled" src=\'/assets/settings.svg\' alt="settings"/>'});
        this.children.linkToProjectSettings = new Link({to: `${ProjectLinksEnum['sign-in']}`, content: '<img class="arrow-exit" src=\'/assets/exit.svg\' alt="exit"/>'});
        this.children.logo = new Logo();
        this.children.title = new Title({
            title: "Music chat"
        });
    }
    
    render() {
        const chatsPage =  this.compile(`
            <div class="wrapper-chats-page">
                <header class="header">
                    <div class="header-content">
                        {{{logo}}}
                    </div>
                    <div class="header-content-right">
                       <img src='/assets/small-avatar.svg' alt="small-avatar"/>
                       {{{linkToAuth}}}
                       {{{linkToProjectSettings}}}
                    </div>
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
                                 {{{inputSendMessage}}}
                                 <button class="button-styled" type="submit">
                                    <img class="settings-styled" src=\'/assets/send-icon.svg\' alt="submit-action"/>
                                 </button>
                            </div>
                         </form>
                     </div>
                </div>
            <div>
        `, this.props)
        
        const inputValues = {message: '', id: '1'};
        
        let isInputErr = false;
        
        chatsPage.querySelectorAll('input').forEach((input) => {
            input.addEventListener('blur', (event) => {
                const value = (event.target as HTMLInputElement).value;
                
                isInputErr = !regexEmptyField.test(value);
                
                const form = document.querySelector('form');
                
                form?.addEventListener('submit', (e) => {
                    isInputErr && e.preventDefault();
                });
                
                const obj = Object.assign(inputValues, {message: value });
                
                console.log(obj)
                
            })
        });
        return chatsPage
    }
}
