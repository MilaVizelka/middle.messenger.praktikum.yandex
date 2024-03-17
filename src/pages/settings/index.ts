import {Logo} from '../../components/Logo';
import {Link} from '../../components/Link';
import {Input} from '../../components/Input';
import {Block} from '../../utils/Block.ts';
import {Button} from '../../components/Button';
import {Form} from "../../components/Form";
import {Title} from "../../components/Title";
import Router from "../../utils/Router.ts";
import {SettingsController} from "../../controllers/SettingsController.ts";

export class SettingsPage extends Block {
    
    constructor() {
        super('div', {});
    }
    
    init() {
        const inputValues: any = [];
        
        const user = localStorage.getItem('user');
        
        if (user) {
            Object.entries(JSON.parse(user)).forEach(([key, value]) => {
                if (key !== 'avatar') {
                    inputValues.push({ name: key, value, key: key });
                }
            });
        }
        
        this.children.logo = new Logo();
        this.children.title = new Title({title: 'Settings'});
        this.children.link = new Link({to: '/messenger', content: 'or go Chats page', router: Router});
        this.children.form = new Form({ data:
                {
                    input: new Input({data: inputValues}),
                    button: new Button({props: {text: 'Enter', type: 'submit', events: {
                        click: () => this.onSubmitProfileData()
                            }}}),
                }
        });
    }
    
    settingsController = new SettingsController()
    onSubmitProfileData () {
        // @ts-ignore
        const getId = JSON.parse(localStorage.getItem('user'));
        const values = Object.values(this.children)
            .filter(child => child instanceof Form)
            .reduce((result, child) => {
                if (child instanceof Form) {
                    const inputData = child.getInputData();
                    const { avatar, id,  ...filteredData } = inputData;
                    return { ...result, ...filteredData };
                }
                return result;
            }, {});

        
        return this.settingsController.profile(values, getId.id);
    }
    
    render() {
       return  this.compile(
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
                 {{{title}}}
                 {{{form}}}
                 {{{link}}}
            </div>
        </div>
    `, this.props)
    }
}
