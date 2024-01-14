import {Block} from '../../utils/Block.ts';
import {Link} from "../Link";
import Router from "../../utils/Router.ts";

export class Logo extends Block {
    constructor() {
        super('span', '');
    }
    
    init() {
        this.children.link = new Link({to: '/', content: '<img src="/assets/header-logo.svg" alt="logo"/>', router: Router});
    }
    render(): DocumentFragment {
        return this.compile(`
           {{{link}}}
    `, this.props)
    }
}
