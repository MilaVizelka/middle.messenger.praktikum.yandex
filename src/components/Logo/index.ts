import {Block} from "../../utils/Block.ts";


export class Logo extends Block {
    constructor() {
        super('div', '');
    }
    
    render(): DocumentFragment {
        return this.compile(`
           <a href="/">
               <img class="logo" src="/assets/header-logo.svg" alt="logo"/>
           </a>
`, this.props)
    }
}
