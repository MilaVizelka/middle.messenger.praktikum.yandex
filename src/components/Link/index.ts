import {Block} from '../../utils/Block.ts';
import {PropsWithRouter} from "../../hocs/withRouter.ts";

interface LinkProps extends PropsWithRouter {
    to: string;
    content: string;
    events?: {
        click: () => void;
    };
    
}
export class Link extends Block {
    constructor(props: LinkProps) {
        super('div',{
            ...props,
            events: {
                click: () => this.navigate()
            },
        });
    }
    
    navigate() {
        this.props.router.go(this.props.to);
    }
    
    render(): DocumentFragment {
        return this.compile(`
            <span class = "link-styled">{{{ content }}}</span>
        `, this.props)
    }
}
