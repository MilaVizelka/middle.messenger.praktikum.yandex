import {LinkProps} from '../../models/project.model.ts';
import {Block} from '../../utils/Block.ts';

export class Link extends Block {
    constructor(props: LinkProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
        return this.compile(`
            <a class = "link-styled" href={{ to }}>{{{ content }}}</a>
        `, this.props)
    }
}
