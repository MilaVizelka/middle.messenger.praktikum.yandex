import { MenuProps } from "../../models/project.model.ts";
import { Block } from '../../utils/Block.ts';
import { Link } from "../Link";
import Router from "../../utils/Router.ts";

export class Menu extends Block {
    constructor(props: MenuProps) {
        super('nav', props);
    }
    
    init() {
        this.children.signUpLink = new Link({ to: '/sign-up', content: 'signUp', router: Router });
        this.children.settingsLink = new Link({ to: '/settings', content: 'settings', router: Router });
        this.children.chatsLink = new Link({ to: '/messenger', content: 'chats', router: Router });
        this.children.notFoundLink = new Link({ to: '/not-found', content: 'not-found', router: Router });
        this.children.serverErrorLink = new Link({ to: '/server-error', content: 'server-error', router: Router });
    }
    
    render(): DocumentFragment {
        const componentList = Object.values(this.children);
        const fragment = document.createDocumentFragment();
        
        componentList.forEach(component => {
            fragment.appendChild(component.element!);
        });
        
        return fragment;
    }
}
