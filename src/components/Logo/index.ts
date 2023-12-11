import {Block} from '../../utils/Block.ts';

export class Logo extends Block {
    constructor() {
        super('span', '');
    }
    
    render(): DocumentFragment {
        return this.compile(`
           <a href="/">
               <img src="/assets/header-logo.svg" alt="logo"/>
           </a>
`, this.props)
    }
}
