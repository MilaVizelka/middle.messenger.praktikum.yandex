import {TitleProps} from "../../models/project.model.ts";
import {Block} from "../../utils/Block.ts";

export class Title extends Block {
    
    constructor(props: TitleProps) {
        super('div', props);
    }
    
    render(): DocumentFragment {
        return this.compile(`
             <h2 class="title-styled">{{ title }}</h2>
        `, this.props)
    }
}
